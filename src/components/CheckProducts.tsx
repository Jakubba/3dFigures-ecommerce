import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import imageFirst from './../assets/image/figures/1-11.png';
import secondFirst from './../assets/image/figures/1-21.png';
import thirdFirst from './../assets/image/figures/1-31.png';
import fourthFirst from './../assets/image/figures/Satyr-Watcher_2-1200x1200.png';
import fifthFirst from './../assets/image/figures/1-12.png';

import circleImage from './../assets/image/icons/circle-star.svg';
const slides = [
  {
    title: 'Magma Dragon',
    image: imageFirst,
    description:
      'The Magma Dragon by Rescale Miniatures is a striking 3D-printed figure that brings the raw power of molten lava to your tabletop adventures. With its fierce, molten scales and dynamic pose, this miniature perfectly captures the fearsome energy of a dragon born from the heart of a volcano, making it an unforgettable addition to any fantasy collection.',
  },
  {
    title: 'Thargrim Ironhammer',
    image: secondFirst,
    description:
      'Thargrim Ironhammer is a fierce dwarven warrior, a veteran of countless battles fought in the darkened halls of ancient mountain kingdoms...',
  },
  {
    title: 'Gortharn Shadowroot',
    image: thirdFirst,
    description:
      'Gortharn Shadowroot is a brooding and ancient dark ent, a twisted guardian of the shadowed forests where sunlight barely penetrates...',
  },
  {
    title: 'Nytheris the Owlmaw',
    image: secondFirst,
    description:
      'Nytheris the Owlmaw is a nightmarish predator that stalks the dark forests and forgotten ruins...',
  },
  {
    title: 'Grakthar Wanderfang',
    image: fifthFirst,
    description:
      'Grakthar Wanderfang is a rare breed among orcs—a restless adventurer with an insatiable thirst for exploration and discovery...',
  },
  {
    title: 'Kaelmir Dusksoul',
    image: fourthFirst,
    description:
      'Kaelmir Dusksoul was a sentinel of serene strength, a warrior who cherished peace but wielded his blade with unmatched skill when conflict was inevitable...',
  },
];

export default function CharacterCarousel() {
  return (
    <section className="relative bg-gradient-to-t from-transparent via-[#031118] to-transparent py-[50px]">
      <Swiper
        className="mySwiper h-[60vh]"
        spaceBetween={10}
        slidesPerView={1}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          1400: {
            slidesPerView: 1.5,
          },
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="flex min-h-[60vh] w-full flex-col items-center justify-center p-10 md:flex-row">
              <div className="border-frame relative w-[60%] md:w-[40%]">
                <img
                  className="anim-rotate absolute top-1/2 left-1/2 z-2 h-[80%] w-[80%]"
                  src={circleImage}
                  alt=""
                />
                <img className="relative z-10" src={slide.image} alt={slide.title} />
              </div>
              <div className="font-secondary flex w-full flex-col items-center justify-center p-10 md:w-[60%]">
                <h4 className="mb-8 text-5xl font-bold text-[#a4895a]">{slide.title}</h4>
                <p className="text-xl">{slide.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
