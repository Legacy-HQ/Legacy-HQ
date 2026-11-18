import { Logo } from "@/components/Logo";

export default function NotFound() {
  return (
    <main className="wrap flex min-h-screen flex-col justify-between py-8">
      <a href="/" aria-label="Home">
        <Logo />
      </a>
      <div>
        <p className="label text-muted">
          <span className="text-accent">◢</span> 404
        </p>
        <h1 className="display mt-6 text-[clamp(3.4rem,11vw,11rem)]">
          This page got <em className="text-accent">folded away.</em>
        </h1>
        <a href="/" className="btn btn-ink ear mt-10">
          Back to the studio <span className="arrow">↗</span>
        </a>
      </div>
      <span />
    </main>
  );
}
