import Reveal from '@/components/Reveal';
import { stats } from '@/lib/content';

export default function Stats() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-purple-900/20 via-[#0a0a0a] to-indigo-900/10 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <Reveal key={stat.label}>
              <div className="stat-number">{stat.value}</div>
              <p className="text-gray-400 text-sm font-medium mt-1">{stat.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
