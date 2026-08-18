import Reveal from '@/components/Reveal';
import { techStack } from '@/lib/content';

export default function TechStack() {
  return (
    <section className="py-16 md:py-20 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block text-sm font-semibold text-purple-400 tracking-wider uppercase mb-3">
            Technology
          </span>
          <h2 className="section-title text-white mb-4">Our AI Ecosystem</h2>
          <p className="text-gray-400 text-lg">Modern tools and frameworks powering enterprise AI solutions.</p>
        </Reveal>

        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
          {techStack.map((tech) => (
            <span key={tech} className="px-5 py-2.5 rounded-full glass text-sm text-gray-300 border border-white/5">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
