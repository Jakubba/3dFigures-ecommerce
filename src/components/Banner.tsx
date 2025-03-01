import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import backgroundImage from '../assets/image/heroSection/maxmagnificent_black_dragon.png';
import leftFigure from '../assets/image/figures/1-17.png';
import rightFigure from '../assets/image/figures/Altair_1.png';
import logo from '../assets/image/icons/maxsmagnificentminis-the-major-arcana.svg';

const Banner = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section
      className="relative z-10 h-full w-full overflow-hidden p-10"
      data-aos="fade-zoom-in"
      data-aos-delay="800"
      data-aos-duration="800"
    >
      <div className="absolute top-1/2 left-1/2 z-10 h-full w-full -translate-x-1/2 -translate-y-1/2 transform bg-gradient-to-b from-transparent to-black"></div>
      <img
        className="absolute top-1/2 left-1/2 z-[-1] h-full w-full -translate-x-1/2 -translate-y-1/2 transform object-cover"
        src={backgroundImage}
        alt="Background"
      />
      <div className="simple-frame relative mx-auto flex min-h-[60vh] max-w-[1100px] items-center justify-center p-10">
        <div
          className="z-10 hidden h-[250px] w-auto md:block"
          data-aos="fade-zoom-in"
          data-aos-anchor-placement="top-bottom"
          data-aos-delay="1000"
          data-aos-duration="1000"
        >
          <img className="drop-shadow-lg" src={leftFigure} alt="Left Figure" />
        </div>
        <div className="z-10 flex flex-col items-center justify-center p-10">
          <div
            className="mb-10 h-[100px] w-auto"
            data-aos="fade-zoom-in"
            data-aos-anchor-placement="top-bottom"
            data-aos-delay="100"
            data-aos-duration="800"
          >
            <img className="h-[100px] w-auto" src={logo} alt="Logo" />
          </div>
          <p
            className="text-center"
            data-aos="fade-zoom-in"
            data-aos-anchor-placement="top-bottom"
            data-aos-delay="600"
            data-aos-duration="800"
          >
            Dive into a magical world with our exclusive Welcome Pack, available for free for
            subscribers of The Major Arcana. This pack features 14 unique miniatures, each
            intricately designed to bring your next adventure to life.
          </p>
        </div>
        <div
          className="z-10 hidden h-[250px] w-auto md:block"
          data-aos="fade-zoom-in"
          data-aos-anchor-placement="top-bottom"
          data-aos-delay="1500"
          data-aos-duration="1000"
        >
          <img className="drop-shadow-lg" src={rightFigure} alt="Right Figure" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
