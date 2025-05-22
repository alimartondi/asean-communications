import Image from "next/image";
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
              <div className="d-flex flex-column gap-3">
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const caseStudies = [
  {
    image: "/images/FLSRH-Comm-strategy-Thumbnail.jpg",
    title: "JAIF",
    description: "JAIF Communication Strategy Framework",
  },
  {
    image: "/images/FLSRH-Golden-Mission-Web-Thumbnail.jpg",
    title: "ASEAN-Japan 50",
    description: "Mission Accomplished: Games to Engage and Educate",
  },
  {
    image: "/images/NAHP-Thumbnail.jpg",
    title: "NAHP",
    description: "Impactful Storytelling for Sustainable Housing",
  },
  {
    image: "/images/FLSRH-Oxfam-Web-Thumbnail.jpg",
    title: "OXFAM",
    description: "Innovation for a More Equal Asia",
  },
];
