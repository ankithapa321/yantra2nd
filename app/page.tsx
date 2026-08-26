import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import NoticePopup from "@/components/NoticePopup";
import Hero from '@/components/sections/Hero';
import TrustLogos from '@/components/sections/TrustLogos';
import Solutions from '@/components/sections/Solutions';
import EnterpriseJourney from '@/components/sections/EnterpriseJourney';
import Services from '@/components/sections/Services';
import Industries from '@/components/sections/Industries';
import Stats from '@/components/sections/Stats';
import CaseStudies from '@/components/sections/CaseStudies';
import Process from '@/components/sections/Process';
import TechStack from '@/components/sections/TechStack';
import Testimonials from '@/components/sections/Testimonials';
import CTA from '@/components/sections/CTA';
import About from '@/components/sections/about';
import Contact from '@/components/sections/contact';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <NoticePopup/>   
      <TrustLogos />
      <Solutions />
      <EnterpriseJourney />
      <Services />
      <Industries />
      <Stats />
      <CaseStudies />
      <Process />
      <TechStack />
      <Testimonials />
      <CTA />
      <About/>
      <Footer />
    </>
  );
}
