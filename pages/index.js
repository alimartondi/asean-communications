import { useState } from "react";
import { Fragment } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Footer from "../components/footer";
import Header from "../components/header";
import { ArrowRightShort, X } from "react-bootstrap-icons";
import { useForm } from "react-hook-form";
import swal from "sweetalert";

export default function Home() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data, e) => {
    e.preventDefault();

    const formData = new FormData(); // Buat objek FormData yang benar

    for (const key in data) {
      formData.append(key, data[key]);
    }

    await fetch(
      "https://script.google.com/macros/s/AKfycbxZTcewbwnGbSoo8CAEc2bFon6i1fqv7_7ZU0UNKmtgofYVIMFALEZUcACnv8DZBUVD/exec",
      {
        method: "POST",
        body: formData,
      }
    )
      .then(() => {
        swal({
          title: "Thanks for your interest!",
          text: "We'll be in touch soon!",
          icon: "success",
          buttons: false,
        });
      })
      .catch(() => {
        swal({
          title: "Oops...",
          text: "Something went wrong!",
          icon: "error",
          buttons: false,
        });
      });
    reset();
  };

  return (
    <Fragment>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#262161" />

        <link rel="icon" type="image/x-icon" href="favicon.ico?v=2" />
        <link rel="icon" href="favicon.ico" type="image/x-icon" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />

        <title>Strategic Insights & Campaigns</title>
      </Head>

      <Header />

      <main>
        <section className="hero">
          <div className="container position-absolute h-100 start-0 end-0">
            <div className="row h-100 align-items-center">
              <div className="col-lg-10 mx-auto">
                <h1 className="main-title text-uppercase text-white text-center">
                  We use data, design and creativity to execute meaningful
                  research & campaigns
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
                  <br /> Network
                </h2>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <hr />
                <div className="network-wrapper mt-4 mt-lg-5 mb-lg-5">
                  {networkImages.map((image, i) => (
                    <Link href={image.link} key={i} target="_blank">
                      <div className="network-image d-block mx-auto text-center">
                        <Image
                          src={image.image}
                          alt={image.alt}
                          height={60}
                          width={224}
                          className="img-fluid"
                        />
                      </div>
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
                      We tackle complex issues with creative story-telling and
                      visual narratives, through campaigns that promote positive
                      change across ASEAN.
                    </h3>
                    <p className="description">
                      For over two decades we have worked with individuals and
                      organisations to find the most effective ways of
                      presenting their brands and sharing their stories, through
                      a variety of media.
                    </p>
                  </div>
                  <div className="col-lg-12 order-1 order-lg-2 d-flex justify-content-between text-main-blue">
                    <div>
                      <h1 className="main-title">200+</h1>
                      <p className="description fw-bold">People</p>
                    </div>
                    <div>
                      <h1 className="main-title">9+</h1>
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

        <section className="services bg-main-blue py-5 mb-5">
          <div className="container d-flex flex-column justify-content-center">
            <div className="row py-3 py-lg-5 position-relative overflow-hidden gx-0">
              <div className="col-lg-12 mb-lg-4">
                <h2 className="second-title text-uppercase text-white">
                  Our <br />
                  Services
                </h2>
              </div>
              <div className="col-lg-12">
                <div className="services-body">
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

        <section className="contact py-3 py-lg-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <h2 className="second-title text-uppercase">
                  Contact <br />
                  Us
                </h2>
              </div>
              <div className="col-lg-6">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="form-outline mb-3">
                    <input
                      {...register("name", {
                        required: true,
                      })}
                      type="text"
                      id="fullName"
                      className="form-control custom-form rounded-0"
                      placeholder="Full name"
                    />
                    {errors.name?.type === "required" && (
                      <small className="text-danger ps-1">
                        Name is required!
                      </small>
                    )}
                  </div>
                  <div className="form-outline mb-3">
                    <input
                      {...register("email", {
                        required: true,
                        pattern:
                          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                      })}
                      type="email"
                      id="form1Example1"
                      className="form-control rounded-0"
                      placeholder="Email address"
                    />
                    {errors.email?.type === "required" && (
                      <small className="text-danger ps-1">
                        Email is required!
                      </small>
                    )}
                    {errors.email?.type === "pattern" && (
                      <small className="text-danger ps-1">
                        Use the correct email format!
                      </small>
                    )}
                  </div>
                  <div className="form-outline mb-4">
                    <textarea
                      {...register("message", { required: true })}
                      id="message"
                      rows="5"
                      placeholder="Message"
                      className="form-control rounded-0"
                    />
                    {errors.message?.type === "required" && (
                      <small className="text-danger ps-1">
                        Message is required!
                      </small>
                    )}
                  </div>
                  <button
                    onClick={handleSubmit(onSubmit)}
                    className={`${
                      isSubmitting ? "disabled" : ""
                    } btn main-button d-flex align-items-center`}
                  >
                    {isSubmitting ? "Submitting" : "Submit"}
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
    link: "https://flourish.co.id/",
  },
  {
    image: "/images/iris-logo.svg",
    alt: "Iris Logo",
    link: "https://www.iris-worldwide.com/",
  },
  {
    image: "/images/deltaanalysis-logo.svg",
    alt: "Delta Analysis Logo",
    link: "https://deltaanalysis.com/",
  },
  {
    image: "/images/kabarmedia-logo.svg",
    alt: "Kabar Media Logo",
    link: "https://kabarmedia.com/home/",
  },
  {
    image: "/images/pabrik-logo.svg",
    alt: "Pabrik Logo",
    link: "https://pabrik.id/",
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
      "We conduct market research using innovative tools, big data and proven methods to deliver insights and actionable recommendations for 		organizations and brands. We develop communication strategies through an insight-focused framework that clearly identifies problems, 		outlines objectives, and maps audience profiles and journeys to drive change.",
  },
  {
    title: "Campaigns.",
    description:
      "Blending Advertising, PR and CRM, our teams leverage data and insights to create experiences that excite, and build engagement with our client's audiences.",
  },
  {
    title: "Brand Communication.",
    description:
      "From campaign ideation to production, we create, manage and amplify your key messages across platforms to effectively and efficiently reach your audience.",
  },
  {
    title: "PR.",
    description:
      "With a strong understanding of ASEAN cultures and identity, our PR network is able to effectively translate messages across the region with a focus on the unique facets of each country to build campaigns that resonate across Southeast Asia and Beyond.",
  },
  {
    title: "Events.",
    description:
      "We craft bespoke events that epitomise your brand's core values. From concept to execution, our team ensures every event, whether it's a high-profile brand activation, a knowledge seminar, or a cultural exhibition, delivers exceptional engagement and value. Our services cover creative design, logistical planning, and the integration of arts and knowledge, creating experiences that resonate with participants, foster connections, enhance knowledge sharing, and boost brand visibility effectively.",
  },
  {
    title: "Social Media.",
    description:
      "ASEAN countries have up to 25% higher penetration rate of social media than the 42% of the global average. However, each country uses different messaging tools for communication. While some ASM favour WhatsApp, others are partial to Line or Messenger. Our network careful creates messages across the region to leverage the strengths of each local market to create social media campaigns with authenticity.",
  },
  {
    title: "Research & Insights.",
    description:
      "We execute market research using innovative tools, big data and proven research methods to deliver insights and actionable recommendations for brand growth in Southeast Asia and APAC through creative storytelling and technology.",
  },
  {
    title: "Web Design & Development.",
    description:
      "We plan digital strategies and develop custom websites and CRM systems, mobile applications, custom-made digital tools for enhanced functionality, as well as apps for data aggregation, marketing, analytics, and content management.",
  },
  {
    title: "Graphic Design.",
    description:
      "Good design is good business and good design makes your brand look good: it’s the key to creating an emotional connection with people, both externally and internally, and establishing a sense of professionalism and trust.",
  },
  {
    title: "Product Design.",
    description:
      "Taking all phases of the product life cycle into consideration, our designers develop aspects of a product that will directly impact the quality of the user experience, integrating aspects of form, fit, function, and visual appeal to create positive emotional connections. The success of this design process often determines the success and longevity of the product itself and its performance in consumer-driven markets.",
  },
  {
    title: "Marketing.",
    description:
      "We offer strategic marketing and communication solutions from market entry to growth for leading brands and startups in Southeast Asia.",
  },
  {
    title: "Film.",
    description:
      "We harness the power of film and animation to tell stories through corporate documentaries, animated explainers, corporate presentations and TVCs, handling all aspects of development from planning and research to script development, voiceover, production and post-production, 3D and 2D animations and illustrations.",
  },
  {
    title: "Storytelling.",
    description:
      "Branding and design tell stories in which both words and visuals play a part. Stories sell, giving context and inspiring action outside the organistion, building culture and purpose within. The right stories, well told, transform perceptions and instigate meaningful actions. We help you find your story and then develop the best way to tell it to your chosen audiences.",
  },
  {
    title: "Content.",
    description:
      "Content marketing is complex: each brand is multi-dimensional, with a diversity of features that cannot always be simplified to a one-size-fits-all message for a target audience. Differentiation and authenticity are the qualities that can make for a memorable campaign, harnessing the strengths of brand and its community in a way that creates authentic engagement.",
  },
  {
    title: "Photography.",
    description:
      "Behind every image that creates an impact, there is a creative eye combined with professional experience, comprehension of technical requirements, and an ability to tell a story through a single captured moment. Our expertise covers advertising, commercial, editorial, landscape, architectural, and portrait photography. We see projects through all the way from photoshoot planning and management to coordination of shooting and post-production.",
  },
  {
    title: "Books.",
    description:
      "Our in-house editing and design team works closely with clients and individuals to craft their stories, collaborating with writers, photographers, and artists to develop the best medium for bringing each story to life.",
  },
  {
    title: "Digital Platforms & Integrations.",
    description:
      "From an idea to the comprehensive implementation of a Minimum Viable Product (MVP) for your digital platform. We execute over multiple iterations to optimize budget, and test each stage of development effectively and efficiently.",
  },
  {
    title: "Media.",
    description:
      "From Digital Media to OOH, we use data and analytics to effectively plan your media budget with ongoing measurement and programmatic pivots that ensure we align demographics, media and creative messaging to maximise impact.",
  },
];
