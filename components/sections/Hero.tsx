import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16 bg-[#100817]">
      
      {/* Background Glow */}
      <div className="hero-glow top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      <div className="hero-glow top-1/3 right-0 w-[400px] h-[400px] bg-purple-500/5" />
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none" />

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 w-full">
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ================= LEFT CONTENT ================= */}
          <div className="space-y-8">

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium text-purple-300 animate-in">
              <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
              AI FOR THE NEXT GENERATION OF BUSINESS
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.08] animate-in animate-in-delay-1">
              Intelligence That
              <br />
              <span className="gradient-text">Transforms</span> the Way
              <br />
              You Work.
            </h1>

            <p className="text-lg sm:text-xl text-gray-400 max-w-lg leading-relaxed animate-in animate-in-delay-2">
              We help organizations harness AI, automation, and intelligent data
              solutions to drive operational excellence and sustainable growth.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 animate-in animate-in-delay-3">

              <a
                href="/contact"
                className="btn-primary px-8 py-3.5 rounded-full text-base font-semibold inline-block"
              >
                Talk to an AI Expert
              </a>

              <a
                href="#solutions"
                className="btn-secondary px-8 py-3.5 rounded-full text-base font-semibold inline-block"
              >
                Explore Solutions
              </a>

            </div>

            {/* Stats */}
            <div className="flex items-center gap-8 pt-4 animate-in animate-in-delay-4">

              <div>
                <span className="text-2xl font-bold text-white">
                  10+
                </span>
                <span className="text-sm text-gray-500 block">
                  AI Solutions
                </span>
              </div>

              <div>
                <span className="text-2xl font-bold text-white">
                  50+
                </span>
                <span className="text-sm text-gray-500 block">
                  Projects Delivered
                </span>
              </div>

              <div>
                <span className="text-2xl font-bold text-white">
                  95%
                </span>
                <span className="text-sm text-gray-500 block">
                  Client Satisfaction
                </span>
              </div>

            </div>
          </div>


          {/* ================= RIGHT IMAGE ================= */}
          <div className="relative flex justify-center lg:justify-end">

            {/* Outer floating container */}
            <div className="relative w-full max-w-xl">

              {/* Purple Glow */}
              <div className="absolute -inset-10 bg-purple-600/20 blur-3xl rounded-full animate-pulse" />

              {/* Image Container */}
              <div className="relative rounded-3xl overflow-hidden glass-card border border-white/10 shadow-2xl shadow-purple-500/10 animate-float">

                <Image
                  src="/hero1.jpg"
                  alt="Yantra AI"
                  width={800}
                  height={1000}
                  priority
                  className="w-full h-[550px] object-cover"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />

              </div>


              {/* Floating AI Badge */}
              <div className="absolute -top-5 -left-5 glass-card rounded-2xl px-5 py-4 backdrop-blur-xl border border-white/10 shadow-xl animate-float-delay">

                <div className="flex items-center gap-3">

                  <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center">

                    <span className="text-xl">
                      ✦
                    </span>

                  </div>

                  <div>
                    <div className="text-sm font-semibold text-white">
                      AI Powered
                    </div>

                    <div className="text-xs text-gray-400">
                      Intelligent Systems
                    </div>
                  </div>

                </div>

              </div>


              {/* Enterprise Badge */}
              <div className="absolute -bottom-6 -right-6 glass-card rounded-xl px-5 py-3 backdrop-blur-xl border border-white/10 shadow-xl">

                <div className="flex items-center gap-3">

                  <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">

                    <svg
                      className="w-5 h-5 text-purple-400"
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

                    <div className="text-sm font-semibold text-white">
                      Enterprise-Grade
                    </div>

                    <div className="text-xs text-gray-400">
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