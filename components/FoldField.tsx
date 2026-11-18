"use client";

import { useEffect, useRef } from "react";

const VERT = `#version 300 es
void main() {
  vec2 p = vec2(float((gl_VertexID << 1) & 2), float(gl_VertexID & 2));
  gl_Position = vec4(p * 2.0 - 1.0, 0.0, 1.0);
}`;

// A sheet of paper folded along several creases, lit from one side.
// Heights are sums of triangle waves, so every face is flat and every crease is sharp,
// in the three tones of the brand's dark banner (shadow, mid and lit planes).
const FRAG = `#version 300 es
precision highp float;
uniform vec2 uRes;
uniform float uTime;
uniform vec2 uPtr;
uniform float uScroll;
out vec4 outColor;

float tri(float x) { return abs(fract(x) - 0.5); }
float hash(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}
float height(vec2 p) {
  float t = uTime * 0.03;
  p += 0.05 * vec2(sin(p.y * 1.7 + t * 3.0), cos(p.x * 1.3 - t * 2.0));
  float h = 0.0;
  h += 1.00 * tri(dot(p, vec2(0.80, 0.60)) * 0.70 + t + uScroll * 0.35);
  h += 0.70 * tri(dot(p, vec2(-0.55, 0.83)) * 1.05 - t * 0.8 + 0.15);
  h += 0.40 * tri(dot(p, vec2(0.98, -0.17)) * 1.55 + t * 0.6 + 0.3);
  h += 0.65 * tri(length(p - vec2(0.62, -0.08)) * 0.85 - t * 0.7);
  return h;
}
void main() {
  vec2 p = (gl_FragCoord.xy - 0.5 * uRes) / uRes.y;
  float e = 1.5 / uRes.y;
  float h = height(p);
  float hr = height(p + vec2(e, 0.0));
  float hl = height(p - vec2(e, 0.0));
  float hu = height(p + vec2(0.0, e));
  float hd = height(p - vec2(0.0, e));
  vec3 n = normalize(vec3(hl - hr, hd - hu, 2.0 * e * 1.5));
  vec3 light = normalize(vec3(-0.5 + (uPtr.x - 0.5) * 1.1, 0.5 + (uPtr.y - 0.5) * 1.1, 0.72));
  float d = clamp(dot(n, light), 0.0, 1.0);

  vec3 col = mix(vec3(0.020, 0.043, 0.043), vec3(0.039, 0.063, 0.063), smoothstep(0.0, 0.4, d));
  col = mix(col, vec3(0.114, 0.137, 0.141), smoothstep(0.35, 0.8, d));
  col = mix(col, vec3(0.19, 0.22, 0.225), smoothstep(0.82, 1.0, d));

  // hairline along each crease
  float crease = abs(hr + hl + hu + hd - 4.0 * h) / e;
  col += vec3(0.96, 0.95, 0.93) * smoothstep(0.25, 1.1, crease) * 0.06;

  vec2 uv = gl_FragCoord.xy / uRes;
  col *= mix(0.5, 1.0, smoothstep(0.0, 0.6, uv.y));
  col += (hash(gl_FragCoord.xy + fract(uTime) * 100.0) - 0.5) * 0.022;
  outColor = vec4(col, 1.0);
}`;

export function FoldField({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const gl = canvas?.getContext("webgl2", { antialias: false, alpha: false, powerPreference: "low-power" });
    if (!canvas || !gl) return;

    const compile = (type: number, source: string) => {
      const shader = gl.createShader(type)!;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      return shader;
    };
    const program = gl.createProgram()!;
    gl.attachShader(program, compile(gl.VERTEX_SHADER, VERT));
    gl.attachShader(program, compile(gl.FRAGMENT_SHADER, FRAG));
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return;
    gl.useProgram(program);
    const vao = gl.createVertexArray();
    gl.bindVertexArray(vao);

    const uRes = gl.getUniformLocation(program, "uRes");
    const uTime = gl.getUniformLocation(program, "uTime");
    const uPtr = gl.getUniformLocation(program, "uPtr");
    const uScroll = gl.getUniformLocation(program, "uScroll");

    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    let visible = true;
    let px = 0.5;
    let py = 0.5;
    let tx = 0.5;
    let ty = 0.5;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = Math.max(1, Math.round(canvas.clientWidth * dpr));
      canvas.height = Math.max(1, Math.round(canvas.clientHeight * dpr));
      gl.viewport(0, 0, canvas.width, canvas.height);
      if (still) draw(0);
    };

    const draw = (now: number) => {
      px += (tx - px) * 0.04;
      py += (ty - py) * 0.04;
      const rect = canvas.getBoundingClientRect();
      gl.uniform2f(uRes, canvas.width, canvas.height);
      gl.uniform1f(uTime, now / 1000);
      gl.uniform2f(uPtr, px, py);
      gl.uniform1f(uScroll, -rect.top / Math.max(1, window.innerHeight));
      gl.drawArrays(gl.TRIANGLES, 0, 3);
      if (visible && !still) raf = requestAnimationFrame(draw);
    };

    const onMove = (e: PointerEvent) => {
      tx = e.clientX / window.innerWidth;
      ty = 1 - e.clientY / window.innerHeight;
    };

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      cancelAnimationFrame(raf);
      if (visible) raf = requestAnimationFrame(draw);
    });
    io.observe(canvas);
    window.addEventListener("pointermove", onMove, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  return <canvas ref={ref} className={`field ${className}`} aria-hidden="true" />;
}
