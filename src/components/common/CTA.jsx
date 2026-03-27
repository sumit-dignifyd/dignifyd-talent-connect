export default function CTASection({
  leading_title,
  supporting_title,
  description,
}) {
  return (
    <section className="w-full bg-black py-28 text-center">
      <div className="mx-auto max-w-3xl">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-[#1a0f2e]/60 px-4 py-1.5 backdrop-blur-xl">
          <span className="h-2 w-2 rounded-full bg-purple-400"></span>
          <span className="text-xs text-gray-300">Get Started</span>
        </div>

        <h2 className="text-3xl leading-tight font-semibold text-white md:text-5xl">
          {leading_title} <br />
          {supporting_title}
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-sm text-gray-400 md:text-base">
          {description}
        </p>

        <div className="mt-10">
          <button className="rounded-full cursor-pointer bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-3 text-sm font-medium text-white shadow-[0_0_25px_rgba(168,85,247,0.4)] transition hover:shadow-[0_0_35px_rgba(168,85,247,0.6)]">
            Get started now →
          </button>
        </div>
      </div>
    </section>
  );
}
