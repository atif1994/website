import Link from "next/link";
import type { HomeContent } from "@/models";

interface HomeViewProps {
  content: HomeContent;
}

export function HomeView({ content }: HomeViewProps) {
  return (
    <main className="mx-auto flex max-w-5xl flex-1 flex-col justify-center px-6 py-20">
      <p className="mb-3 text-sm font-medium uppercase tracking-widest text-zinc-500">
        {content.brand}
      </p>
      <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl">
        {content.headline}
      </h1>
      <p className="mt-4 max-w-xl text-lg text-zinc-600">{content.description}</p>
      <div className="mt-8">
        <Link
          href={content.ctaHref}
          className="inline-flex items-center bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-zinc-700"
        >
          {content.ctaLabel}
        </Link>
      </div>
    </main>
  );
}
