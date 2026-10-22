import ProfileImage from './ProfileImage';
import HeroContent from './HeroContent';

const Hero = () => {
  return (
    <section className="flex items-center py-8 md:py-16">
      <div className="container mx-auto grid max-w-7xl items-center gap-8 px-6 md:grid-cols-2">
        <div className="animate-stagger-img">
          <ProfileImage size="lg" />
        </div>
        <HeroContent />
      </div>
    </section>
  );
};

export default Hero;
