import Award from "../components/Award";
import Staffs from "../components/Staffs";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
// import Location from "../components/Location";
import Message from "../components/Message";
import "../Styles/components/Header.css";
import HomeService from "../components/Home-service";
import BookNow from "../components/Book-now";
import '../Styles/components/Book-now.css';

export default function Home() {
  return (
    <>
      <Header />
        <span
          onClick={() => handleQuickWhatsApp()}
          className="book-now-btn span-btn"
        >
          Book Now
        </span>
        <span
          onClick={() => handleQuickWhatsApp()}
          className="book-whatsapp-link"
        >
          <i className="fab fa-whatsapp"></i>
        </span>
      <Hero />
      <Message />
      <Award />
      <HomeService />
      <Staffs />
      <Footer />
    </>
  );
}
