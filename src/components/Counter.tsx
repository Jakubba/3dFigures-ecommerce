import { useEffect, useRef, useState } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

export const Counter = ({ count, label, delay }) => {
  const [currentCount, setCurrentCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    AOS.init();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            let start = 0;
            const stepTime = 50;
            const increment = Math.ceil(count / (3000 / stepTime));

            const updateCounter = () => {
              start += increment;
              if (start > count) start = count;
              setCurrentCount(start);
              if (start < count) {
                setTimeout(updateCounter, stepTime);
              }
            };

            updateCounter();
            observer.unobserve(ref.current);
          }
        });
      },
      {
        threshold: 0.5,
      },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [count]);

  return (
    <div
      ref={ref}
      className="line-white-frame relative flex min-h-[200px] w-full flex-col items-center justify-center md:w-1/4"
      data-aos="fade-zoom-in"
      data-aos-duration="300"
      data-aos-easing="linear"
      data-aos-delay={delay}
    >
      <div className="font-secondary mb-4 flex items-center justify-center gap-2 text-2xl">
        <span className="text-3xl font-bold">{currentCount}</span>+
      </div>
      <p className="uppercase">{label}</p>
    </div>
  );
};

const CounterSection = () => {
  return (
    <section
      className="counter-section flex flex-col items-center justify-center gap-10 bg-[#A4895A] p-10 md:flex-row"
      data-aos="fade-zoom-in"
      data-aos-duration="300"
      data-aos-easing="linear"
      data-aos-anchor-placement="top-bottom"
    >
      <Counter count={9075} label="sprzedanych" delay={100} />
      <Counter count={6575} label="wydrukowanych" delay={400} />
      <Counter count={1275} label="zaprojektowanych" delay={700} />
      <Counter count={1255} label="zadowoleni klienci" delay={1000} />
    </section>
  );
};

export default CounterSection;
