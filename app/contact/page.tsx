import Footer from '@/components/Footer';
import Contact from '@/components/sections/contact';

export default function ContactPage() {
  return (
    <>
      <main className="min-h-screen bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <a
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-gray-300 hover:text-white hover:border-purple-500/40 transition-all"
          >
            <span className="text-lg">←</span>
            Back to Home
          </a>
        </div>

        <Contact />
      </main>

      <Footer />
    </>
  );
}