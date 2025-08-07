import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const navigate = useNavigate();

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setShowMobileMenu(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showMobileMenu]);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  const closeMobileMenu = () => {
    setShowMobileMenu(false);
  };

  const handleLogoClick = () => {
    navigate('/');
    setShowMobileMenu(false);
  };

  const handleBackdropClick = (e) => {
    if (e.target.classList.contains('mobile-menu-backdrop')) {
      closeMobileMenu();
    }
  };

  return (
    <>
      <nav className="header">
        <div className="logo" onClick={handleLogoClick}>
          <img src="/images/logo.png" alt="Spa Logo" />
        </div>
        <div className="header-link">
          {isMobile ? (
            <i 
              onClick={toggleMobileMenu} 
              className={`fa-solid ${showMobileMenu ? 'fa-times' : 'fa-bars'} mobile-menu-icon`}
            ></i>
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
                <Link to="/locations" className="li">
                  Locations
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
      {isMobile && showMobileMenu && (
        <div className="mobile-menu-backdrop" onClick={handleBackdropClick}>
          <div className={`mobile-menu ${showMobileMenu ? 'mobile-menu-open' : ''}`}>
            <div className="mobile-menu-header">
              <h3>Menu</h3>
              <button onClick={closeMobileMenu} className="close-btn">
                <i className="fa-solid fa-times"></i>
              </button>
            </div>
            <nav className="mobile-menu-nav">
              <Link to="/" className="mobile-menu-item" onClick={closeMobileMenu}>
                <i className="fa-solid fa-home"></i>
                <span>Home</span>
              </Link>
              <Link to="/services" className="mobile-menu-item" onClick={closeMobileMenu}>
                <i className="fa-solid fa-spa"></i>
                <span>Services</span>
              </Link>
              <Link to="/locations" className="mobile-menu-item" onClick={closeMobileMenu}>
                <i className="fa-solid fa-map-marker-alt"></i>
                <span>Locations</span>
              </Link>
              <Link to="/about-us" className="mobile-menu-item" onClick={closeMobileMenu}>
                <i className="fa-solid fa-info-circle"></i>
                <span>About Us</span>
              </Link>
              <Link to="/contact-us" className="mobile-menu-item" onClick={closeMobileMenu}>
                <i className="fa-solid fa-phone"></i>
                <span>Contact Us</span>
              </Link>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
