export default function CTA() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-gradient-to-br from-purple-900/30 via-[#0a0a0a] to-indigo-900/20">
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none"></div>

      <div className="hero-glow top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/10"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="section-title text-white mb-5">
          Ready to Put AI to Work?
        </h2>

        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10">
          Let&apos;s explore how intelligent technology can transform your
          business operations and drive real growth.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
  href="/contact"
  className="btn-secondary px-8 py-3.5 rounded-full text-base font-semibold"
>
  Contact Us
</a>
        </div>
      </div>
    </section>
  );
}