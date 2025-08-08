import { Link } from 'react-router-dom';
import '../Styles/components/Staffs.css'

export default function Staffs() {
  const staffMembers = [
    { image: "/images/Indonesian.jpg", nationality: "Indonesian", speciality: "Traditional Massage" },
    { image: "/images/phillipines.jpg", nationality: "Philippines", speciality: "Deep Tissue Massage" },
    { image: "/images/Vietnam.jpeg", nationality: "Vietnam", speciality: "Aromatherapy" },
    { image: "/images/Malesiyan.webp", nationality: "Malaysian", speciality: "Hot Stone Therapy" },
    { image: "/images/Indian.jpg", nationality: "Indian", speciality: "Ayurvedic Massage" },
    { image: "/images/Thai.jpg", nationality: "Thai", speciality: "Thai Traditional Massage" },
    { image: "/images/moroccan.jpg", nationality: "Moroccan", speciality: "Moroccan Bath" },
    { image: "/images/Russian.jpg", nationality: "Russian", speciality: "Sports Massage" }
  ];

  return (
    <section className='staff-section'>
      <div className="staff-container">
        <div className="staff-header">
          <h2>Meet Our Expert Therapists</h2>
          <p>Our international team of certified massage therapists brings authentic techniques from around the world</p>
        </div>
        
        <div className="staff-grid">
          {staffMembers.map((staff, index) => (
            <div key={index} className="staff-card">
              <div className="staff-image-container">
                <img src={staff.image} alt={`${staff.nationality} therapist`} />
                <div className="staff-overlay">
                  <div className="staff-info">
                    <h4>{staff.nationality}</h4>
                    <p>{staff.speciality}</p>
                    <button className="learn-more-btn">
                      <i className="fas fa-info-circle"></i>
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
              <div className="staff-details">
                <h3>{staff.nationality} Therapist</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="staff-cta">
          <h3>Book Your Preferred Therapist</h3>
          <p>Experience authentic treatments from our skilled international team</p>
          <Link to="/contact-us" className="book-therapist-btn">
            Book Appointment
            <i className="fas fa-calendar-alt"></i>
          </Link>
        </div>
      </div>
    </section>
  );
}
