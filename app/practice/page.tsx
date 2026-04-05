const modes = [
  {
    title: "Precision Drills",
    body: "5–15 question bursts to fix one concept or formula.",
    bullets: [
      "Instant rationales + citations",
      "Difficulty auto-shifts",
      "Shareable recap cards",
    ],
  },
  {
    title: "Speed Sprints",
    body: "Timed 50-question sets tuned to PMP, PMI-ACP, PgMP, or Disciplined Agile.",
    bullets: [
      "Keyboard-first controls",
      "Live pacing meter",
      "Stress prompts to mimic exam",
    ],
  },
  {
    title: "Full Simulation",
    body: "Complete exam experience with flag/review workflow and break timers.",
    bullets: [
      "Auto-mixed domains",
      "Environmental controls",
      "Report exports for teams",
    ],
  },
];

const questionBank = [
  "Scenario, calc, drag-and-drop styles",
  "Metadata: domain, process group, mindset",
  "A/B tested difficulty levels",
];

const correctionLoop = [
  "Rationales + PMBOK/Agile references",
  "Replay mode for mistakes only",
  "Reflection prompts that sync to analytics",
];

const practiceTestimonials = [
  {
    quote:
      "Precision drills shaved 18 minutes off my mock exam. I only practiced the questions the analytics told me to.",
    name: "Casey D. · Senior PM",
  },
  {
    quote:
      "Practice Lab felt more intense than the actual PMP exam. When test day arrived, my pace was automatic.",
    name: "Ian M. · Program Lead",
  },
];

export default function PracticePage() {
  return (
    <>
      <section className="page-hero">
        <div className="shell">
          <p className="eyebrow">Practice Lab</p>
          <h1>Fast, brutal, data-rich exam simulations.</h1>
          <p>
            PM Elite Skills Practice Lab recreates PMI exam pressure with adaptive question sets, timers,
            and proctor-style environments. Analytics surface pace, accuracy, and mindset so you can correct immediately.
          </p>
          <div className="hero-actions">
            <span className="badge">Timed + untimed modes</span>
            <span className="badge">Scenario + calculation question types</span>
            <button className="btn secondary">Preview exam mode</button>
          </div>
        </div>
      </section>

      <section>
        <div className="shell">
          <div className="section-head">
            <p className="eyebrow">Engines</p>
            <h2>Practice Lab modes.</h2>
          </div>
          <div className="module-grid">
            {modes.map((mode) => (
              <article key={mode.title} className="module-card">
                <h3>{mode.title}</h3>
                <p>{mode.body}</p>
                <ul>
                  {mode.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="shell">
          <div className="split-panel">
            <div>
              <h3>Question bank</h3>
              <p>Every item is authored by PMI-certified SMEs and tagged exhaustively.</p>
              <ul className="list-check">
                {questionBank.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3>Correction loop</h3>
              <p>Missed questions become mini-lessons, not shame.</p>
              <ul className="list-check">
                {correctionLoop.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="shell">
          <div className="section-head">
            <p className="eyebrow">Proof</p>
            <h2>Learners get faster within days.</h2>
          </div>
          <div className="carousel">
            {practiceTestimonials.map((testimonial) => (
              <article key={testimonial.name}>
                <p>“{testimonial.quote}”</p>
                <strong>{testimonial.name}</strong>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="shell">
          <div className="cta-card">
            <div>
              <p className="eyebrow">Try it</p>
              <h2>Schedule a live walkthrough of Practice Lab.</h2>
              <p>We’ll run a mini exam set with your team and show the analytics instantly.</p>
            </div>
            <form className="cta-form">
              <label>
                Team size
                <input type="number" placeholder="10" />
              </label>
              <label>
                Preferred date
                <input type="date" />
              </label>
              <label>
                Email
                <input type="email" placeholder="enablement@company.com" />
              </label>
              <button className="btn primary" type="submit">
                Book session
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
