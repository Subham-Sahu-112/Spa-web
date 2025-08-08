import { Link } from "react-router-dom";

import 'swiper/css';
import 'swiper/css/autoplay';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import "../Styles/components/Award.css";

export default function Award() {
  const images = [
    {
      src: "/images/award1.jpg",
      alt: "TripAdvisor Travellers' Choice Awards Winner 2024",
      label: "TripAdvisor Winner 2024",
    },
    {
      src: "/images/award2.jpg",
      alt: "Top Massage Spa in Dubai 2023",
      label: "Top Massage Spa 2023",
    },
    {
      src: "/images/award3.jpg",
      alt: "Luxury Spa Award 2023",
      label: "Luxury Spa Award 2023",
    },
    {
      src: "/images/award4.png",
      alt: "Arabian Best of Best Awards 2023",
      label: "Best of Best 2023",
    },
  ];

  return (
    <section className="award-section">
      {/* Promotional Banner */}
      <div className="promo-banner">
        <div className="promo-content">
          <div className="promo-text">
            <h2>Wishah Massage Spa Now Open in Dubai</h2>
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

      {/* Services for Men and Women */}
      <div className="services-gender">
        <div className="service-card women-service">
          <div className="service-overlay">
            <div className="service-content">
              <h3>Massage for Men & Women</h3>
              <p>
                Relaxing treatments designed specifically for men & women's wellness
                needs
              </p>
              <Link to="/services" className="service-link">
                Explore Services
                <i className="fas fa-arrow-right"></i>
              </Link>
            </div>
          </div>
          <img className="women" src="/images/women.jpg" alt="Massage services for women" />
          <img className="men" src="/images/men.jpg" alt="Massage services for men" />
        </div>

        <div className="service-card men-service">
          <div className="service-overlay">
            <div className="service-content">
              <h3>Massage for Couple</h3>
              <p>
                Rejuvenating spa experiences thoughtfully designed for couples
                to relax, reconnect, and restore harmony together
              </p>
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
