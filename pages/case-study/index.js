import { Fragment } from "react";
import Header from "../../components/header";
import CaseStudyHero from "../../components/sections/CaseStudyHero";
import CaseStudyList from "../../components/sections/CaseStudyList";
import Footer from "../../components/footer";
import CaseStudyIntro from "../../components/sections/CaseStudyIntro";
import CaseStudyContact from "../../components/sections/CaseStudyContact";
import CaseStudyAbout from "../../components/sections/CaseStudyAbout";
import CaseStudyService from "../../components/sections/CaseStudyService";

export default function CaseStudy() {
  return (
    <Fragment>
      <Header />

      <main>
        <CaseStudyHero />
        <CaseStudyIntro />
        <CaseStudyList />
        <CaseStudyAbout />
        <CaseStudyService />
        <CaseStudyContact />
      </main>

      <Footer />
    </Fragment>
  );
}
