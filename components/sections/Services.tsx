import Reveal from '@/components/Reveal';
import { services } from '@/lib/content';

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <Reveal className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-purple-400 tracking-wider uppercase mb-3">
            Services
          </span>

          <h2 className="section-title text-white mb-5">
            Enterprise AI Services
          </h2>

          <p className="text-gray-400 text-lg">
            End-to-end AI capabilities from strategy to implementation and beyond.
          </p>
        </Reveal>

        {/* Services Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 items-stretch">
          {services.map((s, i) => (
            <Reveal
              key={s}
              delay={i * 0.03}
              className="h-full"
            >
              <div
                className="
                  glass-card
                  rounded-xl
                  p-6
                  text-center
                  card-hover
                  h-full
                  flex
                  flex-col
                  items-center
                  justify-center
                "
              >
                {/* Icon */}
                <div
                  className="
                    w-10
                    h-10
                    rounded-lg
                    bg-purple-500/20
                    flex
                    items-center
                    justify-center
                    mx-auto
                    mb-3
                    flex-shrink-0
                  "
                >
                  <svg
                    className="w-5 h-5 text-purple-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z"
                    />
                  </svg>
                </div>

                {/* Service Name */}
                <h4 className="text-white font-semibold text-sm">
                  {s}
                </h4>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}