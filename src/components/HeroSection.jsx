export default function HeroSection() {
  return (
    <section className="hero-section page-section" id="home">
      <div className="hero-swoosh"></div>
      <div className="container">
        <div className="hero-layout">
          <div className="hero-content" id="about">
            <h1>
              20 years of digital transformation in public service delivery{" "}
              <span className="brush-highlight">It's possible.</span>
            </h1>
            <p>
              Catalysts. Ecosystem enablers. Problem solvers. At eGov, we are
              driven by the power of open digital infrastructure and ecosystems
              to enable governments to deliver accessible, inclusive and
              transparent services to every citizen.
            </p>
            <div className="button-row">
              <a className="btn-primary-custom" href="#approach">
                Our Approach
              </a>
              <a className="btn-outline-custom" href="#impact">
                Our Impact
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80"
              alt="Citizens using digital public services"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
