import { Link } from "react-router-dom";

import "../Styles/components/Message.css";

export default function Message() {
  return (
    <div className="message">
      <div className="message-box">
        <h1 className="msg-1">
          Best Spa in Dubai - Authentic Massage Treatments
        </h1>
        <hr />
        <h3>Nothing Our Massage Can't Cure</h3>
        <p>
          If you're searching for the best spa in Dubai, look no further than
          Wishah Spa — a luxurious wellness retreat nestled in the heart of
          Business Bay, just steps from the iconic Burj Khalifa. Wishah Spa
          offers a serene escape from the city's hustle, providing a full range
          of premium massage therapies and spa experiences designed to
          rejuvenate your body and calm your mind. Known for its warm ambiance,
          spotless private rooms.The spa stands out as a preferred destination
          for both men, women, and couples seeking relaxation or therapeutic
          care. Our international team of skilled therapists, hailing from
          countries like Thailand, Morocco, India, and Vietnam, bring authentic
          healing techniques to every treatment, from full-body oil massages to
          Moroccan baths, Jacuzzi therapies, Thai massages, and deep tissue
          relief. For couples, we offer exclusive private suites with attached
          showers, perfect for shared moments of bliss. Clients love Wishah Spa
          not only for the personalized care and exceptional hygiene, but also
          for the central location. Come and discover a space where luxury meets
          comfort, and every detail is designed to help you relax, recharge,
          and feel your best.
        </p>
        <h2 className="msg-2">Timings: 24/7</h2>
        <Link to='/about-us' className="discover-more-link">
          <button type="button" className="discover-more-btn">
            DISCOVER MORE
          </button>
        </Link>
      </div>
      <div className="msg-img">
        {/* eslint-disable-next-line jsx-a11y/alt-text */}
        <img src="/images/interior.jpg" alt="Spa interior" />
      </div>
    </div>
  );
}
