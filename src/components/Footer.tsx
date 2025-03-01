import React from 'react';
import logo from './../assets/image/icons/logo.svg';

const Footer = () => {
  return (
    <footer
      className="flex flex-col bg-gray-800 p-6"
      data-aos="fade-up"
      data-aos-duration="800"
      data-aos-easing="linear"
      data-aos-delay="400"
      data-aos-anchor-placement="top-bottom"
    >
      <div className="simple-frame relative mx-auto flex w-full flex-wrap justify-center p-10">
        <div className="flex w-full flex-wrap justify-center">
          <div className="mb-5 flex w-1/2 flex-col justify-start p-10 md:w-1/4 lg:w-max">
            <img className="h-[120px] w-[120px] object-contain" src={logo} alt="Logo" />
          </div>
          <FooterSection
            title="The Major Arcana"
            links={['Releases', 'The Story', 'Subscriptions']}
          />
          <FooterSection
            title="Ordering"
            links={['Shipping & returns', 'Payment methods', 'Cancellation Policy']}
          />
          <FooterSection title="About Us" links={['FAQ', 'Guides']} />
          <NewsletterSubscription />
        </div>
        <div className="mt-8 flex w-full flex-col-reverse items-center md:flex-row">
          <p className="font-secondary mt-8 w-1/2 text-center md:mt-0">@2024 Jacob B</p>
          <ul className="flex w-full flex-col items-center space-y-4 md:w-max md:flex-row md:space-y-0 md:space-x-5">
            {['SLA', 'Privacy Policy', 'Technology'].map((item, index) => (
              <li key={index}>
                <a className="hover:text-primary font-primary text-white" href="#">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

const FooterSection = ({ title, links }) => (
  <div className="mb-5 flex w-full flex-col justify-start md:w-1/4 md:p-10 lg:w-max">
    <h4 className="font-secondary text-3xl">{title}</h4>
    <ul className="mt-6">
      {links.map((link, index) => (
        <li key={index}>
          <a className="hover:text-primary text-white" href="#">
            {link}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const NewsletterSubscription = () => (
  <div className="flex w-full flex-col justify-start md:items-center md:p-10 lg:w-max">
    <h4 className="font-secondary mt-5 mb-4 text-2xl">Subscribe to our newsletter</h4>
    <form className="m-auto flex flex-col">
      <div className="mb-4 flex flex-wrap space-y-5 sm:space-y-0 sm:space-x-5">
        <input
          type="text"
          placeholder="Full name*"
          className="border-2 border-[#a4895a] bg-white p-2"
        />
        <input
          type="email"
          placeholder="Email address*"
          className="border-2 border-[#a4895a] bg-white p-2"
        />
      </div>
      <div className="mb-4 flex flex-row-reverse justify-end space-x-2">
        <label className="pl-4">
          I hereby accept the{' '}
          <a href="#" className="text-primary">
            privacy policy
          </a>
        </label>
        <input type="checkbox" />
      </div>
      <input
        type="submit"
        value="Subscribe"
        className="m-auto w-max cursor-pointer border-2 border-[#a4895a] p-2 px-6 py-2 transition-all ease-in-out hover:border-[white] hover:bg-[#a4895a] lg:ml-0"
      />
    </form>
  </div>
);

export default Footer;
