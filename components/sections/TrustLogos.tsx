import { trustLogos } from '@/lib/content';

export default function TrustLogos() {
  return (
    <section className="py-12 md:py-16 bg-[#0f0f0f] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-medium text-gray-500 uppercase tracking-wider mb-8">
          Trusted by forward-thinking organizations
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
          {trustLogos.map((name) => (
            <span key={name} className="trust-logo text-2xl font-bold text-white/20 tracking-tight">
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
