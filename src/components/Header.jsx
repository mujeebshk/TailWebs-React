import { useState, useEffect } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About Us", href: "#about" },
    { label: "Areas of Work", href: "#approach" },
    { label: "Products & Solutions", href: "#products" },
    { label: "Our Platform", href: "#platform" },
    { label: "Contact", href: "#contact" },
  ];

  const handleNavClick = (href) => {
    setActiveLink(href.substring(1));
    setMobileMenuOpen(false);
  };

  return (
    <header className="site-header">
      <div className="top-bar">
        <div className="container">
          <a href="#news">Events</a>
          <a href="#contact">Contact us</a>
          <a href="#home">
            <i className="fa-solid fa-globe"></i> ENG
          </a>
        </div>
      </div>

      <nav className={`navbar ${isScrolled ? "navbar-scrolled" : ""}`}>
        <div
          className="container"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <a
            href="#home"
            className="navbar-brand"
            onClick={() => handleNavClick("#home")}
          >
            <span className="logo-mark">e</span>
            <span>gov</span>
            <small>foundation</small>
          </a>

          <button
            className="navbar-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{ display: "none" }}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <ul className={`nav-menu ${mobileMenuOpen ? "mobile-open" : ""}`}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`nav-link ${activeLink === link.href.substring(1) ? "active" : ""}`}
                  onClick={() => handleNavClick(link.href)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a href="#products" className="search-link">
            <i className="fa-solid fa-magnifying-glass"></i>
          </a>
        </div>
      </nav>
    </header>
  );
}
