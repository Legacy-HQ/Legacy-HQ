import Link from "next/link";

export default function NotFound() {
  return (
    <main className="wrap flex min-h-[80vh] flex-col justify-center pb-24 pt-36">
      <p className="label flex items-center text-muted">
        <span className="pip" /> 404
      </p>
      <h1 className="display mt-6 text-[clamp(3.4rem,11vw,11rem)]">
        This page got <em>folded away.</em>
      </h1>
      <div>
        <Link href="/" className="btn btn-ink leaf mt-10">
          Back to the studio <span className="arrow">↗</span>
        </Link>
      </div>
    </main>
  );
}
