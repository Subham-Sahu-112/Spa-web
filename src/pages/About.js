import Header from "../components/Header";
import Footer from '../components/Footer'
import "../Styles/pages/About.css";

export default function About() {
  return (
    <div className="about-page">
      <Header />

      {/* Header */}
      <section className="about-img">
        <div className="hero-content">
          <img src="/images/Store.jpg" />
        </div>
      </section>

      <div className="about-hero">
        <div className="hero-content">
          <h1 style={{fontSize: '2.5rem'}}>About Us</h1>
        </div>
      </div>

      <div className="about-content">
        <p>
          Discover True Relaxation in the Heart of Dubai At Wishah Spa, we
          believe that wellness is not a luxury — it's a lifestyle. Located just
          moments away from the iconic Burj Khalifa in Business Bay, our spa is
          a peaceful escape from the hustle of city life. Designed with
          elegance, calm, and comfort in mind, Wishah Spa offers a sanctuary
          where your mind unwinds and your body finds the healing it deserves.
        </p>
        <h2 style={{ width: "90%", textAlign: "start" }}>Who We Are ?</h2>
        <p>
          Wishah Spa was born from a passion to create a truly holistic wellness
          experience — one that combines ancient healing traditions with modern
          luxury. With a curated team of professional therapists from around the
          world — including Thailand, Morocco, India, Vietnam, Russia, and
          beyond — we offer authentic, culturally inspired massage techniques
          delivered with care and expertise.
        </p>
        <div className="ofr">
          <h2>What We Offer ?</h2>
          <p>
            Our service menu includes a variety of premium treatments tailored
            to your unique needs: &nbsp;
            <br />
            &nbsp;
            <br />
            &rarr; Moroccan Bath With Massage
            <br />
            &rarr; Jacuzzi Bath with Massage
            <br />
            &rarr; Full Body Oil Massage
            <br />
            &rarr; Thai Traditional Massage
            <br />
            &rarr; Deep Tissue Massage
            <br />
            &rarr; Four Hands Massage
            <br />
            &rarr; Couple Massages (with private suites & attached showers)
            <br />
            &rarr; Aromatherapy treatment
            <br />
            &rarr; Hot Oil Massage
            <br />
            &rarr; Shaving &nbsp;
            <br />
            &nbsp;
            <br />
            Each session at Wishah Spa is thoughtfully designed to promote deep
            relaxation, improve circulation, release tension, and revive your
            energy — whether you're looking to de-stress after a long workday or
            indulge in a luxurious weekend treat.
          </p>
        </div>

        <div className="ofr">
          <h2>Why Clients Love Us</h2>
          <p>
            ✔ Internationally Trained & Certified Staff
            <br />
            ✔ Spa-Like Ambience with Private, Hygienic Suites
            <br />
            ✔ Personalized Treatments for Men, Women & Couples
            <br />
            ✔ Premium Oils, Natural Ingredients & Signature Rituals
            <br />✔ Centrally Located Near Major Dubai Landmarks
          </p>
          <br /><br />
          <p>
            We welcome busy professionals, residents, and tourists alike to
            experience the calming world of Wishah Spa. Whether you visit for a
            quick recharge or an extended wellness session, our goal remains the
            same — to leave you feeling lighter, brighter, and truly cared for.<br /><br />
            Our Philosophy At Wishah Spa, every touch is meaningful, every
            detail is intentional, and every guest is special. We are committed
            to providing not just a service, but a journey — one that reconnects
            you with your body, mind, and inner peace.<br /><br />Come experience Dubai’s
            most relaxing wellness retreat. Wishah Spa – Where
            Tranquility Begins.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
