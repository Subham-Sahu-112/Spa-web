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
            Experience the ultimate relaxation and wellness at Dubai's premier
            spa. Our expert therapists provide authentic massage treatments that
            heal both body and mind.
          </p>
          <div className="footer-social">
            <a
              href="https://www.facebook.com/profile.php?id=61578791464526"
              className="social-link"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://www.instagram.com/wishahspa_/"
              className="social-link"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://www.snapchat.com/add/wishahspa1?share_id=Wl2Q0fyXYMo&locale=en-IN"
              className="social-link"
              aria-label="Twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fa-brands fa-snapchat"></i>
            </a>

            <a
              href="https://wa.me/971556106417"
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
        <div className="footer-column nv">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about-us">About Us</Link>
            </li>
            <li>
              <Link to="/services">Our Services</Link>
            </li>
            <li>
              <Link to="/contact-us">Contact Us</Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div className="footer-column serv-par">
          <h3>Our Services</h3>
          <div className="serv">
            <ul className="footer-links">
              <li>
                <Link to="/services">Aromatherapy Treatment</Link>
              </li>
              <li>
                <Link to="/services">Hot Oil Massage</Link>
              </li>
              <li>
                <Link to="/services">Full Body Massage</Link>
              </li>
              <li>
                <Link to="/services">Deep Tissue Massage</Link>
              </li>
              <li>
                <Link to="/services">Thai Massage</Link>
              </li>
              <li>
                <Link to="/services">Couple Massage</Link>
              </li>
            </ul>
            <ul className="footer-links">
              <li>
                <Link to="/services">Four Hands Massage</Link>
              </li>
              <li>
                <Link to="/services">Moroccan Bath</Link>
              </li>
              <li>
                <Link to="/services">Jacuzzi Bath</Link>
              </li>
              <li>
                <Link to="/services">Shaving</Link>
              </li>
              <li>
                <Link to="/services">Sports Massage</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Specialized Services */}
        {/* <div className="footer-column">
          <h3>Signature Services</h3>
        </div> */}

        {/* Contact Info */}
        <div className="footer-column">
          <h3>Get in Touch</h3>
          <div className="contact-info">
            <div className="contact-item">
              <i className="fas fa-map-marker-alt"></i>
              <div>
                <p>
                  <strong>Dubai Location</strong>
                </p>
                <p>
                  SHOP #6. GROUND FLOOR,
                  <br />
                  THE METROPOLIS TOWER,
                  <br />
                  NEAR BURJ KHALIFA,
                  <br />
                  BUSINESS DAY,
                  <br />
                  DOWNTOWN DUBAI
                </p>
              </div>
            </div>
            <div className="contact-item">
              <i className="fas fa-phone"></i>
              <div>
                <p>
                  <strong>Call Us</strong>
                </p>
                <p>+971 55610 6417</p>
              </div>
            </div>
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <div>
                <p>
                  <strong>Email</strong>
                </p>
                <p>wishahspa1@gmail.com</p>
              </div>
            </div>
            <div className="contact-item">
              <i className="fas fa-clock"></i>
              <div>
                <p>
                  <strong>Hours</strong>
                </p>
                <p>24 / 7 </p>
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
