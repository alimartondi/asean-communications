import { Fragment } from "react";
import CaseStudyHero from "../../components/sections/CaseStudyHero";
import CaseStudyList from "../../components/sections/CaseStudyList";
import Footer from "../../components/footer";
import CaseStudyIntro from "../../components/sections/CaseStudyIntro";
import CaseStudyContact from "../../components/sections/CaseStudyContact";
import CaseStudyAbout from "../../components/sections/CaseStudyAbout";
import CaseStudyService from "../../components/sections/CaseStudyService";
import CaseStudyHeader from "../../components/layouts/CaseStudyHeader";

export default function CaseStudy() {
  return (
    <Fragment>
      <CaseStudyHeader />

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
