import HeroSection from './HeroSection';

/**
 * Hero Component
 * Main hero section orchestrator that displays profile image and introduction.
 * Combines HeroSection layout with responsive design.
 *
 * @example
 * <Hero />
 */
const Hero = () => {
  return (
    <section className="flex items-center py-4">
      <HeroSection imageSize="lg" />
    </section>
  );
};

export default Hero;
