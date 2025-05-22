import Link from "next/link";
import React from "react";
import { Link as Scroll } from "react-scroll";
import { Facebook, Instagram, Linkedin } from "react-bootstrap-icons";

export default function Footer() {
  return (
    <footer className="pb-3 pb-lg-5">
      <div className="container">
        <div className="row mb-lg-5">
          <div className="col-lg-12">
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 d-flex mb-3 mb-lg-0">
            <div className="w-50">
              <h5 className="mb-3">Quick Links</h5>
              <ul>
                <li>
                  <Scroll
                    to="network"
                    spy={true}
                    offset={-70}
                    className="footer-link"
                  >
                    NETWORK
                  </Scroll>
                </li>
                <li>
                  <Scroll
                    to="about"
                    spy={true}
                    offset={-70}
                    className="footer-link"
                  >
                    ABOUT
                  </Scroll>
                </li>
                <li>
                  <Scroll
                    to="services"
                    spy={true}
                    offset={-70}
                    className="footer-link"
                  >
                    SERVICES
                  </Scroll>
                </li>
                <li>
                  <Scroll
                    to="contact"
                    spy={true}
                    offset={-70}
                    className="footer-link"
                  >
                    CONTACT
                  </Scroll>
                </li>
              </ul>
            </div>
            <div className="w-50">
              <h5 className="mb-3">Our Network</h5>
              <ul>
                <li>
                  <Link
                    href="https://flourish.co.id"
                    target="_blank"
                    className="footer-link"
                  >
                    Flourish
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.iris-worldwide.com/"
                    target="_blank"
                    className="footer-link"
                  >
                    IRIS
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://deltaanalysis.com/"
                    target="_blank"
                    className="footer-link"
                  >
                    Delta Analysis
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://kabarmedia.com/home/"
                    target="_blank"
                    className="footer-link"
                  >
                    Kabar Media
                  </Link>
                </li>
                {/* <li>
                  <Link
                    href="https://www.navaplus.com/"
                    target="_blank"
                    className="footer-link"
                  >
                    Nava Plus
                  </Link>
                </li> */}
                <li>
                  <Link
                    href="https://pabrik.id/"
                    target="_blank"
                    className="footer-link"
                  >
                    Pabrik
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 d-flex footer-contact">
            <div className="footer-contact-item w-50">
              <h5 className="mb-3">Contact</h5>
              <ul>
                <li>
                  <Link
                    href="mailto:info@flourish.co.id"
                    className="footer-link"
                  >
                    info@flourish.co.id
                  </Link>
                </li>
                <li>
                  <Link
                    href="mailto:enquiries@flourish.co.id"
                    className="footer-link"
                  >
                    enquiries@flourish.co.id
                  </Link>
                </li>
                <li className="footer-link">+62 819-0828-5032</li>
              </ul>
            </div>
            <div className="footer-contact-item w-50">
              <h5 className="mb-3">Address</h5>
              <Link
                href="https://www.google.com/maps/place/Kemang+point,+Jl.+Kemang+Raya+No.3,+RT.4%2FRW.1,+Bangka,+Kec.+Mampang+Prpt.,+Kota+Jakarta+Selatan,+Daerah+Khusus+Ibukota+Jakarta+12730/@-6.2559191,106.8149531,21z/data=!4m5!3m4!1s0x2e69f17faaec8343:0x65f4d81adf076ea4!8m2!3d-6.2559548!4d106.8150262"
                target="_blank"
                className="footer-link"
              >
                Kemang Point <br />2<sup>nd</sup> Floor #2-02B
                <br />
                Jl. Kemang Raya No. 3
                <br /> Jakarta Selatan
              </Link>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <small>&copy; PT. KREATIVITAS GANESHA SEJAHTERA | 2025</small>
          </div>
        </div>
      </div>
    </footer>
  );
}
