import Reveal from '@/components/Reveal';
import { StarIcon } from '@/components/icons';
import { testimonials } from '@/lib/content';

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-purple-400 tracking-wider uppercase mb-3">
            Testimonials
          </span>
          <h2 className="section-title text-white mb-5">What Our Clients Say</h2>
          <p className="text-gray-400 text-lg">Real feedback from enterprise leaders who&apos;ve transformed with AI.</p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.05}>
              <div className="glass-card rounded-2xl p-7 h-full">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, idx) => (
                    <StarIcon key={idx} />
                  ))}
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">&quot;{t.quote}&quot;</p>
                <div className="mt-5 pt-4 border-t border-white/5">
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-gray-400 text-xs">{t.role}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
