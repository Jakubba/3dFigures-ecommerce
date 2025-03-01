import React from 'react';

const ServiceSection = () => {
  const plans = [
    {
      name: 'Adept',
      price: '$9.99',
      frameClass: 'frame-brown',
      borderColor: 'border-[#a4895a]',
      hoverBg: 'hover:bg-[#a4895a]',
      benefits: [
        {
          title: 'The Justiciars of Drechtschild',
          details: ['1 tarot-themed miniature', '18 enemy miniatures', '3 unique heroes'],
        },
        "Immediate access to our Welcome Pack Maeve's Magical Menagerie",
        'Loyalty Rewards for 3-, 6-, 9- and 12-month subscribers',
        '50% off previous releases and individual files while subscribed',
      ],
    },
    {
      name: 'Hero',
      price: '$14.99',
      frameClass: 'frame-silver',
      borderColor: 'border-[#717171]',
      hoverBg: 'hover:bg-[#717171]',
      benefits: [
        {
          title: 'The Justiciars of Drechtschild',
          details: ['1 tarot-themed miniature', '18 enemy miniatures', '3 unique heroes'],
        },
        "Immediate access to our Welcome Pack Maeve's Magical Menagerie",
        'Loyalty Rewards for 3-, 6-, 9- and 12-month subscribers',
        '50% off previous releases and individual files while subscribed',
      ],
    },
    {
      name: 'Legend',
      price: '$19.99',
      frameClass: 'frame-red',
      borderColor: 'border-[#a45a5a]',
      hoverBg: 'hover:bg-[#a45a5a]',
      benefits: [
        {
          title: 'The Justiciars of Drechtschild',
          details: ['1 tarot-themed miniature', '18 enemy miniatures', '3 unique heroes'],
        },
        "Immediate access to our Welcome Pack Maeve's Magical Menagerie",
        'Loyalty Rewards for 3-, 6-, 9- and 12-month subscribers',
        '50% off previous releases and individual files while subscribed',
      ],
    },
  ];

  return (
    <section className="flex flex-col items-center justify-center p-10">
      <h3 className="font-secondary mb-10 text-center text-4xl" data-aos="fade-up">
        <strong className="text-5xl text-[#a46e5a]">A</strong>
        lways get the latest releases
      </h3>
      <div>
        <img src="" alt="" />
      </div>
      <ul className="flex w-full flex-wrap items-center justify-center gap-6 space-y-5 md:flex-row md:space-y-0 md:space-x-5">
        {plans.map((plan, index) => (
          <li
            key={plan.name}
            className="w-full max-w-max md:w-1/3"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay={300 + index * 400}
          >
            <div
              className={`relative ${plan.frameClass} flex flex-col items-center justify-center overflow-hidden bg-gray-800 p-20 transition-all ease-in-out hover:scale-105 md:max-w-[400px]`}
            >
              <h4 className="font-secondary mb-2 text-4xl font-bold">{plan.name}</h4>
              <p className="font-secondary mb-2 text-2xl">{plan.price}</p>
              <p className="mb-4">//MONTH</p>
              <button
                className={`border-2 p-2 px-6 ${plan.borderColor} rounded-none ${plan.hoverBg} transition-all ease-in-out hover:border-white`}
              >
                Subscribe now
              </button>
              <p className="mb-6">By becoming a Hero in October, you will receive:</p>
              <ul className="custom-list">
                {plan.benefits.map((benefit, i) =>
                  typeof benefit === 'string' ? (
                    <li key={i} className="relative pl-8">
                      {benefit}
                    </li>
                  ) : (
                    <li key={i} className="relative pl-8">
                      {benefit.title}
                      <ul className="list-disc pl-10">
                        {benefit.details.map((detail, j) => (
                          <li key={j}>{detail}</li>
                        ))}
                      </ul>
                    </li>
                  ),
                )}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ServiceSection;
