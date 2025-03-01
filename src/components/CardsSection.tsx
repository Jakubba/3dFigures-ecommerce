import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import cardImage from '../assets/image/heroSection/maxmagnificent_black_dragon.png';
import cardImage2 from '../assets/image/heroSection/major-arcana-crimson-shores-of-lufianhall.jpg';
import cardImage3 from '../assets/image/heroSection/maxmagnificent_black_dragon.png';
import cardImage4 from '../assets/image/heroSection/major-arcana-novitar-the-frozen-crownlands.jpg';
import cardImage5 from '../assets/image/heroSection/Velkan-Horizontal.png';
import cardImage6 from '../assets/image/heroSection/major-arcana-the-golden-fields-of-aternis.jpg';
import cardImage7 from '../assets/image/heroSection/Arythill-Illustration.png';
import cardImage8 from '../assets/image/heroSection/Skaggsysters-Coven-Illustration.png';
import cardImage9 from '../assets/image/heroSection/major-arcana-moonlit-citadel-of-silverthal.jpg';
import cardIcon from './../assets/image/icons/maxsmagnificentminis-logo-lyra.svg';

import goldframe from './../assets/image/title/oranment-title.svg';

const events = [
  {
    img: cardImage,
    date: 'OCTOBER 2022',
    logo: cardIcon,
  },
  {
    img: cardImage2,
    date: 'DECEMBER 2022',
    logo: cardIcon,
  },
  {
    img: cardImage3,
    date: 'FEBRUARY 2022',
    logo: cardIcon,
  },
  {
    img: cardImage4,
    date: 'JULY 2022',
    logo: cardIcon,
  },
  {
    img: cardImage5,
    date: 'MARCH 2022',
    logo: cardIcon,
  },
  {
    img: cardImage6,
    date: 'FEBRUARY 2022',
    logo: cardIcon,
  },
  {
    img: cardImage7,
    date: 'APRIL 2022',
    logo: cardIcon,
  },
  {
    img: cardImage8,
    date: 'MAY 2022',
    logo: cardIcon,
  },
  {
    img: cardImage9,
    date: 'NOVEMBER 2022',
    logo: cardIcon,
  },
  {
    img: cardImage4,
    date: 'DECEMBER 2022',
    logo: cardIcon,
  },
];

export const CardsSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: 'linear',
    });
  }, []);
  return (
    <section className="text-center">
      <h3 className="font-secondary mb-4 text-4xl">Events</h3>
      <div className="m-auto h-full w-[60%] max-w-[560px] min-w-[310px] p-10 pt-0">
        <img className="h-full w-full object-contain" src={goldframe} alt="ornament title" />
      </div>
      <ul className="mx-auto flex max-w-[2100px] flex-wrap px-10 py-2">
        {events.map((event, index) => (
          <li
            key={index}
            className="w-full p-2 sm:w-1/2 md:w-1/3 lg:w-1/4 2xl:w-1/5"
            data-aos="fade-up"
            data-aos-delay={100 + index * 300}
          >
            <div className="base-frame transition-filter relative flex cursor-pointer flex-col drop-shadow-lg hover:filter">
              <div className="relative h-[250px] w-full overflow-hidden">
                <img
                  className="main-img absolute top-1/2 left-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 transform object-cover transition-transform hover:scale-110"
                  src={event.img}
                  alt=""
                />
              </div>
              <div className="transition-border relative flex h-full w-full flex-col items-center justify-center border-4 border-yellow-600 bg-gray-800 p-10 hover:border-blue-900">
                <div className="mb-10 flex h-full w-full justify-center">
                  <img className="h-auto max-h-[100px] w-auto" src={event.logo} alt="" />
                </div>
                <p className="font-semibold tracking-wide uppercase">{event.date}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CardsSection;
