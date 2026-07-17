import { AboutController } from "@/controllers";

export default function AboutPage() {
  const content = AboutController.getAboutContent();

  return (
    <div className="bg-[#F5F5F5]">
      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
        <div className="rounded-xl bg-white p-6 shadow-sm sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#FF6A00]">
            About
          </p>
          <h1 className="mt-2 text-3xl font-semibold text-[#222]">
            {content.title}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-[#666]">
            {content.body}
          </p>
          <p className="mt-4 text-base leading-relaxed text-[#666]">
            Alikhan helps buyers discover wholesale products with clear pricing,
            MOQ, capacity, and supplier-ready product pages — similar to modern
            B2B marketplaces.
          </p>
        </div>
      </div>
    </div>
  );
}
