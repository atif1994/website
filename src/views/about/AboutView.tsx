import type { AboutContent } from "@/controllers";

interface AboutViewProps {
  content: AboutContent;
}

export function AboutView({ content }: AboutViewProps) {
  return (
    <main className="mx-auto max-w-5xl flex-1 px-6 py-20">
      <h1 className="text-3xl font-semibold tracking-tight text-zinc-900">
        {content.title}
      </h1>
      <p className="mt-4 max-w-2xl text-lg leading-relaxed text-zinc-600">
        {content.body}
      </p>
    </main>
  );
}
