import '../Styles/components/Location.css'

export default function Location() {
  return (
    <section className="location">
      <div className="location-container">
        <div className="location-item">
          <h2>Dubai Mall</h2>
          <a href='https://goo.gl/maps/dubai-mall' className="address-link" target="_blank" rel="noopener noreferrer">
            <p>Chinatown,</p>
            <p>Opposite The Food Court</p>
            <p>Dubai</p>
          </a>
          <p className="phone">
            <a href="tel:+97143299666">+971 4329 9666</a>
          </p>
        </div>

        <div className="location-item">
          <h2>Abu Dhabi</h2>
          <a href='https://goo.gl/maps/abu-dhabi' className="address-link" target="_blank" rel="noopener noreferrer">
            <p>The Galleria,</p>
            <p>Al Maryah Island</p>
            <p>Level 3</p>
          </a>
          <p className="phone">
            <a href="tel:+97125588860">+971 2558 8860</a>
          </p>
        </div>

        <div className="location-item">
          <h2>Al Safa, Al Wasl Road</h2>
          <a href='https://goo.gl/maps/al-safa' className="address-link" target="_blank" rel="noopener noreferrer">
            <p>Shop No 8 & 9,</p>
            <p>Al Ferdous 4,</p>
            <p>Dubai</p>
          </a>
          <p className="phone">
            <a href="tel:+97143588838">+971 4358 8838</a>
          </p>
        </div>

        <div className="location-item">
          <h2>The Village Mall</h2>
          <a href='https://goo.gl/maps/village-mall' className="address-link" target="_blank" rel="noopener noreferrer">
            <p>Jumeirah Road,</p>
            <p>1st Floor opp. Jumeirah Plaza,</p>
            <p>Dubai</p>
          </a>
          <p className="phone">
            <a href="tel:+97143855155">+971 4385 5155</a>
          </p>
        </div>

        <div className="location-item">
          <h2>JBR Walk</h2>
          <a href='https://goo.gl/maps/jbr-walk' className="address-link" target="_blank" rel="noopener noreferrer">
            <p>Sadaf 3 – Jumeirah Beach Residence,</p>
            <p>Suha Hotel Apartments, PL Floor</p>
            <p>Dubai</p>
          </a>
          <p className="phone">
            <a href="tel:+97144390111">+971 4439 0111</a>
          </p>
        </div>
      </div>
    </section>
  );
}
