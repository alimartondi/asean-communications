import Link from "next/link";
import React from "react";
import { Link as Scroll } from "react-scroll";

export default function Footer() {
  return (
    <footer className="py-3 py-lg-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 d-flex mb-3 mb-lg-0">
            <div>
              <h5>Our Network</h5>
              <ul>
                <li>
                  <Scroll to="hero" spy={true} className="footer-link">
                    Network
                  </Scroll>
                </li>
                <li>
                  <Scroll to="hero" spy={true} className="footer-link">
                    About
                  </Scroll>
                </li>
                <li>
                  <Scroll to="hero" spy={true} className="footer-link">
                    Services
                  </Scroll>
                </li>
                <li>
                  <Scroll to="hero" spy={true} className="footer-link">
                    Contact
                  </Scroll>
                </li>
              </ul>
            </div>
            <div className="ms-5">
              <h5>Quik Links</h5>
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
            <div>
              <h5>Contact</h5>
              <ul>
                <li>email@address.info</li>
                <li>another@mail.info</li>
                <li>021 88435439</li>
                <li>021 909534905</li>
              </ul>
            </div>
            <div className="ms-5">
              <h5>Address</h5>
              <p>
                Jl. Something In Jakarta, <br /> No.32 Jakarta, Indonesia
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
            <p>Copyright</p>
            <div className="social-media"></div>
          </div>
        </div>
      </div>
    </footer>
  );
}