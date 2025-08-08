import { useState, useEffect } from "react";
import "../Styles/components/Hero.css";
import { Link } from "react-router-dom";

export default function Hero() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleVideoLoaded = () => {
    setIsVideoLoaded(true);
    setHasError(false);
  };

  const handleVideoError = () => {
    console.log("Video failed to load, falling back to image");
    setHasError(true);
    setIsVideoLoaded(false);
  };

  // Check if device supports video autoplay (mainly for mobile)
  const canAutoplay = !isMobile || navigator.userAgent.includes('Chrome');

  return (
    <div className="hero">
      <div className="hero-img">
        {!hasError ? (
          <video 
            autoPlay={canAutoplay}
            muted 
            loop 
            playsInline 
            preload={isMobile ? "none" : "metadata"}
            onLoadedData={handleVideoLoaded}
            onError={handleVideoError}
            className={`hero-video ${isVideoLoaded ? 'loaded' : ''}`}
            poster="/images/spa8.jpg" // Fallback image while loading
          >
            <source src="/videos/hero.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <img 
            src="/images/spa8.jpg" 
            alt="Wishash Spa Interior"
            loading="eager"
            className="hero-fallback-img"
          />
        )}
        
        {/* Show play button on mobile if video doesn't autoplay */}
        {isMobile && !hasError && (
          <div className="mobile-video-controls">
            <button 
              className="play-button"
              onClick={() => {
                const video = document.querySelector('.hero-video');
                if (video) {
                  if (video.paused) {
                    video.play();
                  } else {
                    video.pause();
                  }
                }
              }}
            >
              <i className="fas fa-play"></i>
            </button>
          </div>
        )}
        
        {/* Overlay gradient for better text readability */}
        <div className="hero-overlay"></div>
      </div>
      
      <div className="hero-text">
        <h1 className="txt-1" data-aos="fade-up">Wishah Spa</h1>
        <h1 className="txt-2" data-aos="fade-up" data-aos-delay="200">Now Open in Dubai</h1>
        <h1 className="txt-3" data-aos="fade-up" data-aos-delay="400">
          The Metropolis Tower - Ground Floor, Shop No - 6
        </h1>
        <span className="route" data-aos="fade-up" data-aos-delay="600">
          <h2>
            Massage that{" "}
            <span className="h2-txt" style={{ color: "#ff4444" }}>
              Cures
            </span>
          </h2>
          <Link className="cta-button" to="/contact-us">
            BOOK NOW
            <i className="fas fa-arrow-right"></i>
          </Link>
        </span>
      </div>
    </div>
  );
}
