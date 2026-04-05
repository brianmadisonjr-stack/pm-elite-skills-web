import Link from "next/link";
import { ProgressRing } from "@/components/ProgressRing";

const heroRings = [
  { value: 88, label: "Pass prob", sublabel: "88%" },
  { value: 72, label: "Speed", sublabel: "72%" },
];

const pillars = [
  {
    title: "Adaptive Practice Engine",
    body: "Original PMI-style questions that recalibrate difficulty after every attempt.",
    bullets: ["Scenario + calc mode", "Focus on weak domains", "Inline rationales"],
  },
  {
    title: "Speed Sprints",
    body: "High-tempo drills, timed micro-exams, and precision feedback to build pace.",
    bullets: ["5, 15, 50-question sprints", "Keyboard shortcuts + flags", "Reflection prompts"],
  },
  {
    title: "Readiness Analytics",
    body: "Live dashboards that blend accuracy, speed, and confidence to signal when to schedule.",
    bullets: ["Pass probability alerts", "Domain mastery radar", "Trend exports for managers"],
  },
];

const timeline = [
  {
    week: "Week 01",
    title: "Baseline + plan",
    copy: "Diagnostics, score targets, and personalized sprint plan.",
  },
  {
    week: "Week 02",
    title: "Speed Sprints",
    copy: "Micro exams + performance coaching loops.",
  },
  {
    week: "Week 03",
    title: "Adaptive exam sets",
    copy: "Full-length simulations with domain recommendations.",
  },
  {
    week: "Week 04",
    title: "Readiness review",
    copy: "Score delta, pacing, and analytics report to green-light booking.",
  },
];

const testimonials = [
  {
    quote:
      "The practice engine surfaced pacing issues we didn’t know existed. We cut PMP prep time by 40% without sacrificing quality.",
    name: "Rana P. · PMO Director",
  },
  {
    quote:
      "Readiness alerts told us exactly when to schedule exams. Everyone who hit 85% on their dashboard passed on the first try.",
    name: "Leo G. · Enablement Lead",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="hero" id="top">
        <div className="shell">
          <div className="hero-copy">
            <p className="eyebrow">PM Elite Skills</p>
            <h1>Crush PMI exams faster with adaptive practice + live analytics.</h1>
            <p>
              Skip the fluff. PM Elite Skills combines high-velocity drills, original PMI-style questions,
              and readiness analytics so you know exactly when to book your exam.
            </p>
            <div className="hero-cta">
              <button className="btn primary">Launch practice plan</button>
              <Link className="btn secondary" href="/practice">
                See question engine
              </Link>
            </div>
            <div className="trust-grid">
              <div>
                <p className="metric">4.2 wks</p>
                <p className="label">Average time to exam day</p>
              </div>
              <div>
                <p className="metric">1.8M</p>
                <p className="label">Questions served</p>
              </div>
              <div>
                <p className="metric">94%</p>
                <p className="label">Pass after readiness alert</p>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="panel progress-card">
              <div className="card-head">
                <p>Readiness Control Center</p>
                <span>Next checkpoint: Precision Sprint</span>
              </div>
              <div className="progress-rings">
                {heroRings.map((ring) => (
                  <ProgressRing key={ring.label} {...ring} />
                ))}
              </div>
              <div className="timeline-mini">
                <div className="step active">
                  <span>Week 1</span>
                  <p>Baseline sprint</p>
                </div>
                <div className="step active">
                  <span>Week 2</span>
                  <p>Precision drills</p>
                </div>
                <div className="step">
                  <span>Week 3</span>
                  <p>Adaptive exam set</p>
                </div>
                <div className="step">
                  <span>Week 4</span>
                  <p>Readiness review</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pillars" id="value">
        <div className="shell">
          <div className="section-head">
            <p className="eyebrow">Value pillars</p>
            <h2>Speed-first practice, data-backed insights, exam-ready confidence.</h2>
            <p>Every feature exists to shorten the path from study session to passing score.</p>
          </div>
          <div className="grid">
            {pillars.map((pillar) => (
              <article key={pillar.title} className="card">
                <h3>{pillar.title}</h3>
                <p>{pillar.body}</p>
                <ul>
                  {pillar.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="timeline">
        <div className="shell">
          <div className="section-head">
            <p className="eyebrow">Acceleration Path</p>
            <h2>Four-week readiness roadmap.</h2>
          </div>
          <ol className="timeline-track">
            {timeline.map((item) => (
              <li key={item.week}>
                <span>{item.week}</span>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="testimonials" id="results">
        <div className="shell">
          <div className="section-head">
            <p className="eyebrow">Results</p>
            <h2>Teams use the data to move fast.</h2>
          </div>
          <div className="carousel">
            {testimonials.map((testimonial) => (
              <article key={testimonial.name}>
                <p>“{testimonial.quote}”</p>
                <strong>{testimonial.name}</strong>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cta" id="cta">
        <div className="shell">
          <div className="cta-card">
            <div>
              <p className="eyebrow">Launch now</p>
              <h2>Start your accelerated practice plan.</h2>
              <p>Pick your exam, share your target date, and we’ll activate the adaptive plan instantly.</p>
            </div>
            <form className="cta-form">
              <label>
                Exam target
                <select>
                  <option>PMP</option>
                  <option>PMI-ACP</option>
                  <option>PgMP</option>
                  <option>Disciplined Agile</option>
                </select>
              </label>
              <label>
                Target date
                <input type="date" />
              </label>
              <label>
                Email
                <input type="email" placeholder="you@company.com" />
              </label>
              <button className="btn primary" type="submit">
                Get started
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
