import { Link } from "react-router-dom";
import '../Styles/components/Book-now.css'

export default function BookNow() {

  const whatsappNumber = "971556106417";

  const handleQuickWhatsApp = () => {
    const quickMessage = encodeURIComponent(
      "Hello! I'm interested in booking a spa appointment at Wishah Spa. Could you please help me with the available services and time slots?"
    );
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${quickMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="book-now">
        <span onClick={() => handleQuickWhatsApp()} className="book-now-btn span-btn">Book Now</span>
        <span onClick={() => handleQuickWhatsApp()} className="book-whatsapp-link">
          <i className="fab fa-whatsapp"></i>
        </span>
    </div>
  );
}
