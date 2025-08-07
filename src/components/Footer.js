import { Link } from "react-router-dom";
import "../Styles/components/Footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      {/* Main Footer Content */}
      <div className="footer-container">
        {/* Brand Section */}
        <div className="footer-brand">
          <div className="footer-logo">
            <img src="/images/logo.png" alt="Wishash Spa Logo" />
          </div>
          <h2 className="footer-title">Wishash Spa</h2>
          <p className="footer-description">
            Experience the ultimate relaxation and wellness at Dubai's premier spa.
            Our expert therapists provide authentic massage treatments that heal both body and mind.
          </p>
          <div className="footer-social">
            <a
              href="https://www.facebook.com/"
              className="social-link"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://www.instagram.com/"
              className="social-link"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://twitter.com/"
              className="social-link"
              aria-label="Twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://www.linkedin.com/"
              className="social-link"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="https://wa.me/"
              className="social-link"
              aria-label="WhatsApp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-whatsapp"></i>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about-us">About Us</Link></li>
            <li><Link to="/services">Our Services</Link></li>
            <li><Link to="/locations">Locations</Link></li>
            <li><Link to="/contact-us">Contact Us</Link></li>
            <li><a href="#testimonials">Reviews</a></li>
          </ul>
        </div>

        {/* Services */}
        <div className="footer-column">
          <h3>Popular Treatments</h3>
          <ul className="footer-links">
            <li><a href="#services">Aromatherapy Treatment</a></li>
            <li><a href="#services">Hot Oil Massage</a></li>
            <li><a href="#services">Full Body Massage</a></li>
            <li><a href="#services">Deep Tissue Massage</a></li>
            <li><a href="#services">Thai Massage</a></li>
            <li><a href="#services">Couple Massage</a></li>
          </ul>
        </div>

        {/* Specialized Services */}
        <div className="footer-column">
          <h3>Signature Services</h3>
          <ul className="footer-links">
            <li><a href="#services">Four Hands Massage</a></li>
            <li><a href="#services">Moroccan Bath</a></li>
            <li><a href="#services">Jacuzzi Bath</a></li>
            <li><a href="#services">Reflexology</a></li>
            <li><a href="#services">Sports Massage</a></li>
            <li><a href="#services">Prenatal Massage</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-column">
          <h3>Get in Touch</h3>
          <div className="contact-info">
            <div className="contact-item">
              <i className="fas fa-map-marker-alt"></i>
              <div>
                <p><strong>Dubai Location</strong></p>
                <p>The Metropolis Tower<br />Ground Floor, Shop No - 6</p>
              </div>
            </div>
            <div className="contact-item">
              <i className="fas fa-phone"></i>
              <div>
                <p><strong>Call Us</strong></p>
                <p>+971-XX-XXX-XXXX</p>
              </div>
            </div>
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <div>
                <p><strong>Email</strong></p>
                <p>info@wishashspa.com</p>
              </div>
            </div>
            <div className="contact-item">
              <i className="fas fa-clock"></i>
              <div>
                <p><strong>Hours</strong></p>
                <p>10:00 AM - 11:00 PM<br />Daily</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <div className="footer-bottom-left">
            <p>&copy; {currentYear} Wishash Spa. All rights reserved.</p>
            <div className="footer-bottom-links">
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
              <a href="#cookies">Cookie Policy</a>
            </div>
          </div>
          <div className="footer-bottom-right">
            <p>Made with ❤️ for your wellness</p>
            <div className="footer-locations">
              <span className="location-badge">Dubai</span>
              <span className="location-badge">Oman</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
