import { BoltMark } from '@/components/icons';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16 bg-[#0a0a0a]">
      <div className="hero-glow top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="hero-glow top-1/3 right-0 w-[400px] h-[400px] bg-purple-500/5"></div>
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium text-purple-300 animate-in">
              <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse"></span>
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
              We help organizations harness AI, automation, and intelligent data solutions
              to drive operational excellence and sustainable growth.
            </p>

            <div className="flex flex-wrap gap-4 animate-in animate-in-delay-3">
              <a
               href="/contact" className="btn-primary px-8 py-3.5 rounded-full text-base font-semibold inline-block"
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

            <div className="flex items-center gap-8 pt-4 animate-in animate-in-delay-4">
              <div>
                <span className="text-2xl font-bold text-white">10+</span>
                <span className="text-sm text-gray-500 block">AI Solutions</span>
              </div>
              <div>
                <span className="text-2xl font-bold text-white">50+</span>
                <span className="text-sm text-gray-500 block">Projects Delivered</span>
              </div>
              <div>
                <span className="text-2xl font-bold text-white">95%</span>
                <span className="text-sm text-gray-500 block">Client Satisfaction</span>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md aspect-square">
              <div className="absolute inset-0 rounded-2xl glass-card overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-indigo-900/10"></div>
                <div className="absolute top-1/4 left-1/4 w-3 h-3 rounded-full bg-purple-400 shadow-[0_0_30px_rgba(139,92,246,0.6)]"></div>
                <div className="absolute top-2/3 left-1/3 w-2 h-2 rounded-full bg-indigo-400 shadow-[0_0_20px_rgba(79,70,229,0.5)]"></div>
                <div className="absolute top-1/3 right-1/4 w-4 h-4 rounded-full bg-purple-500 shadow-[0_0_40px_rgba(139,92,246,0.7)]"></div>
                <div className="absolute bottom-1/4 right-1/3 w-2.5 h-2.5 rounded-full bg-indigo-300 shadow-[0_0_25px_rgba(79,70,229,0.4)]"></div>
                <div className="absolute top-1/2 left-2/3 w-3 h-3 rounded-full bg-purple-300 shadow-[0_0_30px_rgba(139,92,246,0.5)]"></div>
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <line x1="100" y1="100" x2="266" y2="133" stroke="rgba(139,92,246,0.15)" strokeWidth="1.5" />
                  <line x1="266" y1="133" x2="300" y2="266" stroke="rgba(139,92,246,0.12)" strokeWidth="1.5" />
                  <line x1="300" y1="266" x2="133" y2="300" stroke="rgba(139,92,246,0.12)" strokeWidth="1.5" />
                  <line x1="133" y1="300" x2="100" y2="100" stroke="rgba(139,92,246,0.1)" strokeWidth="1.5" />
                  <line x1="266" y1="133" x2="133" y2="300" stroke="rgba(79,70,229,0.08)" strokeWidth="1.5" />
                  <line x1="100" y1="100" x2="300" y2="266" stroke="rgba(79,70,229,0.08)" strokeWidth="1.5" />
                  <line x1="200" y1="50" x2="100" y2="100" stroke="rgba(139,92,246,0.1)" strokeWidth="1.5" />
                  <line x1="200" y1="50" x2="266" y2="133" stroke="rgba(139,92,246,0.1)" strokeWidth="1.5" />
                  <line x1="200" y1="350" x2="300" y2="266" stroke="rgba(139,92,246,0.1)" strokeWidth="1.5" />
                  <line x1="200" y1="350" x2="133" y2="300" stroke="rgba(139,92,246,0.1)" strokeWidth="1.5" />
                  <circle cx="200" cy="200" r="80" stroke="rgba(139,92,246,0.06)" strokeWidth="1" strokeDasharray="4 8" />
                  <circle cx="200" cy="200" r="120" stroke="rgba(139,92,246,0.04)" strokeWidth="1" strokeDasharray="4 8" />
                </svg>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-purple-500/20 blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center shadow-2xl shadow-purple-500/30">
                  <BoltMark className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 glass-card rounded-xl px-5 py-3 backdrop-blur-xl border border-white/5 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">Enterprise-Grade</div>
                    <div className="text-xs text-gray-400">ISO 27001 Compliant</div>
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
