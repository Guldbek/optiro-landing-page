import { Header } from '../components/Header/Header';
import { Hero } from '../components/Hero/Hero';
import { ProjectFlow } from '../components/ProjectFlow/ProjectFlow';
import { Benefits } from '../components/Benefits/Benefits';
import { Pricing } from '../components/Pricing/Pricing';
import { FAQ } from '../components/FAQ/FAQ';
import { CTA } from '../components/CTA/CTA';
import { Footer } from '../components/Footer/Footer';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProjectFlow />
        <Benefits />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
