import Award from "../components/Award";
import Staffs from "../components/Staffs";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
// import Location from "../components/Location";
import Message from "../components/Message";
import "../Styles/components/Header.css";
import HomeService from "../components/Home-service";

export default function Home() {
  return (
    <div className="home">
      <Header />
      <Hero />
      <Message />
      <Award />
      <HomeService />
      <Staffs />
      <Footer />
    </div>
  );
}
