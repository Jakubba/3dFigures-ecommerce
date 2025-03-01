import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/thumbs';
import firstImage from './../assets/image/icons/maxsmagnificentminis-logo-aternis.svg';
import firstIcon from './../assets/image/heroSection/Arythill-Illustration.png';
import secondIcon from './../assets/image/icons/maxsmagnificentminis-logo-lufianhall.svg';
import thirdIcon from './../assets/image/icons/maxsmagnificentminis-logo-maeves.svg';
import secondImage from './../assets/image/heroSection/maxmagnificent_black_dragon.png';
import thirdImage from './../assets/image/heroSection/major-arcana-novitar-the-frozen-crownlands.jpg';

import btnFirst from './../assets/image/icons/maxsmagnificentminis-icon-aternis.svg';
import btnSecond from './../assets/image/icons/maxsmagnificentminis-icon-lufianhall.svg';
import btnThird from './../assets/image/icons/maxsmagnificentminis-icon-maeves.svg';
export const HeroSection = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const slides = [
    {
      logo: firstImage,
      image: firstIcon,
    },
    {
      logo: secondIcon,
      image: secondImage,
    },
    {
      logo: thirdIcon,
      image: thirdImage,
    },
  ];

  const thumbs = [btnFirst, btnSecond, btnThird];

  return (
    <section className="relative h-[80vh] w-full">
      {/* Main Swiper */}
      <Swiper
        modules={[Thumbs]}
        thumbs={{
          swiper: thumbsSwiper,
        }}
        className="main-swiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative flex h-full items-center justify-center">
              <img
                className="absolute top-[75%] left-[50%] z-20 h-[150px] w-auto translate-x-[-50%] translate-y-[-50%] drop-shadow-md filter"
                src={slide.logo}
                alt=""
              />
              <img className="h-full w-full object-cover" src={slide.image} alt="" />
              <div className="absolute top-[80%] left-[50%] z-10 h-[40vh] w-full translate-x-[-50%] translate-y-[-50%] bg-gradient-to-t from-black to-transparent"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbnail Swiper */}
      <Swiper
        modules={[Thumbs]}
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={3}
        loop={false}
        className="main-thumbs !z-20"
      >
        {thumbs.map((thumb, index) => (
          <SwiperSlide key={index} className="!w-[80px]">
            <div className="frame-button flex h-[80px] cursor-pointer items-center justify-center p-2 hover:bg-[#4a3c27]">
              <img className="h-[50px] w-auto" src={thumb} alt="" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSection;
