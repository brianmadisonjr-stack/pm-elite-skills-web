'use client';

import { FormEvent, useState } from "react";
import { createSupabaseBrowserClient } from "@/lib/supabase/client";

export default function SignInPage() {
  const supabase = createSupabaseBrowserClient();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!supabase) {
      setStatus("Supabase environment variables are not configured yet.");
      return;
    }

    setStatus("Sending magic link...");
    const { error } = await supabase.auth.signInWithOtp({ email });

    if (error) {
      setStatus(error.message);
    } else {
      setStatus("Check your inbox for a login link.");
      setEmail("");
    }
  };

  return (
    <section className="page-hero">
      <div className="shell">
        <p className="eyebrow">Sign in</p>
        <h1>Access your PM Elite Skills dashboard.</h1>
        <p>Enter your work email and we’ll send a magic link to authenticate with Supabase.</p>
        <form className="cta-form" onSubmit={handleSubmit} style={{ maxWidth: "420px" }}>
          <label>
            Work email
            <input
              type="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="you@company.com"
            />
          </label>
          <button className="btn primary" type="submit">
            Send magic link
          </button>
          {status && <p>{status}</p>}
        </form>
      </div>
    </section>
  );
}
