import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
// import "../Styles/components/Book-now.css";

export default function Header() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const navigate = useNavigate();

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setShowMobileMenu(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showMobileMenu]);

  const toggleMobileMenu = () => {
    if (isAnimating) return;

    setIsAnimating(true);
    setShowMobileMenu(!showMobileMenu);

    // Reset animation lock after animation completes
    setTimeout(() => {
      setIsAnimating(false);
    }, 600);
  };

  const closeMobileMenu = () => {
    if (isAnimating) return;

    setIsAnimating(true);
    setShowMobileMenu(false);

    setTimeout(() => {
      setIsAnimating(false);
    }, 600);
  };

  const handleLogoClick = () => {
    navigate("/");
    closeMobileMenu();
  };

  const handleBackdropClick = (e) => {
    if (e.target.classList.contains("mobile-menu-backdrop")) {
      closeMobileMenu();
    }
  };

  const handleMenuItemClick = (callback) => {
    // Add small delay for ripple effect
    setTimeout(() => {
      callback();
      closeMobileMenu();
    }, 150);
  };

  const whatsappNumber = "971556106417";

  const handleQuickWhatsApp = () => {
    const quickMessage = encodeURIComponent(
      "Hello! I'm interested in booking a spa appointment at Wishah Spa. Could you please help me with the available services and time slots?"
    );
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${quickMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <>
      <nav className="header">
        <div className="logo" onClick={handleLogoClick}>
          <img src="/images/logo.png" alt="Spa Logo" />
        </div>
        <div className="header-link">
          {isMobile ? (
            <button
              onClick={toggleMobileMenu}
              className={`hamburger-menu ${showMobileMenu ? "active" : ""}`}
              aria-label={showMobileMenu ? "Close menu" : "Open menu"}
              aria-expanded={showMobileMenu}
            >
              <div className="hamburger-box">
                <div className="hamburger-inner">
                  <span className="bar bar1"></span>
                  <span className="bar bar2"></span>
                  <span className="bar bar3"></span>
                </div>
              </div>
            </button>
          ) : (
            <ul className="desktop-nav">
              <li>
                <Link to="/" className="li">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="li">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about-us" className="li">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact-us" className="li">
                  Contact Us
                </Link>
              </li>
            </ul>
          )}
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobile && (
        <div
          className={`mobile-menu-backdrop ${showMobileMenu ? "show" : ""}`}
          onClick={handleBackdropClick}
        >
          <div
            className={`mobile-menu ${
              showMobileMenu ? "mobile-menu-open" : ""
            }`}
          >
            <div className="mobile-menu-header">
              <div className="menu-title"></div>
              <button
                onClick={closeMobileMenu}
                className="close-btn"
                aria-label="Close menu"
              >
                <div className="close-icon">
                  <span></span>
                  <span></span>
                </div>
              </button>
            </div>
            <nav className="mobile-menu-nav">
              <div
                className="mobile-menu-item"
                style={{ "--delay": "0.1s" }}
                onClick={() => handleMenuItemClick(() => navigate("/"))}
              >
                <div className="menu-item-content">
                  <div className="menu-icon">
                    <i className="fa-solid fa-home"></i>
                  </div>
                  <span>Home</span>
                  <div className="menu-arrow">
                    <i className="fa-solid fa-chevron-right"></i>
                  </div>
                </div>
                <div className="ripple"></div>
              </div>

              <div
                className="mobile-menu-item"
                style={{ "--delay": "0.15s" }}
                onClick={() => handleMenuItemClick(() => navigate("/services"))}
              >
                <div className="menu-item-content">
                  <div className="menu-icon">
                    <i className="fa-solid fa-spa"></i>
                  </div>
                  <span>Services</span>
                  <div className="menu-arrow">
                    <i className="fa-solid fa-chevron-right"></i>
                  </div>
                </div>
                <div className="ripple"></div>
              </div>

              <div
                className="mobile-menu-item"
                style={{ "--delay": "0.25s" }}
                onClick={() => handleMenuItemClick(() => navigate("/about-us"))}
              >
                <div className="menu-item-content">
                  <div className="menu-icon">
                    <i className="fa-solid fa-info-circle"></i>
                  </div>
                  <span>About Us</span>
                  <div className="menu-arrow">
                    <i className="fa-solid fa-chevron-right"></i>
                  </div>
                </div>
                <div className="ripple"></div>
              </div>

              <div
                className="mobile-menu-item"
                style={{ "--delay": "0.3s" }}
                onClick={() =>
                  handleMenuItemClick(() => navigate("/contact-us"))
                }
              >
                <div className="menu-item-content">
                  <div className="menu-icon">
                    <i className="fa-solid fa-phone"></i>
                  </div>
                  <span>Contact Us</span>
                  <div className="menu-arrow">
                    <i className="fa-solid fa-chevron-right"></i>
                  </div>
                </div>
                <div className="ripple"></div>
              </div>
            </nav>

            <div className="menu-footer">
              <div className="menu-footer-content">
                <p>Premium Spa Experience</p>
                <div className="menu-decorative-line"></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
