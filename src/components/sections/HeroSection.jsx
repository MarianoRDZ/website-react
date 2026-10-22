import ProfileImage from './ProfileImage';
import HeroContent from './HeroContent';

const HeroSection = ({ imageSize = 'lg' }) => {
  return (
    <div className="container mx-auto grid max-w-7xl items-center gap-8 px-6 md:grid-cols-2">
      <div className="animate-stagger-img">
        <ProfileImage size={imageSize} />
      </div>
      <HeroContent />
    </div>
  );
};

export default HeroSection;
