import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          {/* CLIENT: Replace hero headline/subtext */}
          <h1>Sound That Moves You</h1>
          <p>
            Premium audio equipment, expert repairs, and honest service —
            all in one place.
          </p>
          <div className="hero-buttons">
            <Link to="/products" className="btn btn-primary">
              Shop Products
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              Book a Service
            </Link>
          </div>
        </div>
        {/* CLIENT: Replace with hero image */}
        <div className="hero-image-placeholder">Hero Image Here</div>
      </section>

      <section className="intro-section">
        <div className="intro-grid">
          <div className="intro-card">
            <h3>🎧 Sales</h3>
            <p>
              Headphones, speakers, amps, and more from trusted brands.
              {/* CLIENT: Replace copy */}
            </p>
          </div>
          <div className="intro-card">
            <h3>🔧 Repairs</h3>
            <p>
              Certified technicians fixing your gear with genuine parts.
              {/* CLIENT: Replace copy */}
            </p>
          </div>
          <div className="intro-card">
            <h3>⭐ Trusted</h3>
            <p>
              Years of experience serving audio enthusiasts in the area.
              {/* CLIENT: Replace copy */}
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home