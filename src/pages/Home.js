import Award from "../components/Award";
import Discount from "../components/Staffs";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
// import Location from "../components/Location";
import Message from "../components/Message";
import '../Styles/components/Header.css'

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Message />
      <Award />
      <Discount />
      {/* <Location /> */}
      <Footer />
    </>
  );
}
