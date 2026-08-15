import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-container">

        {/* LEFT — YOUR STORY */}
        <div className="hero-content">

          <p className="hero-eyebrow">
            SOFTWARE ENGINEERING · AI · DATA
          </p>

          <h1 className="hero-title">
            POOJHA 
            <br/>
            <span><i>V R</i></span>
            
          </h1>

          <div className="hero-story">

            <p className="hero-role">
              Software Engineering Student
            </p>

            <p className="hero-description">
              I'm an Integrated M.Tech Software Engineering student
              at VIT, interested in building intelligent systems
              across software, data and AI.
            </p>

            <p className="hero-description secondary">
              I enjoy taking complex problems, breaking them down,
              and turning them into practical, reliable software.
            </p>

          </div>

          {/* ACTIONS */}
          <div className="hero-actions">

            <a href="#projects" className="hero-button primary">
              Explore Projects
              <span>↗</span>
            </a>

            <a
              href="/resume.pdf"
              download
              className="hero-button secondary"
            >
              Download Resume
              <span>↓</span>
            </a>

          </div>

        </div>


        {/* RIGHT — PHOTO */}
        <div className="hero-visual">

          <div className="hero-photo-wrapper">

            <div className="hero-photo">

              {/* Replace this placeholder with your photo later */}
              <div className="photo-placeholder">
                <span>YOUR PHOTO</span>
                <small>src/assets/profile.jpg</small>
              </div>

            </div>

            <div className="photo-caption">
              <span>POOJHA V R</span>
              <span>SOFTWARE ENGINEERING · VIT</span>
            </div>

          </div>


          {/* POPPED-UP NOTE */}
          <div className="hero-note">

            <div className="note-pin" />

            <p className="note-heading">
              CURRENTLY EXPLORING
            </p>

            <div className="note-list">
              <span>Backend</span>
              <span>Data Engineering</span>
              <span>AI / ML</span>
              <span>Cloud</span>
              <span>Systems</span>
            </div>

            <div className="note-arrow">
              ↗
            </div>

          </div>

        </div>

      </div>


      {/* BOTTOM */}
      <div className="hero-bottom">

        <div className="hero-scroll">
          <span className="scroll-line" />
          <span>SCROLL TO EXPLORE</span>
        </div>

        <div className="hero-location">
          VIT · INDIA
        </div>

        <a href="#about" className="hero-next">
          Continue
          <span>↓</span>
        </a>

      </div>

    </section>
  );
}