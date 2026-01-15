import { useNavigate } from 'react-router-dom';
import { Button } from '../common';
import { personalInfo } from '../../constants/data';
import profileImage from '../../assets/profile.png';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="flex items-center py-4">
      <div className="container mx-auto grid max-w-7xl items-center gap-8 px-6 md:grid-cols-2">
        <div className="flex justify-center">
          <div className="relative">
            {profileImage ? (
              <div className="relative h-80 w-64 overflow-hidden rounded-2xl md:h-96 md:w-80">
                <img
                  src={profileImage}
                  alt="Profile"
                  className="h-full w-full object-cover object-top brightness-110"
                />
                <div className="absolute right-0 bottom-0 left-0 h-24 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent" />
                <div className="absolute top-0 bottom-0 left-0 w-12 bg-gradient-to-r from-gray-900 via-gray-900/20 to-transparent" />
                <div className="absolute top-0 right-0 bottom-0 w-12 bg-gradient-to-l from-gray-900 via-gray-900/20 to-transparent" />
              </div>
            ) : (
              <div className="flex h-64 w-64 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 md:h-80 md:w-80">
                <span className="text-5xl font-bold text-white md:text-6xl">M</span>
              </div>
            )}
          </div>
        </div>

        <div className="space-y-5">
          <div>
            <p className="mb-3 text-sm font-semibold tracking-wider text-blue-400 uppercase">
              {personalInfo.title}
            </p>
            <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">
              Hi, I'm {personalInfo.name.split(' ')[0]}.
            </h1>
            <p className="text-base leading-relaxed text-gray-300 md:text-lg">
              {personalInfo.description}
            </p>
          </div>

          <div className="flex gap-4">
            <Button variant="primary" size="lg" onClick={() => navigate('/cv')}>
              Resume
            </Button>
            <Button variant="secondary" size="lg" onClick={() => navigate('/contact')}>
              Get in touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
