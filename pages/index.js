import Head from "next/head";
import Image from "next/image";
import { Fragment } from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import { ArrowRightShort } from "react-bootstrap-icons";

export default function Home() {
  return (
    <Fragment>
      <Head></Head>
      <Header />
      <main>
        <section className="hero">
          <div className="container position-absolute h-100 start-0 end-0">
            <div className="row h-100 align-items-center">
              <div className="col-lg-10 mx-auto">
                <h1 className="main-title text-uppercase text-white text-center">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </h1>
              </div>
            </div>
          </div>
        </section>

        <section className="network py-4 py-lg-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <h2 className="second-title text-uppercase">
                  Our
                  <br /> Netwrok
                </h2>
                <hr />
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <p>logo here</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="about py-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 mb-3 mb-lg-0">
                <h2 className="second-title text-uppercase">
                  About <br /> Us
                </h2>
                <hr className="d-block d-lg-none" />
              </div>
              <div className="col-lg-8">
                <div className="row flex-column">
                  <div className="col-lg-12 order-2 order-lg-1">
                    <hr className="d-block d-lg-none" />
                    <h3 className="third-title text-uppercase mb-3 mt-4 mt-lg-0">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Repudiandae molestiae porro iure!
                    </h3>
                    <p className="description">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quam consequuntur repellat ut. Hic, odit? Blanditiis iure
                      fuga numquam, adipisci maiores odio, libero vero eum ad
                      corporis, hic quod esse doloribus!
                    </p>
                  </div>
                  <div className="col-lg-12 order-1 order-lg-2 d-flex justify-content-between">
                    <div>
                      <h1 className="main-title">80.000</h1>
                      <p>People</p>
                    </div>
                    <div>
                      <h1 className="main-title">80+</h1>
                      <p>Markets</p>
                    </div>
                    <div>
                      <h1 className="main-title">60+</h1>
                      <p>Clients</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="services py-5 bg-main-blue">
          <div className="container">
            <div className="row mb-3">
              <div className="col-lg-6">
                <h2 className="second-title text-uppercase text-white">
                  Our <br />
                  Services
                </h2>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <h6 className="text-white">Story Boarding</h6>
              </div>
            </div>
          </div>
        </section>

        <section className="contact py-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <h2 className="second-title text-uppercase">
                  Contact <br />
                  Us
                </h2>
              </div>
              <div className="col-lg-6">
                <form action="">
                  <div className="form-outline mb-3">
                    <input
                      type="text"
                      id="fullName"
                      className="form-control custom-form rounded-0"
                      placeholder="Full name"
                    />
                  </div>
                  <div className="form-outline mb-3">
                    <input
                      type="email"
                      id="form1Example1"
                      className="form-control rounded-0"
                      placeholder="Email address"
                    />
                  </div>
                  <div className="form-outline mb-4">
                    <textarea
                      name="message"
                      id="message"
                      rows="5"
                      placeholder="Message"
                      className="form-control rounded-0"
                    ></textarea>
                  </div>
                  <button
                    type="button"
                    className="btn main-button d-flex align-items-center"
                  >
                    Send
                    <ArrowRightShort className="arrow-right fs-2 fw-bolder" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </Fragment>
  );
}
