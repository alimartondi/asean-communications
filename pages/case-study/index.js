import React, { Fragment } from "react";
import Header from "../../components/header";
import CaseStudyHero from "../../components/sections/CaseStudyHero";
import CaseStudyList from "../../components/sections/CaseStudyList";

export default function CaseStudy() {
  return (
    <Fragment>
      <Header />

      <main>
        <CaseStudyHero />
        <CaseStudyList />
      </main>
    </Fragment>
  );
}
