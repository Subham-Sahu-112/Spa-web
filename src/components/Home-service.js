import { useState } from "react";

export default function HomeService() {
  const [activeCategory, setActiveCategory] = useState("all");

  const services = [
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
    {
      id: 5,
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
      id: 6,
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
      id: 7,
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
      id: 8,
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

  const service2 = [
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

  const filteredServices =
    activeCategory === "all"
      ? services
      : services.filter((service) => service.category === activeCategory);

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
          {filteredServices.map((service) => (
            <div key={service.id} className="service-card">
              <div className="card-image">
                <img src={service.image} alt={service.name} />
                <div className="card-overlay">
                  <div className="overlay-content">
                    <h4>Benefits</h4>
                    <ul>
                      {service.benefits.map((benefit, index) => (
                        <li key={index}>{benefit}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="card-content">
                <div className="card-header">
                  <h3>{service.name}</h3>
                </div>
                <p className="description">{service.description}</p>
                <span
                  className="book-btn"
                  onClick={() => handleQuickWhatsApp()}
                >
                  <i className="fas fa-calendar-alt"></i>
                  Book Now
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="services-grid service2-grid">
          {service2.map((service) => (
            <div key={service.id} className="service-card">
              <div className="card-image">
                <img src={service.image} alt={service.name} />
                <div className="card-overlay">
                  <div className="overlay-content">
                    <h4>Benefits</h4>
                    <ul>
                      {service.benefits.map((benefit, index) => (
                        <li key={index}>{benefit}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="card-content">
                <div className="card-header">
                  <h3>{service.name}</h3>
                </div>
                <p className="description">{service.description}</p>
                <span
                  className="book-btn"
                  onClick={() => handleQuickWhatsApp()}
                >
                  <i className="fas fa-calendar-alt"></i>
                  Book Now
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
