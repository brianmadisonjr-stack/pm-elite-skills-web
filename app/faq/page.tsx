const faqs = [
  {
    question: "How fast can I be exam-ready?",
    answer: "Most learners hit readiness thresholds in 4–6 weeks using the accelerated plan.",
  },
  {
    question: "Is this self-paced?",
    answer: "Yes. The platform adapts to your schedule with reminders and analytics guiding the next step.",
  },
  {
    question: "What exams are supported?",
    answer: "PMP, PMI-ACP, PgMP, and Disciplined Agile certifications with original question banks.",
  },
  {
    question: "Can teams monitor progress?",
    answer: "Enablement dashboards show accuracy, pace, and readiness per learner plus exports.",
  },
  {
    question: "Do you offer corporate invoicing?",
    answer: "Yes—annual licenses or seat packs via PO, ACH, Square, or Stripe.",
  },
  {
    question: "Is live instruction included?",
    answer: "The focus is on practice + analytics. If you need instructor time, we can add office-hour packs.",
  },
];

const contactTopics = [
  "Corporate enablement rollout",
  "Individual learner access",
  "Content / SME partnerships",
  "Press & speaking",
];

export default function FAQPage() {
  return (
    <>
      <section className="page-hero">
        <div className="shell">
          <p className="eyebrow">FAQ & Contact</p>
          <h1>Everything you need to know about the fastest PMP / PMI prep workflow.</h1>
          <p>Still have questions? Reach out and we’ll respond within one business day.</p>
        </div>
      </section>

      <section>
        <div className="shell">
          <div className="section-head">
            <p className="eyebrow">Questions</p>
            <h2>Quick answers.</h2>
          </div>
          <div className="faq-grid">
            {faqs.map((faq) => (
              <article key={faq.question} className="faq-card">
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="shell">
          <div className="split-panel">
            <div>
              <h3>Contact us</h3>
              <p>Pick a track so we can route your message.</p>
              <ul className="list-check">
                {contactTopics.map((topic) => (
                  <li key={topic}>{topic}</li>
                ))}
              </ul>
              <p>
                Email: <strong>hello@pmeliteskills.com</strong>
              </p>
            </div>
            <div className="contact-card">
              <form>
                <label>
                  Name
                  <input type="text" placeholder="Jordan Madison" />
                </label>
                <label>
                  Email
                  <input type="email" placeholder="you@company.com" />
                </label>
                <label>
                  Topic
                  <select>
                    <option>Corporate enablement</option>
                    <option>Individual learner</option>
                    <option>Partner / SME</option>
                    <option>Media</option>
                  </select>
                </label>
                <label>
                  Message
                  <textarea placeholder="Tell us what you're solving for" />
                </label>
                <button className="btn primary" type="submit">
                  Send message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
