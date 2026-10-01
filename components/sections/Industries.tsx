import Reveal from '@/components/Reveal';
import { industries } from '@/lib/content';

export default function Industries() {
  return (
    <section id="industries" className="py-20 md:py-28 bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <Reveal className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-purple-400 tracking-wider uppercase mb-3">
            Industries
          </span>

          <h2 className="section-title text-white mb-5">
            AI Solutions for Every
            <br />
            Industry
          </h2>

          <p className="text-gray-400 text-lg">
            Tailored AI applications designed to address the unique challenges
            of your sector.
          </p>
        </Reveal>

        {/* Industries Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 items-stretch">
          {industries.map((ind, i) => (
            <Reveal
              key={ind.title}
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
                      d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>

                {/* Industry Name */}
                <h4 className="text-white font-semibold text-sm">
                  {ind.title}
                </h4>

                {/* Industry Description */}
                <p className="text-gray-400 text-xs mt-1">
                  {ind.sub}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}