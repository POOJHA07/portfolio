import "./Achievements.css";

export default function Achievements() {
  const achievements = [
    {
      number: "01",
      title: "1st Place — Abacus",
      description: "Tamil Nadu + Puducherry",
    },
    {
      number: "02",
      title: "AWS Certified",
      description: "Cloud Practitioner",
    },
    {
      number: "03",
      title: "Patent / Publication",
      description: "Upiverse — Secured Offline UPI Payment Platform",
    },
    {
      number: "04",
      title: "Academic Excellence",
      description: "9th Rank · Software Engineering",
    },
  ];

  return (
    <section className="achievements" id="achievements">

      <div className="achievements-container">

        {/* HEADER */}
        <div className="achievements-header">

          <div>
            <p className="achievements-eyebrow">
              07 / ACHIEVEMENTS
            </p>

            <h2 className="achievements-title">
              Things I've
              <br />
              <span>earned along the way.</span>
            </h2>
          </div>

          <p className="achievements-intro">
            A few milestones, recognitions and moments
            that shaped my journey so far.
          </p>

        </div>


        {/* LIST */}
        <div className="achievements-list">

          {achievements.map((achievement) => (
            <article
              className="achievement-item"
              key={achievement.number}
            >

              <span className="achievement-number">
                {achievement.number}
              </span>

              <div className="achievement-content">

                <h3>
                  {achievement.title}
                </h3>

                <p>
                  {achievement.description}
                </p>

              </div>

              <span className="achievement-arrow">
                ↗
              </span>

            </article>
          ))}

        </div>


        {/* FOOTER */}
        <div className="achievements-footer">

          <span>
            MORE TO COME
          </span>

          <span className="achievements-line" />

          <span>
            2022 — 2027
          </span>

        </div>

      </div>

    </section>
  );
}