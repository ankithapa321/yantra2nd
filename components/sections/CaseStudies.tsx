import Reveal from '@/components/Reveal';
import { ArrowIcon } from '@/components/icons';
import { caseStudies } from '@/lib/content';

export default function CaseStudies() {
  return (
    <section className="py-20 md:py-28 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-purple-400 tracking-wider uppercase mb-3">
            Case Studies
          </span>
          <h2 className="section-title text-white mb-5">AI in Action</h2>
          <p className="text-gray-400 text-lg">
            Real-world examples of how we&apos;ve helped enterprises transform with AI.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6">
          {caseStudies.map((cs, i) => (
            <Reveal key={cs.title} delay={i * 0.1}>
              <div className="glass-card rounded-2xl overflow-hidden card-hover">
                <div className="p-7">
                  <span className={`text-xs font-semibold text-${cs.tagColor}-400 uppercase tracking-wider`}>
                    {cs.tag}
                  </span>
                  <h3 className="text-xl font-bold text-white mt-2 mb-2">{cs.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{cs.desc}</p>
                  <div className="flex flex-wrap gap-3 mt-4">
                    <span className="text-xs bg-white/5 px-3 py-1 rounded-full text-gray-300">{cs.results}</span>
                    <span className="text-xs bg-white/5 px-3 py-1 rounded-full text-gray-300">{cs.tech}</span>
                  </div>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-sm font-medium text-purple-400 hover:text-purple-300 transition-colors mt-4"
                  >
                    View Case Study
                    <ArrowIcon />
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
