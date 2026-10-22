import Hero from '../components/sections/Hero';
import TechStack from '../components/sections/TechStack';
import ScrollReveal from '../components/common/ScrollReveal';

const Home = () => {
  return (
    <>
      <Hero />
      <ScrollReveal>
        <TechStack />
      </ScrollReveal>
    </>
  );
};

export default Home;
