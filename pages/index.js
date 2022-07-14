import { useState } from "react";
import { Fragment } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Footer from "../components/footer";
import Header from "../components/header";
import { ArrowRightShort, X } from "react-bootstrap-icons";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#262161" />

        <title>ASEAN Communications</title>
      </Head>
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
            </div>
            <div className="row">
              <div className="col-lg-12">
                <hr />
                <div className="network-wrapper mt-4 mt-lg-5 mb-lg-5">
                  {networkImages.map((image, i) => (
                    <Link href={image.link} key={i}>
                      <a>
                        <div className="network-image d-block mx-auto text-center ">
                          <Image
                            src={image.image}
                            alt={image.alt}
                            layout="responsive"
                            height={35}
                            width={130}
                            objectFit="contain"
                          />
                        </div>
                      </a>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="about py-3 py-lg-5">
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
                  <div className="col-lg-12 order-2 order-lg-1 mb-4">
                    <hr className="d-block d-lg-none" />
                    <h3 className="third-title text-uppercase mb-4 mt-4 mt-lg-0">
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
                  <div className="col-lg-12 order-1 order-lg-2 d-flex justify-content-between text-main-blue">
                    <div>
                      <h1 className="main-title">80.000</h1>
                      <p className="description fw-bold">People</p>
                    </div>
                    <div>
                      <h1 className="main-title">80+</h1>
                      <p className="description fw-bold">Markets</p>
                    </div>
                    <div>
                      <h1 className="main-title">60+</h1>
                      <p className="description fw-bold">Clients</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="services py-5 mb-3 my-lg-5 bg-main-blue">
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

        <section className="contact py-3 py=lg-5">
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

const networkImages = [
  {
    image: "/images/flourish-logo.svg",
    alt: "Flourish Logo",
    link: "https://flourishdevelopment.vercel.app/",
  },
  {
    image: "/images/iris-logo.svg",
    alt: "Iris Logo",
    link: "https://www.iris-worldwide.com/find-us/jakarta/",
  },
  {
    image: "/images/pabrik-logo.svg",
    alt: "Pabrik Logo",
    link: "https://pabrik.id/",
  },
  {
    image: "/images/kabarmedia-logo.svg",
    alt: "Kabar Media Logo",
    link: "https://kabarmedia.com/home/",
  },
  {
    image: "/images/nava-plus-logo.svg",
    alt: "Nava Plus Logo",
    link: "https://www.navaplus.com/",
  },
];

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
    title: "Strategy.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, aut? Deleniti perferendis vitae id illum hic perspiciatis. Debitis",
  },
  {
    title: "Brand Communication.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, aut? Deleniti perferendis vitae id illum hic perspiciatis. Debitis, sed eius! Nesciunt ipsa reiciendis, dolore est corporis eius et eum accusantium autem harum officia veritatis suscipit quaerat, doloribus repellat tempora tenetur, error asperiores..",
  },
  {
    title: "PR.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, aut? Deleniti perferendis vitae id illum hic perspiciatis. Debitis, sed eius! Nesciunt ipsa reiciendis, dolore est corporis eius Iusto asperiores illo at iste dolorum quaerat commodi.",
  },
  {
    title: "Social Media.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, aut? Deleniti perferendis vitae id illum hic perspiciatis. Debitis, sed eius! Nesciunt ipsa Iusto asperiores illo at iste dolorum quaerat commodi.",
  },
  {
    title: "Research & Insights.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, aut? Deleniti perferendis vitae id illum hic perspiciatis. Debitis, sed eius! Nesciunt ipsa reiciendis, doloribus repellat tempora tenetur, error asperiores. Iusto asperiores illo at iste dolorum quaerat commodi.",
  },
  {
    title: "Web Design & Development.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing ipsa reiciendis, dolore est corporis eius et eum accusantium autem harum officia veritatis suscipit quaerat, doloribus repellat tempora tenetur, error asperiores. Iusto asperiores illo at iste dolorum quaerat commodi.",
  },
  {
    title: "Graphic Design.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, aut? Deleniti perferendis Nesciunt ipsa reiciendis, dolore est corporis eius et eum accusantium autem harum officia veritatis suscipit quaerat, doloribus repellat tempora tenetur, error asperiores. Iusto asperiores illo at iste dolorum quaerat commodi.",
  },
  {
    title: "Product Design.",
    description:
      "Lorem ipsum dolor sit amet. Ea, aut? Deleniti perferendis vitae id illum hic perspiciatis. Debitis, sed eius! Nesciunt ipsa reiciendis, dolore est corporis eius et eum accusantium autem harum officia veritatis suscipit quaerat, doloribus repellat tempora tenetur, error asperiores.",
  },
  {
    title: "Marketing.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, aut? Deleniti perferendis vitae id illum hic perspiciatis. Debitis, harum officia veritatis suscipit quaerat, doloribus repellat tempora tenetur, error asperiores. Iusto asperiores illo at iste dolorum quaerat commodi.",
  },
  {
    title: "Film.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, aut? Deleniti perferendis vitae id illum hic perspiciatis. Debitis, sed eius! Nesciunt ipsa reiciendis, dolore est corporis eius et enetur, error asperiores. Iusto asperiores illo at iste dolorum quaerat commodi.",
  },
  {
    title: "Story Telling.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est corporis eius et eum accusantium autem harum officia veritatis suscipit quaerat, doloribus repellat tempora tenetur, error asperiores. Iusto asperiores illo at iste dolorum quaerat commodi.",
  },
  {
    title: "Content.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est corporis eius et eum accusantium autem harum officia veritatis suscipit quaerat, doloribus repellat tempora tenetur, error asperiores. Iusto asperiores illo at iste dolorum quaerat commodi.",
  },
  {
    title: "Photography.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est corporis eius et eum accusantium autem harum officia veritatis suscipit quaerat, doloribus repellat tempora tenetur, error asperiores. Iusto asperiores illo at iste dolorum quaerat commodi.",
  },
  {
    title: "Books.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est corporis eius et eum accusantium autem harum officia veritatis suscipit quaerat, doloribus repellat tempora tenetur, error asperiores. Iusto asperiores illo at iste dolorum quaerat commodi.",
  },
  {
    title: "Digital Platforms & Integrations.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est corporis eius et eum accusantium autem harum officia veritatis suscipit quaerat, doloribus repellat tempora tenetur, error asperiores. Iusto asperiores illo at iste dolorum quaerat commodi.",
  },
  {
    title: "Media.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est corporis eius et eum accusantium autem harum officia veritatis suscipit quaerat, doloribus repellat tempora tenetur, error asperiores. Iusto asperiores illo at iste dolorum quaerat commodi.",
  },
];
