import { useState } from "react";
import "../Styles/pages/Contact.css";
import Header from "../components/Header";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    massageService: "",
    message: "",
  });
  
  const [showOptions, setShowOptions] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // WhatsApp number (replace with your actual WhatsApp business number)
  const whatsappNumber = "971556106417"; // Replace with your actual number

  const massageOptions = [
    "Moroccan Bath With Massage",
    "Jacuzzi Bath With Massage",
    "Full Body Oil Massage",
    "Thai Massage",
    "Deep Tissue Massage",
    "Couple Massages",
    "Aromatherapy Treatment",
    "Four Hands Massage",
    "Hot Oil Massage",
    "Sports Massage",
    "Prenatal Massage",
    "Reflexology"
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleServiceSelect = (service) => {
    setFormData(prev => ({
      ...prev,
      massageService: service
    }));
    setShowOptions(false);
  };

  const generateWhatsAppMessage = () => {
    let message = "🌸 *WISHASH SPA - Booking Request* 🌸\n\n";
    
    message += `👤 *Name:* ${formData.fullName}\n`;
    message += `📧 *Email:* ${formData.email}\n`;
    message += `📱 *Phone:* ${formData.phone}\n`;
    
    if (formData.massageService) {
      message += `💆‍♀️ *Requested Service:* ${formData.massageService}\n`;
    }
    
    if (formData.message) {
      message += `💬 *Special Requests:*\n${formData.message}\n`;
    }
    
    message += `\n📅 I would like to book an appointment at your earliest convenience.\n`;
    message += `🕐 Please let me know your available time slots.\n\n`;
    message += `Thank you! 🙏`;
    
    return encodeURIComponent(message);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic form validation
    if (!formData.fullName || !formData.email || !formData.phone) {
      alert("Please fill in all required fields (Name, Email, and Phone).");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);
    
    // Simulate a brief loading time for better UX
    setTimeout(() => {
      const whatsappMessage = generateWhatsAppMessage();
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
      
      // Open WhatsApp in a new tab/window
      window.open(whatsappUrl, '_blank');
      
      // Reset form after successful submission
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        massageService: "",
        message: "",
      });
      
      setIsSubmitting(false);
      
      // Show success message
      alert("Redirecting to WhatsApp! Please send the message to complete your booking request.");
    }, 1500);
  };

  // Quick WhatsApp button for immediate contact
  const handleQuickWhatsApp = () => {
    const quickMessage = encodeURIComponent("Hello! I'm interested in booking a spa appointment at Wishash Spa. Could you please help me with the available services and time slots?");
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${quickMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="contact-page">
      <Header />
      
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="hero-content">
          <h1>Get in Touch</h1>
          <p>Ready to experience ultimate relaxation? Contact us to book your perfect spa journey.</p>
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

                <a href="mailto:wishahspa1@gmail.com" className="contact-method">
                  <div className="method-icon">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="method-info">
                    <span className="method-label">Email Us</span>
                    <span className="method-value">wishahspa1@gmail.com</span>
                  </div>
                </a>

                <button onClick={handleQuickWhatsApp} className="contact-method whatsapp quick-whatsapp-btn">
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
                    <span className="location-address">SHOP #6. GROUND FLOOR,<br/>THE METROPOLIS TOWER,<br/>NEAR BURJ KHALIFA,<br/>BUSINESS DAY, DOWNTOWN DUBAI</span>
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

          {/* Contact Form */}
          <div className="contact-form-section">
            <div className="form-card">
              <div className="form-header">
                <h2>Book via WhatsApp</h2>
                <p>Fill out the form below and we'll redirect you to WhatsApp to complete your booking instantly!</p>
                <div className="whatsapp-indicator">
                  <i className="fab fa-whatsapp"></i>
                  <span>Instant booking via WhatsApp</span>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-section">
                  <h3 className="section-title">
                    <i className="fas fa-user"></i>
                    Personal Information
                  </h3>
                  
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="fullName">Full Name *</label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="email">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="phone">Phone Number *</label>
                      <input
                        type="number"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Enter your phone number"
                        required
                      />
                    </div>
                    
                    <div className="form-group">
                      <label>Preferred Massage Service</label>
                      <div className="custom-dropdown">
                        <div 
                          className="dropdown-header"
                          onClick={() => setShowOptions(!showOptions)}
                        >
                          <span>{formData.massageService || "Select your preferred service"}</span>
                          <i className={`fas fa-chevron-down ${showOptions ? 'rotate' : ''}`}></i>
                        </div>
                        
                        {showOptions && (
                          <div className="dropdown-options">
                            {massageOptions.map((option, index) => (
                              <div
                                key={index}
                                className="dropdown-option"
                                onClick={() => handleServiceSelect(option)}
                              >
                                {option}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="form-section">
                  <h3 className="section-title">
                    <i className="fas fa-comment"></i>
                    Additional Information
                  </h3>
                  
                  <div className="form-group">
                    <label htmlFor="message">Special Requests or Questions</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about any specific needs, preferences, or questions you have..."
                      rows="5"
                    />
                  </div>
                </div>

                <div className="form-actions">
                  <button 
                    type="submit" 
                    className={`submit-btn whatsapp-submit ${isSubmitting ? 'loading' : ''}`}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <i className="fas fa-spinner fa-spin"></i>
                        Preparing WhatsApp...
                      </>
                    ) : (
                      <>
                        <i className="fab fa-whatsapp"></i>
                        Book via WhatsApp
                      </>
                    )}
                  </button>
                  
                  <p className="whatsapp-note">
                    <i className="fas fa-info-circle"></i>
                    You'll be redirected to WhatsApp with your booking details pre-filled
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
