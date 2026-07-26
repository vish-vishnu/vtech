import './About.css'

function About() {
  return (
    <div className="about-page">
      <h1>About Us</h1>
      {/* CLIENT: Replace with real store story/history */}
      <p>
        Founded to bring quality audio equipment and honest, expert
        repair service to our community. We believe great sound
        shouldn't be complicated or overpriced.
      </p>

      <div className="about-grid">
        <div className="about-block">
          <h3>Our Mission</h3>
          <p>
            {/* CLIENT: Replace copy */}
            To provide reliable audio products and services with
            transparent pricing and expert care.
          </p>
        </div>
        <div className="about-block">
          <h3>Our Team</h3>
          <p>
            {/* CLIENT: Replace copy, add photos if wanted */}
            A group of passionate technicians and audio enthusiasts
            dedicated to getting your sound right.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About