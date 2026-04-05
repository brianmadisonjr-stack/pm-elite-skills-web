const modules = [
  {
    title: "01 · Diagnostic ignition",
    body: "Baseline quiz + confidence survey produce a personalized sprint plan.",
    bullets: [
      "Domain depth radar",
      "Auto-generated sprint mix",
      "Exam booking guidance",
    ],
  },
  {
    title: "02 · Concept refresh",
    body: "Micro-lessons and scenario walkthroughs to plug theory gaps fast.",
    bullets: [
      "Bite-size explainers",
      "Application prompts",
      "Downloadable quick sheets",
    ],
  },
  {
    title: "03 · Speed sprints",
    body: "Timed drills, keyboard shortcuts, and pacing alerts to drive execution.",
    bullets: [
      "5/15/50 question sets",
      "Auto-flag risky habits",
      "Reflection journal",
    ],
  },
  {
    title: "04 · Simulation & readiness",
    body: "Full-length exam, variance analysis, and go/no-go report.",
    bullets: [
      "Difficulty mixing engine",
      "Score deltas & pacing",
      "Readiness certificate",
    ],
  },
];

const weeklyTempo = [
  {
    week: "1",
    focus: "Diagnostic + plan",
    assets: "Baseline quiz, sprint mix",
    insight: "Domain radar, priority list",
  },
  {
    week: "2",
    focus: "Concept refresh",
    assets: "Micro-lessons, scenario labs",
    insight: "Concept mastery score",
  },
  {
    week: "3",
    focus: "Speed sprints",
    assets: "Timed drills, pacing alerts",
    insight: "Pacing heat map",
  },
  {
    week: "4",
    focus: "Simulation",
    assets: "Full-length exam + review",
    insight: "Readiness report + booking cue",
  },
];

const outputs = [
  "Adaptive sprint plan (PDF + CSV)",
  "Question rationale archive",
  "Pacing + accuracy snapshots",
  "Readiness probability report",
  "Stakeholder summary for managers",
  "Next-best-action recommendations",
];

export default function CurriculumPage() {
  return (
    <>
      <section className="page-hero">
        <div className="shell">
          <p className="eyebrow">Curriculum</p>
          <h1>Built for speed: four phases that move you from baseline to booked exam.</h1>
          <p>
            Every module blends content refreshers with data-driven practice so you spend time only on
            what moves your score.
          </p>
          <div className="hero-actions">
            <span className="badge">Original PMI-style content</span>
            <span className="badge">Adaptive pathing</span>
            <button className="btn secondary">Download syllabus</button>
          </div>
        </div>
      </section>

      <section>
        <div className="shell">
          <div className="section-head">
            <p className="eyebrow">Modules</p>
            <h2>Each module tightens accuracy and pacing.</h2>
          </div>
          <div className="module-grid">
            {modules.map((module) => (
              <article key={module.title} className="module-card">
                <h3>{module.title}</h3>
                <p>{module.body}</p>
                <ul>
                  {module.bullets.map((bullet) => (
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
          <div className="section-head">
            <p className="eyebrow">Weekly tempo</p>
            <h2>What the accelerated plan looks like.</h2>
          </div>
          <table className="timeline-table">
            <thead>
              <tr>
                <th>Week</th>
                <th>Focus</th>
                <th>Practice assets</th>
                <th>Insights delivered</th>
              </tr>
            </thead>
            <tbody>
              {weeklyTempo.map((week) => (
                <tr key={week.week}>
                  <td>{week.week}</td>
                  <td>{week.focus}</td>
                  <td>{week.assets}</td>
                  <td>{week.insight}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <div className="shell">
          <div className="section-head">
            <p className="eyebrow">Outputs</p>
            <h2>What you export at every stage.</h2>
          </div>
          <ul className="list-check">
            {outputs.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="cta">
        <div className="shell">
          <div className="cta-card">
            <div>
              <p className="eyebrow">Need a syllabus?</p>
              <h2>Share your exam target and we’ll send the detailed curriculum.</h2>
              <p>Perfect for PMOs and enablement teams evaluating a rapid prep rollout.</p>
            </div>
            <form className="cta-form">
              <label>
                Exam
                <select>
                  <option>PMP</option>
                  <option>PMI-ACP</option>
                  <option>PgMP</option>
                  <option>Disciplined Agile</option>
                </select>
              </label>
              <label>
                Planned start
                <input type="month" />
              </label>
              <label>
                Work email
                <input type="email" placeholder="ops@company.com" />
              </label>
              <button className="btn primary" type="submit">
                Send curriculum
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
