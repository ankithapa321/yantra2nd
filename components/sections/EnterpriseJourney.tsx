import Reveal from '@/components/Reveal';
import { journeySteps } from '@/lib/content';

export default function EnterpriseJourney() {
  return (
    <section className="py-20 md:py-28 bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <span className="inline-block text-sm font-semibold text-purple-400 tracking-wider uppercase mb-3">
              Enterprise
            </span>
            <h2 className="section-title text-white mb-5">
              From AI Strategy to
              <br />
              Real-World Impact
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              We guide enterprises through every stage of the AI journey — from discovery and strategy
              to building, integrating, and scaling intelligent systems.
            </p>
            <div className="space-y-4">
              {journeySteps.map((step) => (
                <div key={step.n} className="flex items-start gap-4">
                  <span
                    className={`w-8 h-8 rounded-full bg-${step.color}-500/20 flex items-center justify-center text-sm font-bold text-${step.color}-400 flex-shrink-0`}
                  >
                    {step.n}
                  </span>
                  <div>
                    <h4 className="text-white font-semibold">{step.title}</h4>
                    <p className="text-gray-400 text-sm">{step.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative">
              <div className="glass-card rounded-3xl p-8 border border-white/5">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="text-xs text-gray-500 ml-2">AI Transformation Dashboard</span>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-3 border-b border-white/5">
                    <span className="text-gray-400 text-sm">AI Maturity</span>
                    <span className="text-white font-semibold">78%</span>
                  </div>
                  <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full w-[78%] bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full"></div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="bg-white/5 rounded-xl p-4">
                      <span className="text-2xl font-bold text-white">+34%</span>
                      <span className="text-xs text-gray-400 block mt-1">Efficiency Gain</span>
                    </div>
                    <div className="bg-white/5 rounded-xl p-4">
                      <span className="text-2xl font-bold text-white">92%</span>
                      <span className="text-xs text-gray-400 block mt-1">Accuracy Rate</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-3 border-t border-white/5">
                    <span className="text-xs text-gray-500">Last updated: Today</span>
                    <span className="text-xs text-green-400 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
                      Active
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
