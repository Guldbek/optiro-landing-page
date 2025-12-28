import dynamic from 'next/dynamic';
import { Header } from '../components/Header/Header';
import { Hero } from '../components/Hero/Hero';

// Lazy load below-the-fold components
const ProjectFlow = dynamic(() => import('../components/ProjectFlow/ProjectFlow').then(mod => ({ default: mod.ProjectFlow })), {
  loading: () => <div style={{ minHeight: '400px' }} />,
});
const Benefits = dynamic(() => import('../components/Benefits/Benefits').then(mod => ({ default: mod.Benefits })), {
  loading: () => <div style={{ minHeight: '600px' }} />,
});
const Pricing = dynamic(() => import('../components/Pricing/Pricing').then(mod => ({ default: mod.Pricing })), {
  loading: () => <div style={{ minHeight: '400px' }} />,
});
const FAQ = dynamic(() => import('../components/FAQ/FAQ').then(mod => ({ default: mod.FAQ })), {
  loading: () => <div style={{ minHeight: '400px' }} />,
});
const CTA = dynamic(() => import('../components/CTA/CTA').then(mod => ({ default: mod.CTA })), {
  loading: () => <div style={{ minHeight: '300px' }} />,
});
const Footer = dynamic(() => import('../components/Footer/Footer').then(mod => ({ default: mod.Footer })), {
  loading: () => <div style={{ minHeight: '200px' }} />,
});

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
