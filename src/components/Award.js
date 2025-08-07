import { Link } from "react-router-dom";
import "../Styles/components/Award.css";

export default function Award() {
  return (
    <section className="award-section">
      {/* Promotional Banner */}
      <div className="promo-banner">
        <div className="promo-content">
          <div className="promo-text">
            <h2>Wishash Platinum Spa Now Open in Abu Dhabi</h2>
            <p>Experience luxury wellness at our newest location</p>
          </div>
          <div className="promo-action">
            <Link to="/contact-us" className="book-now-btn">
              Book Now
              <i className="fas fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </div>

      {/* Awards Section */}
      <div className="awards-showcase">
        <div className="awards-container">
          <h3>Our Achievements & Recognition</h3>
          <div className="awards-grid">
            <div className="award-item">
              <img src="/images/award1.jpg" alt="TripAdvisor Travellers' Choice Awards Winner 2024" />
              <p>TripAdvisor Winner 2024</p>
            </div>
            <div className="award-item">
              <img src="/images/award2.jpg" alt="Top Massage Spa in Dubai 2023" />
              <p>Top Massage Spa 2023</p>
            </div>
            <div className="award-item">
              <img src="/images/award3.jpg" alt="Luxury Spa Award 2023" />
              <p>Luxury Spa Award 2023</p>
            </div>
            <div className="award-item">
              <img src="/images/award4.png" alt="Arabian Best of Best Awards 2023" />
              <p>Best of Best 2023</p>
            </div>
          </div>
        </div>
      </div>

      {/* Services for Men and Women */}
      <div className="services-gender">
        <div className="service-card women-service">
          <div className="service-overlay">
            <div className="service-content">
              <h3>Massage for Women</h3>
              <p>Relaxing treatments designed specifically for women's wellness needs</p>
              <Link to="/services" className="service-link">
                Explore Services
                <i className="fas fa-arrow-right"></i>
              </Link>
            </div>
          </div>
          <img src="/images/women.jpg" alt="Massage services for women" />
        </div>
        
        <div className="service-card men-service">
          <div className="service-overlay">
            <div className="service-content">
              <h3>Massage for Men</h3>
              <p>Therapeutic treatments tailored for men's specific health and wellness requirements</p>
              <Link to="/services" className="service-link">
                Explore Services
                <i className="fas fa-arrow-right"></i>
              </Link>
            </div>
          </div>
          <img src="/images/men.jpg" alt="Massage services for men" />
        </div>
      </div>
    </section>
  );
}
