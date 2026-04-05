import { createSupabaseServerClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const supabase = await createSupabaseServerClient();

  if (!supabase) {
    redirect("/sign-in");
  }

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/sign-in");
  }

  return (
    <section className="page-hero">
      <div className="shell">
        <p className="eyebrow">Dashboard</p>
        <h1>Welcome back, {user.email}</h1>
        <p>
          This protected space will eventually show live readiness analytics, cohort-wide trends, and
          shortcuts into the Practice Lab.
        </p>
      </div>
    </section>
  );
}
