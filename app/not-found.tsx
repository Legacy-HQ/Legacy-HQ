import Link from "next/link";

export default function NotFound() {
  return (
    <main className="wrap flex min-h-[70vh] flex-col items-center justify-center py-24 text-center">
      <p className="label flex items-center text-muted">
        <span className="pip" /> 404
      </p>
      <h1 className="display h1 mt-6">
        This page got <em>folded away.</em>
      </h1>
      <Link href="/" className="btn btn-ink mt-10">
        Back to the studio <span className="arrow">→</span>
      </Link>
    </main>
  );
}
