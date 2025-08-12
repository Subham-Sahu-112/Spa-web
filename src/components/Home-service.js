import { useState } from "react";

export default function HomeService() {
  const [activeCategory, setActiveCategory] = useState("all");

  const service1 = [
    {
      id: 1,
      name: "Moroccan Bath With Massage",
      category: "signature",
      image: "/images/spa1.png",
      duration: "90 mins",
      price: "From AED 250",
      description:
        "Traditional Moroccan cleansing ritual combined with relaxing massage for ultimate purification and relaxation.",
      benefits: [
        "Deep cleansing",
        "Skin exfoliation",
        "Stress relief",
        "Improved circulation",
      ],
    },
    {
      id: 2,
      name: "Couple Massages",
      category: "signature",
      image: "/images/spa2.png",
      duration: "60-90 mins",
      price: "From AED 500",
      description:
        "Share a relaxing experience with your partner in our luxurious couples massage suite.",
      benefits: [
        "Bonding experience",
        "Stress relief",
        "Quality time",
        "Romantic atmosphere",
      ],
    },
    {
      id: 3,
      name: "Jacuzzi Bath With Massage",
      category: "luxury",
      image: "/images/spa3.png",
      duration: "120 mins",
      price: "From AED 350",
      description:
        "Indulge in a warm jacuzzi bath followed by a soothing full-body massage.",
      benefits: [
        "Muscle relaxation",
        "Improved circulation",
        "Stress relief",
        "Luxury experience",
      ],
    },
    {
      id: 4,
      name: "Aromatherapy Treatment",
      category: "wellness",
      image: "/images/spa4.png",
      duration: "75 mins",
      price: "From AED 200",
      description:
        "Therapeutic massage using essential oils to balance mind, body, and spirit.",
      benefits: [
        "Mental clarity",
        "Emotional balance",
        "Improved sleep",
        "Natural healing",
      ],
    },
  ];

  const service2 = [
    {
      id: 1,
      name: "Deep Tissue Massage",
      category: "therapeutic",
      image: "/images/spa5.png",
      duration: "60-90 mins",
      price: "From AED 180",
      description:
        "Intensive massage targeting deep muscle layers to relieve chronic pain and tension.",
      benefits: [
        "Pain relief",
        "Muscle recovery",
        "Improved mobility",
        "Tension release",
      ],
    },
    {
      id: 2,
      name: "Thai Massage",
      category: "traditional",
      image: "/images/sppa7.jpg",
      duration: "90 mins",
      price: "From AED 220",
      description:
        "Ancient Thai healing technique combining acupressure, stretching, and energy work.",
      benefits: [
        "Flexibility improvement",
        "Energy boost",
        "Pain relief",
        "Mental clarity",
      ],
    },
    {
      id: 3,
      name: "Four Hands Massage",
      category: "luxury",
      image: "/images/spa8.webp",
      duration: "60-90 mins",
      price: "From AED 400",
      description:
        "Ultimate luxury experience with two therapists working in synchronized harmony.",
      benefits: [
        "Deep relaxation",
        "Luxury experience",
        "Full body treatment",
        "Stress relief",
      ],
    },
    {
      id: 4,
      name: "Hot Oil Massage",
      category: "traditional",
      image: "/images/spa6.jpg",
      duration: "75 mins",
      price: "From AED 160",
      description:
        "Nourishing massage with warm herbal oils to moisturize skin and relax muscles.",
      benefits: [
        "Skin nourishment",
        "Muscle relaxation",
        "Improved circulation",
        "Stress relief",
      ],
    },
  ];

  const service3 = [
    {
      id: 9,
      name: "Full Body Oil Massage",
      category: "wellness",
      image: "/images/full_body_oil_massage.jpg",
      duration: "90 mins",
      price: "From AED 190",
      description:
        "Complete body massage with premium oils for total relaxation and rejuvenation.",
      benefits: [
        "Full body relaxation",
        "Skin hydration",
        "Stress relief",
        "Improved sleep",
      ],
    },
    {
      id: 10,
      name: "Shaving",
      category: "wellness",
      image: "/images/spa9.jpg",
      duration: "90 mins",
      price: "From AED 190",
      description:
        "Complete body massage with premium oils for total relaxation and rejuvenation.",
      benefits: [
        "Smooth, Clean Finish",
        "Pre & Post-Shave Skincare",
        "Relaxation + Stress Relief",
        "Improves Skin Texture",
      ],
    },
  ];

  return (
    <div
      className="home-service"
      style={{
        margin: "5rem 0",
      }}
    >
      <div className="services-container">
        <div className="section-header">
          <h2>Luxury Spa at Your Doorstep</h2>
          <p>
            Why travel, when pure relaxation can come to you? Experience our
            premium spa treatments in the comfort of your own home.
          </p>
        </div>
      </div>
      <div className="services-container">
        <div className="section-header">
          <h2>Explore Our Services</h2>
          <p>
            Choose from our comprehensive range of therapeutic and relaxation
            treatments
          </p>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          <div className="service-card">
            <div className="home-service-img">
              <img src="/images/spa1.png" alt="Moroccan Bath With Massage" />
              <div className="card-overlay">
                <div className="overlay-content">
                  <h4>Benefits</h4>
                  <ul>
                    <li>Deep cleansing</li>
                    <li>Skin exfoliation</li>
                    <li>Stress relief</li>
                    <li>Improved circulation</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="card-content">
              <div className="card-header">
                <h3>Moroccan Bath With Massage</h3>
              </div>
              <p className="description ist">
                Traditional Moroccan cleansing ritual combined with relaxing
                massage for ultimate purification and relaxation.
              </p>
              <span className="book-btn" onClick={() => handleQuickWhatsApp()}>
                <i className="fas fa-calendar-alt"></i>
                Book Now
              </span>
            </div>
          </div>
          <div className="service-card">
            <div className="home-service-img">
              <img src="/images/spa2.png" alt="Couple Massages" />
              <div className="card-overlay">
                <div className="overlay-content">
                  <h4>Benefits</h4>
                  <ul>
                    <li>Bonding experience</li>
                    <li>Stress relief</li>
                    <li>Quality time</li>
                    <li>Romantic atmosphere</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="card-content">
              <div className="card-header">
                <h3>Couple Massages</h3>
              </div>
              <p className="description">
                Share a relaxing experience with your partner in our luxurious couples massage suite.
              </p>
              <span className="book-btn" onClick={() => handleQuickWhatsApp()}>
                <i className="fas fa-calendar-alt"></i>
                Book Now
              </span>
            </div>
          </div>
          <div className="service-card">
            <div className="home-service-img">
              <img src="/images/spa3.png" alt="Jacuzzi Bath With Massage" />
              <div className="card-overlay">
                <div className="overlay-content">
                  <h4>Benefits</h4>
                  <ul>
                    <li>Muscle relaxation</li>
                    <li>Stress relief</li>
                    <li>Improved circulation</li>
                    <li>Luxury experience</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="card-content">
              <div className="card-header">
                <h3>Jacuzzi Bath With Massage</h3>
              </div>
              <p className="description">
                Indulge in a warm jacuzzi bath followed by a soothing full-body massage.
              </p>
              <span className="book-btn" onClick={() => handleQuickWhatsApp()}>
                <i className="fas fa-calendar-alt"></i>
                Book Now
              </span>
            </div>
          </div>
          <div className="service-card">
            <div className="home-service-img">
              <img src="/images/spa4.png" alt="Aromatherapy Treatment" />
              <div className="card-overlay">
                <div className="overlay-content">
                  <h4>Benefits</h4>
                  <ul>
                    <li>Mental clarity</li>
                    <li>Emotional balance</li>
                    <li>Improved circulation</li>
                    <li>Improved sleep</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="card-content">
              <div className="card-header">
                <h3>Aromatherapy Treatment</h3>
              </div>
              <p className="description">
                Therapeutic massage using essential oils to balance mind, body, and spirit.
              </p>
              <span className="book-btn" onClick={() => handleQuickWhatsApp()}>
                <i className="fas fa-calendar-alt"></i>
                Book Now
              </span>
            </div>
          </div>
        </div>

        <div className="services-grid">
          <div className="service-card">
            <div className="home-service-img">
              <img src="/images/spa5.png" alt="Deep Tissue Massage" />
              <div className="card-overlay">
                <div className="overlay-content">
                  <h4>Benefits</h4>
                  <ul>
                    <li>Pain relief</li>
                    <li>Muscle recovery</li>
                    <li>Improved mobility</li>
                    <li>Tension release</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="card-content">
              <div className="card-header">
                <h3>Deep Tissue Massage</h3>
              </div>
              <p className="description">
                Intensive massage targeting deep muscle layers to relieve chronic pain and tension.
              </p>
              <span className="book-btn" onClick={() => handleQuickWhatsApp()}>
                <i className="fas fa-calendar-alt"></i>
                Book Now
              </span>
            </div>
          </div>
          <div className="service-card">
            <div className="home-service-img">
              <img src="/images/sppa7.jpg" alt="Thai Massage" />
              <div className="card-overlay">
                <div className="overlay-content">
                  <h4>Benefits</h4>
                  <ul>
                    <li>Flexibility improvement</li>
                    <li>Energy boost</li>
                    <li>Pain relief</li>
                    <li>Mental clarity</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="card-content">
              <div className="card-header">
                <h3>Thai Massage</h3>
              </div>
              <p className="description">
                Ancient Thai healing technique combining stretching, and energy work.
              </p>
              <span className="book-btn" onClick={() => handleQuickWhatsApp()}>
                <i className="fas fa-calendar-alt"></i>
                Book Now
              </span>
            </div>
          </div>
          <div className="service-card">
            <div className="home-service-img">
              <img src="/images/spa8.webp" alt="Four Hands Massage" />
              <div className="card-overlay">
                <div className="overlay-content">
                  <h4>Benefits</h4>
                  <ul>
                    <li>Deep relaxation</li>
                    <li>Luxury experience</li>
                    <li>Full body treatment</li>
                    <li>Luxury experience</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="card-content">
              <div className="card-header">
                <h3>Four Hands Massage</h3>
              </div>
              <p className="description">
                Ultimate luxury experience with two therapists working in synchronized harmony.
              </p>
              <span className="book-btn" onClick={() => handleQuickWhatsApp()}>
                <i className="fas fa-calendar-alt"></i>
                Book Now
              </span>
            </div>
          </div>
          <div className="service-card">
            <div className="home-service-img">
              <img src="/images/spa6.jpg" alt="Hot Oil Massage" />
              <div className="card-overlay">
                <div className="overlay-content">
                  <h4>Benefits</h4>
                  <ul>
                    <li>Skin nourishment</li>
                    <li>Muscle relaxation</li>
                    <li>Improved circulation</li>
                    <li>Improved sleep</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="card-content">
              <div className="card-header">
                <h3>Hot Oil Massage</h3>
              </div>
              <p className="description">
                Nourishing massage with warm herbal oils to moisturize skin and relax muscles.
              </p>
              <span className="book-btn" onClick={() => handleQuickWhatsApp()}>
                <i className="fas fa-calendar-alt"></i>
                Book Now
              </span>
            </div>
          </div>
        </div>

        <div className="services-grid service-grid-2">
          <div className="service-card">
            <div className="home-service-img">
              <img src="/images/full_body_oil_massage.jpg" alt="Full Body Oil Massage" />
              <div className="card-overlay">
                <div className="overlay-content">
                  <h4>Benefits</h4>
                  <ul>
                    <li>Full body relaxation</li>
                    <li>Skin hydration</li>
                    <li>Stress relief</li>
                    <li>Improved sleep</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="card-content">
              <div className="card-header">
                <h3>Full Body Oil Massage</h3>
              </div>
              <p className="description">
                Complete body massage with premium oils for total relaxation and rejuvenation.
              </p>
              <span className="book-btn" onClick={() => handleQuickWhatsApp()}>
                <i className="fas fa-calendar-alt"></i>
                Book Now
              </span>
            </div>
          </div>
          <div className="service-card">
            <div className="home-service-img">
              <img src="/images/spa9.jpg" alt="Shaving" />
              <div className="card-overlay">
                <div className="overlay-content">
                  <h4>Benefits</h4>
                  <ul>
                    <li>Smooth, Clean Finish</li>
                    <li>Pre & Post-Shave Skincare</li>
                    <li>Relaxation + Stress Relief</li>
                    <li>Improves Skin Texture</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="card-content">
              <div className="card-header">
                <h3>Shaving</h3>
              </div>
              <p className="description">
                Complete body massage with premium oils for total relaxation and rejuvenation.
              </p>
              <span className="book-btn" onClick={() => handleQuickWhatsApp()}>
                <i className="fas fa-calendar-alt"></i>
                Book Now
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
