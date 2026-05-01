export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div
          className="container"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "32px",
          }}
        >
          <div className="footer-column">
            <a className="footer-brand" href="#home">
              <span className="logo-mark">e</span>
              <span>gov</span>
            </a>
            <p>
              Catalysing digital transformation in public service delivery at
              speed and scale.
            </p>
            <div className="social-links">
              <a href="#" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" aria-label="X">
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a href="#" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" aria-label="YouTube">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>

          <div className="footer-column">
            <h2>Useful Links</h2>
            <a href="#home">Home</a>
            <a href="#impact">Our Impact</a>
            <a href="#platform">DIGIT Sandbox</a>
          </div>

          <div className="footer-column">
            <h2>Resources</h2>
            <a href="#stories">Our People</a>
            <a href="#news">Resources</a>
            <a href="#contact">Contact Us</a>
          </div>

          <div className="footer-column">
            <h2>Subscribe Now</h2>
            <p>
              Receive regular updates of our monthly newsletter DOT - in your
              inbox.
            </p>
            <form
              className="subscribe-form"
              onSubmit={(e) => e.preventDefault()}
            >
              <label className="visually-hidden" htmlFor="email">
                Email address
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter Your Email"
                required
              />
              <button type="submit" aria-label="Subscribe">
                <i className="fa-solid fa-envelope-open-text"></i>
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div
          className="container"
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "16px",
            width: "100%",
            maxWidth: "100%",
          }}
        >
          <span>&copy;2024. eGov. All Rights Reserved</span>
          <div style={{ display: "flex", gap: "24px" }}>
            <a href="#home">Privacy Policy</a>
            <a href="#home">Terms and Conditions</a>
          </div>
          <a className="back-top" href="#home" aria-label="Back to top">
            <i className="fa-solid fa-angle-up"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
