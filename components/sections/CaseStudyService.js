import { useState } from "react";
import { X } from "react-bootstrap-icons";

export default function CaseStudyService() {
  return (
    <section className="services bg-main-blue py-5">
      <div className="container d-flex flex-column justify-content-center py-3 py-lg-5 ">
        <div className="row position-relative overflow-hidden gx-0">
          <div className="col-lg-12 mb-lg-4">
            <h2 className="second__title text-uppercase text-white">
              Our Services
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
