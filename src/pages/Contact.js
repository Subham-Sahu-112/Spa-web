import { useState, useEffect, useRef } from "react";

import "../Styles/pages/Contact.css";

import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";

import Header from "../components/Header";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet/dist/images/marker-shadow.png",
});
const defaultPosition = [25.1817041, 55.2736204];

export default function Contact() {
  const [position, setPosition] = useState(defaultPosition);
  const [loading, setLoading] = useState(true);
  const markerRef = useRef(null);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setPosition([pos.coords.latitude, pos.coords.longitude]);
          setLoading(false);
        },
        (err) => {
          console.error("Geolocation error:", err);
          setLoading(false); // fallback to default
        }
      );
    } else {
      console.log("Geolocation not available");
      setLoading(false); // fallback to default
    }
  }, []);

  function AutoOpenPopup({ markerRef }) {
    const map = useMap();
    useEffect(() => {
      if (markerRef.current) {
        markerRef.current.openPopup();
      }
    }, [map, markerRef]);
    return null;
  }

  const whatsappNumber = "971556106417";

  // Quick WhatsApp button for immediate contact
  const handleQuickWhatsApp = () => {
    const quickMessage = encodeURIComponent(
      "Hello! I'm interested in booking a spa appointment at Wishash Spa. Could you please help me with the available services and time slots?"
    );
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${quickMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="contact-page">
      <Header />

      {/* Hero Section */}
      <section className="contact-hero">
        <div className="hero-content">
          <h1>Get in Touch</h1>
          <p>
            Ready to experience ultimate relaxation? Contact us to book your
            perfect spa journey.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="contact-main">
        <div className="contact-container">
          {/* Contact Information */}
          <div className="contact-info-section">
            <div className="contact-card">
              <div className="card-header">
                <div className="card-icon">
                  <i className="fas fa-rocket"></i>
                </div>
                <h3>Quick Connect</h3>
              </div>

              <div className="contact-methods">
                <a href={`tel:+${whatsappNumber}`} className="contact-method">
                  <div className="method-icon">
                    <i className="fas fa-phone"></i>
                  </div>
                  <div className="method-info">
                    <span className="method-label">Call Now</span>
                    <span className="method-value">+971 556 106 417</span>
                  </div>
                </a>

                <a
                  href="mailto:wishahspa1@gmail.com"
                  className="contact-method"
                >
                  <div className="method-icon">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="method-info">
                    <span className="method-label">Email Us</span>
                    <span className="method-value">wishahspa1@gmail.com</span>
                  </div>
                </a>

                <button
                  onClick={handleQuickWhatsApp}
                  className="contact-method whatsapp quick-whatsapp-btn"
                >
                  <div className="method-icon">
                    <i className="fab fa-whatsapp"></i>
                  </div>
                  <div className="method-info">
                    <span className="method-label">WhatsApp</span>
                    <span className="method-value">Quick Response</span>
                  </div>
                </button>
              </div>
            </div>

            {/* Location Card */}
            <div className="contact-card location-card">
              <div className="card-header">
                <div className="card-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <h3>Our Location</h3>
              </div>

              <div className="location-info">
                <div className="location-item">
                  <div className="location-icon">
                    <i className="fas fa-map-pin"></i>
                  </div>
                  <div className="location-details">
                    <span className="location-name">Dubai Branch</span>
                    <span className="location-address">
                      SHOP #6. GROUND FLOOR,
                      <br />
                      THE METROPOLIS TOWER,
                      <br />
                      NEAR BURJ KHALIFA,
                      <br />
                      BUSINESS DAY, DOWNTOWN DUBAI
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="contact-card hours-card">
              <div className="card-header">
                <div className="card-icon">
                  <i className="fas fa-clock"></i>
                </div>
                <h3>Business Hours</h3>
              </div>

              <div className="hours-info">
                <div className="hours-item">
                  <span className="day">24 / 7 Daily</span>
                  {/* <span className="time">10:00 AM - 11:00 PM</span> */}
                </div>
                <div className="hours-note">
                  <i className="fas fa-info-circle"></i>
                  <span>Always open for your wellness needs</span>
                </div>
              </div>
            </div>
          </div>

          {/* Map Location */}
          <div className="map-section">
            <div style={{ height: "420px", width: "100%" }}>
              <MapContainer
                center={[25.1817041, 55.2736204]}
                zoom={13}
                scrollWheelZoom={false}
                style={{ height: "100%", width: "100%" }}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <Marker position={[25.1817041, 55.2736204]} ref={markerRef}>
                  <Popup autoClose={false} closeOnClick={false}>
                    1907 Burj Khalifa Blvd - Business Bay - Dubai - United Arab
                    Emirates
                  </Popup>
                </Marker>
                <AutoOpenPopup markerRef={markerRef} />
              </MapContainer>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-section">
            <div className="form-card">
              <div className="form-header">
                <h2>Book via WhatsApp</h2>
              </div>
              <div className="form-actions">
                <button
                  onClick={() => handleQuickWhatsApp()}
                  type="submit"
                  className="submit-btn whatsapp-submit"
                >
                  <i className="fab fa-whatsapp"></i>
                  Book via WhatsApp
                </button>

                <p className="whatsapp-note">
                  <i className="fas fa-info-circle"></i>
                  You'll be redirected to WhatsApp with your booking details
                  pre-filled
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
