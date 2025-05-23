export default function CaseStudyAbout() {
  return (
    <section className="about py-3 py-lg-5 bg-light">
      <div className="container py-lg-5">
        <div className="row">
          <div className="col-lg-5 mb-3 mb-lg-0">
            <h2 className="second__title text-uppercase">About Us</h2>
            <hr className="d-block d-lg-none" />
          </div>
          <div className="col-lg-7">
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
                  organisations to find the most effective ways of presenting
                  their brands and sharing their stories, through a variety of
                  media.
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
  );
}
