import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import CardsSection from './components/CardsSection';
import Banner from './components/Banner';
import Counter from './components/Counter';
import ServiceSection from './components/ServiceSection';
import Footer from './components/Footer';
import AboutSection from './components/AboutSection';
import CheckProducts from './components/CheckProducts';
import AOS from 'aos';
import 'aos/dist/aos.css';
import logo from './assets/image/icons/logo.svg';
import './styles/main.scss';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    AOS.init();
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 8000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen w-screen overflow-x-hidden bg-black">
      {isLoading ? (
        <div className="flex h-screen items-center justify-center" aria-live="polite">
          <img
            className="anim-logo absolute top-1/2 left-1/2 z-10 h-[100px] w-auto"
            src={logo}
            alt="logo"
          />
          <div className="burn">
            {Array.from({
              length: 10,
            }).map((_, index) => (
              <div key={index} className="flame"></div>
            ))}
          </div>
        </div>
      ) : (
        <div className="fade-in-animation relative min-h-screen bg-black">
          <Navbar />
          <HeroSection />
          <AboutSection />
          <CardsSection />
          <Banner />
          <CheckProducts />
          <Counter />
          <ServiceSection />
          <Footer />
        </div>
      )}
    </div>
  );
};

export default App;
