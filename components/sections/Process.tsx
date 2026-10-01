import Reveal from '@/components/Reveal';
import { processSteps } from '@/lib/content';

export default function Process() {
  return (
    <section className="py-20 md:py-28 bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-purple-400 tracking-wider uppercase mb-3">
            Process
          </span>
          <h2 className="section-title text-white mb-5">How We Build With AI</h2>
          <p className="text-gray-400 text-lg">A proven methodology for delivering enterprise-grade AI solutions.</p>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-6">
          {processSteps.map((step, i) => (
            <Reveal key={step.num} delay={i * 0.05}>
              <div className="text-center">
                <div className={`w-14 h-14 rounded-2xl bg-${step.color}-500/20 flex items-center justify-center mx-auto mb-4`}>
                  <span className={`text-2xl font-bold text-${step.color}-400`}>{step.num}</span>
                </div>
                <h4 className="text-white font-semibold">{step.title}</h4>
                <p className="text-gray-400 text-sm mt-1">{step.sub}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
