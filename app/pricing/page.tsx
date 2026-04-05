const tiers = [
  {
    title: "Tier 1 · Solo Velocity",
    price: "$99",
    subtitle: "/month",
    note: "3-month minimum",
    bullets: [
      "Practice Lab + simulations",
      "Readiness dashboard for one user",
      "Email support",
    ],
    cta: "Start solo plan",
  },
  {
    title: "Tier 2 · Team Momentum",
    price: "$79",
    subtitle: "/seat · month",
    note: "Minimum 10 seats · billed monthly",
    bullets: [
      "Manager analytics + alerts",
      "Slack/Teams notifications",
      "Dedicated success manager",
    ],
    cta: "Book team demo",
  },
  {
    title: "Tier 3 · Enterprise Command",
    price: "Custom subscription",
    subtitle: "",
    note: "Annual commitment",
    bullets: [
      "Unlimited seats",
      "Data warehouse + API feeds",
      "Executive program design",
    ],
    cta: "Talk to sales",
  },
];

const addOnContent = [
  {
    title: "Content Boost",
    items: [
      "Industry-specific question packs",
      "Extra simulations per month",
      "Audio + flashcard companions",
    ],
  },
  {
    title: "Insight Boost",
    items: [
      "Custom dashboards + APIs",
      "Exec-ready reporting cadence",
      "Live office-hour bundle",
    ],
  },
];

const included = [
  "Original PMI-style question bank",
  "Practice Lab (precision drills + simulations)",
  "Readiness probability + pacing analytics",
  "Automated reminders + goal tracking",
  "Exportable reports for stakeholders",
  "Secure Supabase/Postgres backend",
];

export default function PricingPage() {
  return (
    <>
      <section className="page-hero">
        <div className="shell">
          <p className="eyebrow">Subscription tiers</p>
          <h1>Pick the tier that matches your exam velocity goals.</h1>
          <p>All tiers include the adaptive practice engine, readiness analytics, and live performance alerts.</p>
        </div>
      </section>

      <section>
        <div className="shell">
          <div className="module-grid">
            {tiers.map((tier) => (
              <article key={tier.title} className="module-card">
                <h3>{tier.title}</h3>
                <p className="metric">
                  {tier.price}
                  {tier.subtitle && <span className="label">{tier.subtitle}</span>}
                </p>
                <p className="label">{tier.note}</p>
                <ul>
                  {tier.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
                <button className="btn primary" type="button">
                  {tier.cta}
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="shell">
          <div className="section-head">
            <p className="eyebrow">Included in every tier</p>
            <h2>No add-on required for exam-ready performance.</h2>
          </div>
          <ul className="list-check">
            {included.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section>
        <div className="shell">
          <div className="section-head">
            <p className="eyebrow">Add-on modules</p>
            <h2>Upgrade your subscription whenever you need.</h2>
          </div>
          <div className="split-panel">
            {addOnContent.map((addOn) => (
              <div key={addOn.title}>
                <h3>{addOn.title}</h3>
                <ul className="list-check">
                  {addOn.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="shell">
          <div className="cta-card">
            <div>
              <p className="eyebrow">Need invoicing?</p>
              <h2>Request a subscription quote.</h2>
              <p>Send your seat count and target start date. We’ll reply with pricing worksheets and contract terms.</p>
            </div>
            <form className="cta-form">
              <label>
                Tier of interest
                <select>
                  <option>Tier 1 · Solo Velocity</option>
                  <option>Tier 2 · Team Momentum</option>
                  <option>Tier 3 · Enterprise Command</option>
                </select>
              </label>
              <label>
                Seats
                <input type="number" placeholder="25" />
              </label>
              <label>
                Work email
                <input type="email" placeholder="you@company.com" />
              </label>
              <button className="btn primary" type="submit">
                Request quote
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
