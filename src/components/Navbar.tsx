import { useState } from 'react';
import logo from './../assets/image/icons/logo.svg';
import user from './../assets/image/icons/user.svg';
import bag from './../assets/image/icons/bag.svg';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    {
      name: 'Home',
      href: '#home',
    },
    {
      name: 'About',
      href: '#about',
    },
    {
      name: 'Skills',
      href: '#skills',
    },
    {
      name: 'Sklep',
      href: '#shop',
    },
    {
      name: 'Services',
      href: '#services',
    },
    {
      name: 'Contact',
      href: '#contact',
    },
    {
      name: 'Testimonials',
      href: '#testimonials',
    },
  ];

  const scrollToSection = (href) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <header className="bg-opacity-50 fixed top-0 z-50 flex w-screen items-center justify-between bg-gradient-to-t from-transparent to-black p-6">
      <div className="text-3xl font-bold text-white">
        <img className="h-[100px] w-auto" src={logo} alt="logo" />
      </div>
      <div className="absolute top-6 right-4 z-30 md:hidden">
        <button
          type="button"
          className="block focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? (
            <img
              src="https://img.icons8.com/ios-filled/50/FFFFFF/delete-sign.png"
              alt="Close menu"
              width="24"
              height="24"
            />
          ) : (
            <img
              src="https://img.icons8.com/ios-filled/50/FFFFFF/menu--v6.png"
              alt="Open menu"
              width="24"
              height="24"
            />
          )}
        </button>
      </div>
      <nav
        className={`fixed inset-0 flex h-fit flex-col items-center justify-center bg-[#111827] p-6 md:relative md:flex md:w-full md:flex-row md:justify-between md:bg-transparent ${
          isMenuOpen ? 'block' : 'hidden'
        }`}
      >
        <ul className="flex flex-col items-center space-y-5 md:max-w-max md:flex-row md:space-y-0 md:space-x-5">
          {menuItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="font-secondary hover:text-primary block text-4xl text-white transition ease-linear md:text-lg"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
        <ul className="hidden flex-col items-center space-y-5 md:visible md:flex md:max-w-max md:flex-row md:space-y-0 md:space-x-5">
          <li className="navbar-item">
            <a
              href="#"
              className="font-secondary hover:text-primary block text-4xl text-white transition ease-linear md:text-lg"
            >
              <img src={user} alt="icon user" height={'24px'} width={'24px'} />
            </a>
          </li>
          <li className="navbar-item">
            <a
              href="#"
              className="font-secondary hover:text-primary block text-4xl text-white transition ease-linear md:text-lg"
            >
              <img src={bag} alt="icon bag" height={'24px'} width={'24px'} />
            </a>
          </li>
        </ul>
      </nav>
      <ul className="fixed bottom-0 left-0 flex w-full items-center justify-between space-y-5 md:hidden">
        <li className="navbar-item">
          <a
            href="#"
            className="font-secondary hover:text-primary block text-4xl text-white transition ease-linear md:text-lg"
          >
            <img src={user} alt="icon user" height={'24px'} width={'24px'} />
          </a>
        </li>
        <li className="navbar-item">
          <a
            href="#"
            className="font-secondary hover:text-primary block text-4xl text-white transition ease-linear md:text-lg"
          >
            <img src={bag} alt="icon bag" height={'24px'} width={'24px'} />
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
