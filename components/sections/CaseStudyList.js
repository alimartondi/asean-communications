import Image from "next/image";
import React from "react";

export default function CaseStudyList() {
  return (
    <section className="py-5">
      <div className="container px-3">
        <div className="row mb-4">
          <div className="col-lg-7">
            <h2 className="second__title text-uppercase">
              Strategic Storytelling for Bilateral Impact
            </h2>
          </div>
        </div>
        <div className="row">
          {caseStudies.map((item, index) => (
            <div className="col-lg-4 mb-4">
              <div className="d-flex flex-column gap-3" key={index}>
                <div className="aspect-3-2 bg-primary">
                  <Image
                    src="/images/FLSRH-Comm-strategy-Thumbnail.jpg"
                    width={757}
                    height={550}
                    alt="FLSRH-Comm-strategy-Thumbnail.jpg"
                    objectFit="cover"
                    className="img-fluid"
                  />
                </div>
                <div>
                  <h4 className="card-title">{item.title}</h4>
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
    title: "FLSRH Communication Strategy",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita, quasi.",
  },
  {
    image: "/images/FLSRH-Comm-strategy-Thumbnail.jpg",
    title: "FLSRH Communication Strategy",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita, quasi.",
  },
  {
    image: "/images/FLSRH-Comm-strategy-Thumbnail.jpg",
    title: "FLSRH Communication Strategy",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita, quasi.",
  },
];
