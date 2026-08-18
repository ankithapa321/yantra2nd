import Reveal from '@/components/Reveal';
import { solutions } from '@/lib/content';

export default function Solutions() {
  return (
    <section id="solutions" className="py-20 md:py-28 bg-[#0a0a0a] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-purple-400 tracking-wider uppercase mb-3">
            Solutions
          </span>
          <h2 className="section-title text-white mb-5">
            AI Solutions for the
            <br />
            Modern Enterprise
          </h2>
          <p className="text-gray-400 text-lg">
            End-to-end AI capabilities designed to transform your business operations and drive measurable outcomes.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.05}>
              <div className="glass-card rounded-2xl p-7 card-hover h-full">
                <div className={`w-12 h-12 rounded-xl bg-${s.color}-500/20 flex items-center justify-center mb-5`}>
                  <svg className={`w-6 h-6 text-${s.color}-400`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={s.path} />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{s.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
                
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
