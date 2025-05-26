import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function CaseStudyList() {
  return (
    <section className="py-5">
      <div className="container px-3 py-lg-5">
        <div className="row mb-4 mb-lg-5 gy-3 justify-content-center">
          <div className="col-lg-8">
            <h2 className="second__title text-uppercase text-center">
              The Projects That Shaped Our Creative Journey
            </h2>
          </div>
        </div>

        <div className="row">
          {caseStudies.map((item, index) => (
            <div className="col-lg-6 col-md-6 mb-4" key={index}>
              <Link
                href={item.url}
                target="_blank"
                className="d-flex flex-column gap-3 case-study-card"
              >
                <div className="aspect-3-2 bg-primary">
                  <Image
                    src={item.image}
                    alt="FLSRH-Comm-strategy-Thumbnail.jpg"
                    width={757}
                    height={550}
                    quality={100}
                    sizes="800px"
                    priority
                    className="h-100 w-100 object-fit-cover"
                  />
                </div>
                <div>
                  <h4 className="card-title mb-1">{item.title}</h4>
                  <p className="mb-0">{item.description}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const caseStudies = [
  {
    url: "",
    image: "/images/FLSRH-Comm-strategy-Thumbnail.jpg",
    title: "JAIF",
    description: "JAIF Communication Strategy Framework",
  },
  {
    url: "",
    image: "/images/FLSRH-Golden-Mission-Web-Thumbnail.jpg",
    title: "ASEAN-Japan 50",
    description: "Mission Accomplished: Games to Engage and Educate",
  },
  {
    url: "",
    image: "/images/NAHP-Thumbnail.jpg",
    title: "NAHP",
    description: "Impactful Storytelling for Sustainable Housing",
  },
  {
    url: "",
    image: "/images/FLSRH-Oxfam-Web-Thumbnail.jpg",
    title: "OXFAM",
    description: "Innovation for a More Equal Asia",
  },
  {
    url: "/documents/Iris-Jakarta-x-British-Embassy-Jakarta-HEI.pdf",
    image: "/images/CASE_01_BritEmbassy.jpg",
    title: "British Embassy Jakarta | Higher Education Institutions",
    description:
      "Promoting the UK-Indonesia Transnational Education Initiative",
  },
  {
    url: "/documents/Iris-Jakarta-x-British-Embassy-Jakarta-Renewable-Energy-Partnership.pdf",
    image: "/images/CASE_02_BritEmbassy.jpg",
    title:
      "British Embassy Jakarta | UK-Indonesia Renewable Energy Partnership",
    description: "Promoting The UK Renewable Energy Media Campaign",
  },
  {
    url: "/documents/Iris-Jakarta-x-British-Embassy-Jakarta-Cyber Security.pdf",
    image: "/images/CASE_03_BritEmbassy.jpg",
    title: "British Embassy Jakarta | Cyber Security Media Campaign",
    description: "The British Embassy Jakarta's Cyber Security Media Campaign",
  },
  {
    url: "/documents/Iris-Jakarta-x-ASEAN-AFMAM.pdf",
    image: "/images/CASE_04_ASEAN.jpg",
    title: "ASEAN - Japan | AFMAM Plus Media Engagement",
    description:
      "Media Visibility for Youth Voices for ASEAN-Japan Cooperation",
  },
  {
    url: "/documents/Iris-Jakarta-x-Monash-University-Social.pdf",
    image: "/images/CASE_05_MONASH.jpg",
    title: "Monash University",
    description: "Strengthening Monash University's global reputation",
  },
  {
    url: "/documents/Iris-Jakarta-x-STB-Social.pdf",
    image: "/images/CASE_06_STB.jpg",
    title: "Singapore Tourism Board",
    description: "Inspiring Indonesian travelers to choose Singapore",
  },
];
