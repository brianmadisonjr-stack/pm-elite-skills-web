const signals = [
  {
    title: "Readiness index",
    bullets: [
      "Accuracy × pace × confidence",
      "Auto alerts when learners hit target probability",
      "Recommended exam dates",
    ],
  },
  {
    title: "Domain radar",
    bullets: [
      "Heat map by PMI domain/process group",
      "Suggested drill packs per domain",
      "Historical trendlines",
    ],
  },
  {
    title: "Speed + focus",
    bullets: [
      "Avg. seconds/question per type",
      "Flagged distractions and second-guessing",
      "Pace recommendations per sprint",
    ],
  },
];

const metrics = [
  { value: "62%", label: "Practice sessions meeting pace goals" },
  { value: "+18 pts", label: "Avg. score delta after 2 weeks" },
  { value: "37", label: "Learners exam-ready this month" },
  { value: "8:1", label: "Practice hrs → pass ratio" },
];

const integrations = [
  { title: "Supabase/Postgres", body: "Secure backend with row-level security for all learner data." },
  { title: "Enablement tools", body: "Push readiness updates to Slack, Teams, or email digests." },
  { title: "BI & warehouse", body: "APIs + CSV exports for Snowflake, PowerBI, Tableau." },
  { title: "Exam scheduling", body: "Webhooks to trigger booking workflows once thresholds hit." },
];

export default function AnalyticsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="shell">
          <p className="eyebrow">Analytics</p>
          <h1>Live readiness intelligence for teams and solo learners.</h1>
          <p>
            Dashboards combine accuracy, pace, and confidence signals so you always know who is ready to
            sit for the exam—and who needs more reps.
          </p>
          <div className="hero-actions">
            <span className="badge">Pass probability engine</span>
            <span className="badge">Exports + APIs</span>
            <button className="btn secondary">View sample dashboard</button>
          </div>
        </div>
      </section>

      <section>
        <div className="shell">
          <div className="section-head">
            <p className="eyebrow">Signals</p>
            <h2>Metrics that matter.</h2>
          </div>
          <div className="crm-grid">
            {signals.map((signal) => (
              <article key={signal.title} className="crm-card">
                <h3>{signal.title}</h3>
                <ul>
                  {signal.bullets.map((bullet) => (
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
            <p className="eyebrow">Dashboards</p>
            <h2>Snapshots you can ship to leadership.</h2>
          </div>
          <div className="crm-metrics">
            {metrics.map((metric) => (
              <div key={metric.label} className="metric-card">
                <p className="metric">{metric.value}</p>
                <p className="label">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="shell">
          <div className="section-head">
            <p className="eyebrow">Integrations</p>
            <h2>Share insights wherever you work.</h2>
          </div>
          <div className="module-grid">
            {integrations.map((item) => (
              <article key={item.title} className="module-card">
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="shell">
          <div className="cta-card">
            <div>
              <p className="eyebrow">Insights demo</p>
              <h2>See your data in our dashboards.</h2>
              <p>We’ll load anonymized sample data or your own CSV to illustrate how it works.</p>
            </div>
            <form className="cta-form">
              <label>
                Data source
                <select>
                  <option>Supabase</option>
                  <option>CSV export</option>
                  <option>Other LMS</option>
                </select>
              </label>
              <label>
                Org size
                <input type="number" placeholder="150" />
              </label>
              <label>
                Contact
                <input type="email" placeholder="ops@company.com" />
              </label>
              <button className="btn primary" type="submit">
                Book analytics demo
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
