import { useState, useEffect } from "react";
import Image from "next/image";
import HamburgerMenu from "react-hamburger-menu";
import { Link } from "react-scroll";
import NextLink from "next/link";

export default function CaseStudyHeader() {
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
      <div className="container d-flex justify-content-between align-items-center px-3">
        <NextLink
          href="/"
          style={{ cursor: "pointer" }}
          className="asean-communications-logo position-relative d-inline-flex align-items-center"
        >
          <Image
            src="/images/flourish-x-iris-logo.svg"
            alt="LOGO KGS-01 initial white.svg"
            width={221}
            height={35}
          />
        </NextLink>
      </div>
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
