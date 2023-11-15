import { useState, useEffect } from "react";
import Image from "next/image";
import HamburgerMenu from "react-hamburger-menu";
import { Link } from "react-scroll";

export default function Header() {
  const isOntop = useScrollHandler();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className={`${
        isOntop ? "bg-transparent py-4 py-lg-5" : "scrolled shadow py-3 py-lg-4"
      } header w-100 fixed-top`}
    >
      <div className="container d-flex justify-content-between align-items-center">
        <Link
          to="hero"
          spy={true}
          style={{ cursor: "pointer" }}
          className="asean-communications-logo position-relative"
        >
          <Image
            src="/images/LOGO-KGS-01-initial-white.svg"
            alt="LOGO KGS-01 initial white.svg"
            width={32}
            height={32}
          />
        </Link>
        <HamburgerMenu
          isOpen={isOpen}
          menuClicked={handleClick}
          width={24}
          height={16}
          strokeWidth={2}
          rotate={0}
          color="#FFF"
          borderRadius={0}
          animationDuration={0.3}
          className="humberger-menu"
        />
      </div>
      <nav className={`${isOpen ? "active" : ""} nav-bar`}>
        <div className="container d-flex flex-column">
          <Link
            to="hero"
            spy={true}
            onClick={handleClick}
            className="c-nav-link"
          >
            Home
          </Link>
          <Link
            to="network"
            spy={true}
            offset={-70}
            onClick={handleClick}
            className="c-nav-link"
          >
            Network
          </Link>
          <Link
            to="about"
            spy={true}
            offset={-70}
            onClick={handleClick}
            className="c-nav-link"
          >
            About
          </Link>
          <Link
            to="services"
            spy={true}
            offset={-70}
            onClick={handleClick}
            className="c-nav-link"
          >
            Services
          </Link>
          <Link
            to="contact"
            spy={true}
            onClick={handleClick}
            offset={-70}
            className="c-nav-link"
          >
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}

const useScrollHandler = () => {
  const [scroll, setScroll] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      const scrollCheck = window.scrollY < 8;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    };
    document.addEventListener("scroll", onScroll);
    return () => {
      document.addEventListener("scroll", onScroll);
    };
  }, [scroll, setScroll]);
  return scroll;
};
