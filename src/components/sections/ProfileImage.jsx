import profileImageWebP from '../../assets/profile.webp';
import profileImagePng from '../../assets/profile.png';

const ProfileImage = ({ size = 'lg', alt = 'Profile', showOverlay = true }) => {
  const sizeClasses = {
    sm: 'h-48 w-40 md:h-56 md:w-44',
    md: 'h-64 w-56 md:h-80 md:w-72',
    lg: 'h-80 w-64 md:h-96 md:w-80',
  };

  return (
    <div className="flex justify-center">
      <div className={`relative overflow-hidden rounded-2xl ${showOverlay ? 'profile-image-blend' : ''} ${sizeClasses[size]}`}>
        {profileImageWebP ? (
          <>
            <picture>
              <source srcSet={profileImageWebP} type="image/webp" />
              <img
                src={profileImagePng}
                alt={alt}
                className="h-full w-full object-cover object-top brightness-110"
              />
            </picture>
          </>
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600">
            <span className="text-5xl font-bold text-white md:text-6xl">M</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileImage;
