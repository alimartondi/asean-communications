import Link from "next/link";
import React from "react";
import { Link as Scroll } from "react-scroll";
import { Facebook, Instagram, Linkedin } from "react-bootstrap-icons";

export default function Footer() {
  return (
    <footer className="py-3 py-lg-5">
      <div className="container">
        <div className="row mb-lg-5">
          <div className="col-lg-12">
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 d-flex mb-3 mb-lg-0">
            <div className="w-50">
              <h5 className="mb-3">Our Network</h5>
              <ul>
                <li>
                  <Scroll
                    to="network"
                    spy={true}
                    offset={-70}
                    className="footer-link"
                  >
                    Network
                  </Scroll>
                </li>
                <li>
                  <Scroll
                    to="about"
                    spy={true}
                    offset={-70}
                    className="footer-link"
                  >
                    About
                  </Scroll>
                </li>
                <li>
                  <Scroll
                    to="services"
                    spy={true}
                    offset={-70}
                    className="footer-link"
                  >
                    Services
                  </Scroll>
                </li>
                <li>
                  <Scroll
                    to="contact"
                    spy={true}
                    offset={-70}
                    className="footer-link"
                  >
                    Contact
                  </Scroll>
                </li>
              </ul>
            </div>
            <div className="w-50">
              <h5 className="mb-3">Quik Links</h5>
              <ul>
                <li>
                  <Link href="/">
                    <a className="footer-link">Flourish</a>
                  </Link>
                </li>
                <li>
                  <Link href="https://www.iris-worldwide.com/find-us/jakarta/">
                    <a className="footer-link">Iris</a>
                  </Link>
                </li>
                <li>
                  <Link href="https://pabrik.id/">
                    <a className="footer-link">Pabrik</a>
                  </Link>
                </li>
                <li>
                  <Link href="https://kabarmedia.com/home/">
                    <a className="footer-link">Kabarmedia</a>
                  </Link>
                </li>
                <li>
                  <Link href="https://www.navaplus.com/">
                    <a className="footer-link">Nava Plus</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 d-flex">
            <div className="w-50">
              <h5 className="mb-3">Contact</h5>
              <ul>
                <li className="footer-link">example@mail.info</li>
                <li className="footer-link">another@mail.info</li>
                <li className="footer-link">021 88435439</li>
                <li className="footer-link">021 909534905</li>
              </ul>
            </div>
            <div className="w-50">
              <h5 className="mb-3">Address</h5>
              <p className="footer-link">
                Jl. Something In <br /> Jakarta, No.32
                <br /> DKI Jakarta, Indonesia
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 d-flex justify-content-between">
            <small>Copyright | 2022</small>
            <div className="social-media text-dark">
              <span>
                <Instagram className="fs-4" />
              </span>
              <span>
                <Linkedin className="fs-4 ms-2" />
              </span>
              <span>
                <Facebook className="fs-4 ms-2" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
