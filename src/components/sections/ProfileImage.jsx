import profileImage from '../../assets/profile.png';

// si no hay imagen muestra un avatar con la inicial
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
          <div
            className={`flex items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 ${sizeClasses[size]}`}
          >
            <span className="text-5xl font-bold text-white md:text-6xl">M</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileImage;
