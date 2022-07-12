import { useState } from "react";
import Head from "next/head";
import { Fragment } from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import { ArrowLeftShort, ArrowRightShort, X } from "react-bootstrap-icons";

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
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <hr />
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

        <section className="services py-5 my-lg-5 bg-main-blue">
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
                <div className="services-body position-relative overflow-hidden">
                  {servicesContents.map((content, i) => (
                    <Services
                      key={i}
                      title={content.title}
                      description={content.description}
                    />
                  ))}
                </div>
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
                    Submit
                    <ArrowRightShort className="arrow-right fs-3 fw-bolder" />
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

function Services(props) {
  const [open, setOpen] = useState(false);

  const handleClick = () => setOpen(!open);

  return (
    <>
      <span onClick={handleClick} className="third-title me-3">
        {props.title}
      </span>
      <div
        className={`services-detail d-flex flex-column ${open ? "active" : ""}`}
      >
        <div className="button-close ms-auto">
          <X onClick={handleClick} className="fs-1 ms-auto" />
        </div>
        <div className="services-oerlay px-lg-5">
          <h5 className="third-title text-dark mb-3">{props.title}</h5>
          <p className="description">{props.description}</p>
        </div>
      </div>
    </>
  );
}

const servicesContents = [
  {
    title: "Story Board.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, aut? Deleniti perferendis vitae id illum hic perspiciatis. Debitis",
  },
  {
    title: "Something",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, aut? Deleniti perferendis vitae id illum hic perspiciatis. Debitis, sed eius! Nesciunt ipsa reiciendis, dolore est corporis eius et eum accusantium autem harum officia veritatis suscipit quaerat, doloribus repellat tempora tenetur, error asperiores..",
  },
  {
    title: "Story Board.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, aut? Deleniti perferendis vitae id illum hic perspiciatis. Debitis, sed eius! Nesciunt ipsa reiciendis, dolore est corporis eius Iusto asperiores illo at iste dolorum quaerat commodi.",
  },
  {
    title: "Story Board.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, aut? Deleniti perferendis vitae id illum hic perspiciatis. Debitis, sed eius! Nesciunt ipsa Iusto asperiores illo at iste dolorum quaerat commodi.",
  },
  {
    title: "Story Board.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, aut? Deleniti perferendis vitae id illum hic perspiciatis. Debitis, sed eius! Nesciunt ipsa reiciendis, doloribus repellat tempora tenetur, error asperiores. Iusto asperiores illo at iste dolorum quaerat commodi.",
  },
  {
    title: "Story Board.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing ipsa reiciendis, dolore est corporis eius et eum accusantium autem harum officia veritatis suscipit quaerat, doloribus repellat tempora tenetur, error asperiores. Iusto asperiores illo at iste dolorum quaerat commodi.",
  },
  {
    title: "Story Board.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, aut? Deleniti perferendis Nesciunt ipsa reiciendis, dolore est corporis eius et eum accusantium autem harum officia veritatis suscipit quaerat, doloribus repellat tempora tenetur, error asperiores. Iusto asperiores illo at iste dolorum quaerat commodi.",
  },
  {
    title: "Story Board.",
    description:
      "Lorem ipsum dolor sit amet. Ea, aut? Deleniti perferendis vitae id illum hic perspiciatis. Debitis, sed eius! Nesciunt ipsa reiciendis, dolore est corporis eius et eum accusantium autem harum officia veritatis suscipit quaerat, doloribus repellat tempora tenetur, error asperiores.",
  },
  {
    title: "Story Board.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, aut? Deleniti perferendis vitae id illum hic perspiciatis. Debitis, harum officia veritatis suscipit quaerat, doloribus repellat tempora tenetur, error asperiores. Iusto asperiores illo at iste dolorum quaerat commodi.",
  },
  {
    title: "Story Board.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, aut? Deleniti perferendis vitae id illum hic perspiciatis. Debitis, sed eius! Nesciunt ipsa reiciendis, dolore est corporis eius et enetur, error asperiores. Iusto asperiores illo at iste dolorum quaerat commodi.",
  },
  {
    title: "Story Board.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est corporis eius et eum accusantium autem harum officia veritatis suscipit quaerat, doloribus repellat tempora tenetur, error asperiores. Iusto asperiores illo at iste dolorum quaerat commodi.",
  },
];
