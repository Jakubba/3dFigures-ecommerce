import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import aboutImage from '../assets/image/heroSection/maxmagnificent_black_dragon.png';
export const AboutSection = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section
      className="flex flex-col items-center justify-center bg-[#a4895a] p-10 md:p-10"
      data-aos="fade-zoom-in"
      data-aos-anchor-placement="top-bottom"
      data-aos-duration="1000"
      data-aos-offset="300"
    >
      <div className="flex flex-col justify-center gap-10 md:flex-row md:items-center">
        <div
          className="frame-only relative h-full w-full md:w-1/2"
          data-aos="fade-right"
          data-aos-delay="800"
          data-aos-easing="ease-in-sine"
        >
          <img className="relative z-[10]" src={aboutImage} alt=""></img>
        </div>
        <div className="flex h-full w-full flex-col items-center justify-center md:w-1/2 md:items-start">
          <h3
            className="font-secondary mb-10 text-center text-4xl"
            data-aos="fade-left"
            data-aos-easing="linear"
            data-aos-duration="800"
            data-aos-delay="100"
          >
            About us
          </h3>
          <p
            data-aos="fade-left"
            data-aos-easing="linear"
            data-aos-duration="800"
            data-aos-delay="200"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum minima accusamus esse in
            ipsam ullam repellat sed distinctio iure, dolorem tempore eveniet sit iusto ipsa cumque
            nulla aspernatur id consequuntur.Aspernatur asperiores accusantium, totam animi
            similique perferendis fuga quam architecto culpa .
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
