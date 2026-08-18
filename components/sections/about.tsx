import Reveal from '@/components/Reveal';
import { aboutContent } from '@/lib/content';

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-[#0a0a0a] scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <Reveal className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-purple-400 tracking-wider uppercase mb-3">
            {aboutContent.label}
          </span>

          <h2 className="section-title text-white mb-5">
            {aboutContent.title}
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed">
            {aboutContent.description}
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6">
          {aboutContent.features.map((feature, i) => (
            <Reveal key={feature.title} delay={i * 0.1}>
              <div className="glass-card rounded-2xl p-7 h-full">

                <div
                  className={`w-12 h-12 rounded-xl bg-${feature.color}-500/20 flex items-center justify-center mb-5`}
                >
                  <span className="text-2xl">
                    {feature.icon}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3">
                  {feature.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.desc}
                </p>

              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}