import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#100817]">

      {/* Background Glow */}
      <div className="hero-glow top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      <div className="hero-glow top-1/3 right-0 w-[400px] h-[400px] bg-purple-500/5" />

      {/* Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none" />

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 pt-4 pb-10 sm:py-20 md:py-28 w-full">
        {/* 
          MOBILE  = 2 columns
          DESKTOP = 2 columns
        */}
        <div className="grid grid-cols-2 gap-3 sm:gap-8 lg:gap-16 items-center">

          {/* ================= LEFT CONTENT ================= */}
          <div className="space-y-4 sm:space-y-6 lg:space-y-8">

            {/* Badge */}
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2 sm:px-4 py-1.5 sm:py-2 rounded-full glass text-[7px] sm:text-sm font-medium text-purple-300 animate-in">

              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-purple-400 animate-pulse" />

              <span>
                AI FOR THE NEXT GENERATION OF BUSINESS
              </span>

            </div>

            {/* Heading */}
            <h1 className="text-xl sm:text-4xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.08] animate-in animate-in-delay-1">

              Intelligence That

              <br />

              <span className="gradient-text">
                Transforms
              </span>{' '}
              the Way

              <br />

              You Work.

            </h1>

            {/* Description */}
            <p className="text-[9px] sm:text-lg lg:text-xl text-gray-400 max-w-lg leading-relaxed animate-in animate-in-delay-2">

              We help organizations harness AI, automation, and intelligent
              data solutions to drive operational excellence and sustainable
              growth.

            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-4 animate-in animate-in-delay-3">

              <a
                href="/contact"
                className="btn-primary px-2.5 sm:px-6 lg:px-8 py-2 sm:py-3.5 rounded-full text-[8px] sm:text-sm lg:text-base font-semibold inline-block text-center"
              >
                Talk to an AI Expert
              </a>

              <a
                href="#solutions"
                className="btn-secondary px-2.5 sm:px-6 lg:px-8 py-2 sm:py-3.5 rounded-full text-[8px] sm:text-sm lg:text-base font-semibold inline-block text-center"
              >
                Explore Solutions
              </a>

            </div>

            {/* Stats */}
            <div className="flex items-center gap-2 sm:gap-6 lg:gap-8 pt-2 sm:pt-4 animate-in animate-in-delay-4">

              <div>
                <span className="text-base sm:text-2xl font-bold text-white">
                  10+
                </span>

                <span className="text-[6px] sm:text-sm text-gray-500 block">
                  AI Solutions
                </span>
              </div>

              <div>
                <span className="text-base sm:text-2xl font-bold text-white">
                  50+
                </span>

                <span className="text-[6px] sm:text-sm text-gray-500 block">
                  Projects Delivered
                </span>
              </div>

              <div>
                <span className="text-base sm:text-2xl font-bold text-white">
                  95%
                </span>

                <span className="text-[6px] sm:text-sm text-gray-500 block">
                  Client Satisfaction
                </span>
              </div>

            </div>

          </div>


          {/* ================= RIGHT IMAGE ================= */}
          <div className="relative flex justify-center lg:justify-end">

            {/* Image Wrapper */}
            <div className="relative w-full max-w-xl">

              {/* Purple Glow */}
              <div className="absolute -inset-4 sm:-inset-10 bg-purple-600/20 blur-3xl rounded-full animate-pulse" />

              {/* Image Container */}
              <div className="relative rounded-xl sm:rounded-3xl overflow-hidden glass-card border border-white/10 shadow-2xl shadow-purple-500/10 animate-float">

                <Image
                  src="/hero1.jpg"
                  alt="Yantra AI"
                  width={800}
                  height={1000}
                  priority
                  className="w-full h-[230px] sm:h-[400px] lg:h-[550px] object-cover"
                />

                {/* Dark Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />

              </div>


              {/* ================= AI BADGE ================= */}
              <div className="absolute -top-3 -left-3 sm:-top-5 sm:-left-5 glass-card rounded-lg sm:rounded-2xl px-2 sm:px-5 py-2 sm:py-4 backdrop-blur-xl border border-white/10 shadow-xl animate-float-delay">

                <div className="flex items-center gap-1.5 sm:gap-3">

                  <div className="w-6 h-6 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-purple-500/20 flex items-center justify-center">

                    <span className="text-xs sm:text-xl">
                      ✦
                    </span>

                  </div>

                  <div>

                    <div className="text-[7px] sm:text-sm font-semibold text-white">
                      AI Powered
                    </div>

                    <div className="text-[5px] sm:text-xs text-gray-400">
                      Intelligent Systems
                    </div>

                  </div>

                </div>

              </div>


              {/* ================= ENTERPRISE BADGE ================= */}
              <div className="absolute -bottom-3 -right-3 sm:-bottom-6 sm:-right-6 glass-card rounded-lg sm:rounded-xl px-2 sm:px-5 py-2 sm:py-3 backdrop-blur-xl border border-white/10 shadow-xl">

                <div className="flex items-center gap-1.5 sm:gap-3">

                  <div className="w-6 h-6 sm:w-10 sm:h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">

                    <svg
                      className="w-3 h-3 sm:w-5 sm:h-5 text-purple-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >

                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />

                    </svg>

                  </div>

                  <div>

                    <div className="text-[7px] sm:text-sm font-semibold text-white">
                      Enterprise-Grade
                    </div>

                    <div className="text-[5px] sm:text-xs text-gray-400">
                      Secure AI Solutions
                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}