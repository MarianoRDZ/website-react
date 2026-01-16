import ProfileImage from './ProfileImage';
import HeroContent from './HeroContent';

/**
 * HeroSection Component
 * Two-column layout container combining ProfileImage and HeroContent.
 * Serves as the main orchestrator for the hero section.
 *
 * @typedef {Object} HeroSectionProps
 * @property {"sm"|"md"|"lg"} [imageSize="lg"] - Size variant for ProfileImage.
 *
 * @example
 * <HeroSection imageSize="lg" />
 */
const HeroSection = ({ imageSize = 'lg' }) => {
  return (
    <div className="container mx-auto grid max-w-7xl items-center gap-8 px-6 md:grid-cols-2">
      <ProfileImage size={imageSize} />
      <HeroContent />
    </div>
  );
};

export default HeroSection;
