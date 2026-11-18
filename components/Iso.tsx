import type { CSSProperties, ReactNode } from "react";
import type { ServiceId } from "@/lib/content";
import { markPaths } from "@/lib/mark";

// Isometric projection of a point on the ground plane (x, y) at height z.
const P = (x: number, y: number, z = 0): [number, number] => [
  +((x - y) * 0.866).toFixed(2),
  +((x + y) * 0.5 - z).toFixed(2),
];
const pts = (...points: [number, number][]) => points.map((p) => p.join(",")).join(" ");

// A flat drawing lifted to height z. Layers rise further apart when the card is hovered.
function Layer({ z = 0, level = 0, children }: { z?: number; level?: number; children: ReactNode }) {
  return (
    <g className="iso-l" style={{ "--z": level } as CSSProperties}>
      <g transform={`translate(0 ${-z}) matrix(0.866 0.5 -0.866 0.5 0 0)`}>{children}</g>
    </g>
  );
}

function Plane({ w = 50, h = 50, dashed = false }: { w?: number; h?: number; dashed?: boolean }) {
  return (
    <rect
      x={-w}
      y={-h}
      width={w * 2}
      height={h * 2}
      fill={dashed ? "none" : "var(--iso-fill)"}
      stroke="currentColor"
      strokeOpacity={dashed ? 0.25 : 0.5}
      strokeDasharray={dashed ? "3 3" : undefined}
      vectorEffect="non-scaling-stroke"
    />
  );
}

// Selection handles at the corners of a plane, drawn in screen space so they stay square.
function Handles({ w = 50, h = 50, z = 0, level = 0 }: { w?: number; h?: number; z?: number; level?: number }) {
  const corners = [P(-w, -h, z), P(w, -h, z), P(w, h, z), P(-w, h, z)];
  return (
    <g className="iso-l" style={{ "--z": level } as CSSProperties}>
      {corners.map(([x, y], i) => (
        <rect key={i} x={x - 2.5} y={y - 2.5} width="5" height="5" fill="var(--iso-fill)" stroke="currentColor" />
      ))}
    </g>
  );
}

function Box({ x, y, w, d, h }: { x: number; y: number; w: number; d: number; h: number }) {
  return (
    <g stroke="currentColor" strokeOpacity=".6" strokeLinejoin="round">
      <polygon fill="var(--iso-fill)" points={pts(P(x, y + d), P(x + w, y + d), P(x + w, y + d, h), P(x, y + d, h))} />
      <polygon fill="var(--iso-fill)" points={pts(P(x + w, y), P(x + w, y + d), P(x + w, y + d, h), P(x + w, y, h))} />
      <polygon
        fill="currentColor"
        fillOpacity=".16"
        points={pts(P(x, y, h), P(x + w, y, h), P(x + w, y + d, h), P(x, y + d, h))}
      />
    </g>
  );
}

const Bar = ({ x, y, w, o = 0.3, h = 4 }: { x: number; y: number; w: number; o?: number; h?: number }) => (
  <rect x={x} y={y} width={w} height={h} fill="currentColor" fillOpacity={o} />
);

function Branding() {
  return (
    <>
      <Layer>
        <Plane />
        {[0.9, 0.55, 0.3, 0.12].map((o, i) => (
          <rect key={i} x={-42 + i * 21} y={26} width="17" height="17" fill="currentColor" fillOpacity={o} />
        ))}
        <Bar x={-42} y={10} w={60} />
        <Bar x={-42} y={-2} w={38} o={0.18} />
      </Layer>
      <Layer z={36} level={1}>
        <Plane />
        <text x="-42" y="44" fontSize="30" fontWeight="600" fill="currentColor" style={{ letterSpacing: "-0.04em" }}>
          Aa
        </text>
        <Bar x={6} y={30} w={36} o={0.25} />
        <Bar x={6} y={38} w={24} o={0.25} />
      </Layer>
      <Layer z={72} level={2}>
        <Plane />
        <g transform="translate(-26 -26) scale(.52)" fill="currentColor">
          {Object.values(markPaths).map((d) => (
            <path key={d.slice(0, 12)} d={d} />
          ))}
        </g>
      </Layer>
      <Handles z={72} level={2} />
    </>
  );
}

function Product() {
  return (
    <>
      <Layer>
        <Plane />
        <g stroke="currentColor" strokeOpacity=".22" vectorEffect="non-scaling-stroke">
          {[-30, -10, 10, 30].map((v) => (
            <path key={v} d={`M${v} -50V50M-50 ${v}H50`} vectorEffect="non-scaling-stroke" />
          ))}
        </g>
      </Layer>
      <Layer z={36} level={1}>
        <Plane />
        <g fill="none" stroke="currentColor" strokeOpacity=".5" strokeDasharray="3 2">
          <rect x="-42" y="-42" width="20" height="84" vectorEffect="non-scaling-stroke" />
          <rect x="-16" y="-42" width="58" height="14" vectorEffect="non-scaling-stroke" />
          <rect x="-16" y="-22" width="27" height="26" vectorEffect="non-scaling-stroke" />
          <rect x="15" y="-22" width="27" height="26" vectorEffect="non-scaling-stroke" />
          <rect x="-16" y="10" width="58" height="32" vectorEffect="non-scaling-stroke" />
        </g>
      </Layer>
      <Layer z={72} level={2}>
        <Plane />
        <rect x="-42" y="-42" width="20" height="84" fill="currentColor" fillOpacity=".14" />
        {[-34, -26, -18].map((y) => (
          <Bar key={y} x={-38} y={y} w={12} h={3} o={0.4} />
        ))}
        <Bar x={-16} y={-40} w={30} h={6} o={0.9} />
        <rect x="-16" y="-22" width="27" height="26" fill="currentColor" fillOpacity=".9" />
        <rect x="15" y="-22" width="27" height="26" fill="currentColor" fillOpacity=".18" />
        <rect x="-16" y="10" width="58" height="32" fill="currentColor" fillOpacity=".1" />
        <polyline points="-12,36 0,26 10,30 22,16 38,20" fill="none" stroke="currentColor" vectorEffect="non-scaling-stroke" />
      </Layer>
      <Handles z={72} level={2} />
      <g className="iso-l" style={{ "--z": 2 } as CSSProperties}>
        <path d="M52 -64v15l4-4 3 7 3-1.3-3-7h6z" fill="currentColor" stroke="var(--iso-fill)" strokeWidth=".8" />
      </g>
    </>
  );
}

function Engineering() {
  const label = (text: string, z: number, level: number) => {
    const [x, y] = P(50, -50, z);
    return (
      <g className="iso-l" style={{ "--z": level } as CSSProperties}>
        <path d={`M${x + 3} ${y}h14`} stroke="currentColor" strokeOpacity=".4" />
        <text x={x + 21} y={y + 2.5} fontSize="7" fontFamily="var(--font-geist-mono)" fill="currentColor" fillOpacity=".7">
          {text}
        </text>
      </g>
    );
  };
  return (
    <>
      <Layer>
        <Plane />
        <rect x="-42" y="-42" width="84" height="12" fill="currentColor" fillOpacity=".3" />
        {[-22, -8, 6, 20, 34].map((y) => (
          <g key={y}>
            <Bar x={-42} y={y} w={22} h={5} o={0.16} />
            <Bar x={-16} y={y} w={34} h={5} o={0.16} />
            <Bar x={22} y={y} w={20} h={5} o={0.16} />
          </g>
        ))}
      </Layer>
      <Layer z={36} level={1}>
        <Plane />
        <g stroke="currentColor" strokeOpacity=".5" fill="var(--iso-fill)">
          <path d="M-28 -26 0 0 28 -26M0 0v30" fill="none" vectorEffect="non-scaling-stroke" className="iso-dash" strokeDasharray="3 3" />
          {[
            [-28, -26],
            [28, -26],
            [0, 0],
            [0, 30],
          ].map(([x, y]) => (
            <rect key={`${x}${y}`} x={x - 8} y={y - 8} width="16" height="16" vectorEffect="non-scaling-stroke" />
          ))}
        </g>
        <rect x="-4" y="-4" width="8" height="8" fill="currentColor" />
      </Layer>
      <Layer z={72} level={2}>
        <Plane />
        <rect x="-50" y="-50" width="100" height="13" fill="currentColor" fillOpacity=".14" />
        {[-44, -37, -30].map((x) => (
          <circle key={x} cx={x} cy="-43.5" r="2.2" fill="currentColor" fillOpacity=".6" />
        ))}
        {[
          [-40, 24, 0.9],
          [-32, 40, 0.3],
          [-32, 28, 0.3],
          [-24, 46, 0.55],
          [-24, 20, 0.3],
          [-32, 34, 0.3],
          [-40, 12, 0.9],
        ].map(([x, w, o], i) => (
          <Bar key={i} x={x} y={-28 + i * 10} w={w} o={o} />
        ))}
      </Layer>
      {label("UI", 72, 2)}
      {label("API", 36, 1)}
      {label("DATA", 0, 0)}
    </>
  );
}

function Landing() {
  return (
    <>
      <Layer>
        <Plane w={34} h={72} />
        <Bar x={-28} y={-66} w={12} o={0.8} />
        <Bar x={8} y={-66} w={20} o={0.2} />
        <Bar x={-28} y={-50} w={52} h={7} o={0.9} />
        <Bar x={-28} y={-39} w={36} h={7} o={0.9} />
        <Bar x={-28} y={-26} w={44} o={0.22} />
        <rect x="-28" y="-16" width="24" height="9" fill="currentColor" />
        <rect x="0" y="-16" width="20" height="9" fill="none" stroke="currentColor" strokeOpacity=".5" vectorEffect="non-scaling-stroke" />
        <path d="M-34 4H34" stroke="currentColor" strokeOpacity=".25" vectorEffect="non-scaling-stroke" />
      </Layer>
      <g className="iso-l" style={{ "--z": 0 } as CSSProperties}>
        <Box x={-26} y={14} w={13} d={13} h={16} />
        <Box x={-6} y={14} w={13} d={13} h={32} />
        <Box x={14} y={14} w={13} d={13} h={54} />
      </g>
      <Layer>
        <Bar x={-28} y={40} w={56} o={0.22} />
        <Bar x={-28} y={49} w={40} o={0.22} />
        <Bar x={-28} y={58} w={48} o={0.22} />
      </Layer>
    </>
  );
}

function Websites() {
  // A deck of pages fanned back to front, the home page on top.
  const pages = [-24, -8, 8, 24];
  return (
    <>
      <Layer>
        <Plane w={56} h={56} dashed />
      </Layer>
      {pages.map((offset, i) => (
        <Layer key={offset} z={i * 18} level={i * 0.7}>
          <g transform={`translate(${offset} ${-offset})`}>
            <rect x="-26" y="-36" width="52" height="72" fill="var(--iso-fill)" stroke="currentColor" strokeOpacity=".5" vectorEffect="non-scaling-stroke" />
            <rect x="-26" y="-36" width="52" height="9" fill="currentColor" fillOpacity={i === 3 ? 0.9 : 0.16} />
            <rect x="-19" y="-20" width="38" height="22" fill="currentColor" fillOpacity={i === 3 ? 0.28 : 0.1} />
            <Bar x={-19} y={9} w={38} h={3.5} o={0.3} />
            <Bar x={-19} y={17} w={24} h={3.5} o={0.3} />
            <Bar x={-19} y={25} w={30} h={3.5} o={0.3} />
          </g>
        </Layer>
      ))}
    </>
  );
}

function Motion() {
  const [ax, ay] = P(-36, 10, 0);
  const [bx, by] = P(0, 0, 44);
  return (
    <>
      <Layer>
        <Plane w={58} h={36} />
        {[
          [-28, [-50, 34], [-12, 22], [14, 36]],
          [-10, [-50, 20], [-26, 44], [22, 28]],
          [8, [-50, 58], [12, 38]],
        ].map(([y, ...clips], t) =>
          (clips as number[][]).map(([x, w], c) => (
            <rect key={`${t}${c}`} x={x} y={y as number} width={w} height="12" fill="currentColor" fillOpacity={[0.85, 0.25, 0.5][(t + c) % 3]} />
          )),
        )}
        <path d="M-6 -36V36" stroke="currentColor" vectorEffect="non-scaling-stroke" />
        {[-40, -18, 6, 30].map((x) => (
          <rect key={x} x={x - 2.5} y="25" width="5" height="5" transform={`rotate(45 ${x} 27.5)`} fill="currentColor" />
        ))}
      </Layer>
      <path
        className="iso-dash"
        d={`M${ax} ${ay}C${ax} ${ay - 40} ${bx - 40} ${by + 10} ${bx} ${by}`}
        fill="none"
        stroke="currentColor"
        strokeOpacity=".5"
        strokeDasharray="3 3"
      />
      <Layer z={44} level={2}>
        <Plane w={30} h={19} />
        <path d="M-6 -8v16l13-8z" fill="currentColor" />
      </Layer>
      <Handles w={30} h={19} z={44} level={2} />
    </>
  );
}

const art: Record<ServiceId, () => React.JSX.Element> = {
  branding: Branding,
  product: Product,
  engineering: Engineering,
  landing: Landing,
  websites: Websites,
  motion: Motion,
};

export function ServiceArt({ id, className = "" }: { id: ServiceId; className?: string }) {
  const Art = art[id];
  return (
    <svg viewBox="-106 -132 212 204" className={`iso ${className}`} aria-hidden="true">
      <Art />
    </svg>
  );
}
