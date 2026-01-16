import profileImage from '../../assets/profile.png';

/**
 * ProfileImage Component
 * Displays a profile picture with gradient overlays and fallback avatar.
 * Reusable across different sections (Hero, About, Modal, etc).
 *
 * @typedef {Object} ProfileImageProps
 * @property {"sm"|"md"|"lg"} [size="lg"] - Image size variant.
 * @property {string} [alt="Profile"] - Alt text for accessibility.
 * @property {boolean} [showOverlay=true] - Display gradient overlay on image.
 *
 * @example
 * <ProfileImage size="lg" />
 * <ProfileImage size="sm" />
 */
const ProfileImage = ({ size = 'lg', alt = 'Profile', showOverlay = true }) => {
  const sizeClasses = {
    sm: 'h-48 w-40 md:h-56 md:w-44',
    md: 'h-64 w-56 md:h-80 md:w-72',
    lg: 'h-80 w-64 md:h-96 md:w-80',
  };

  return (
    <div className="flex justify-center">
      <div className="relative">
        {profileImage ? (
          <div className={`relative overflow-hidden rounded-2xl ${sizeClasses[size]}`}>
            <img
              src={profileImage}
              alt={alt}
              className="h-full w-full object-cover object-top brightness-110"
            />
            {showOverlay && (
              <>
                <div className="absolute right-0 bottom-0 left-0 h-24 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent" />
                <div className="absolute top-0 bottom-0 left-0 w-12 bg-gradient-to-r from-gray-900 via-gray-900/20 to-transparent" />
                <div className="absolute top-0 right-0 bottom-0 w-12 bg-gradient-to-l from-gray-900 via-gray-900/20 to-transparent" />
              </>
            )}
          </div>
        ) : (
          <div className={`flex items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 ${sizeClasses[size]}`}>
            <span className="text-5xl font-bold text-white md:text-6xl">M</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileImage;
