import { cookies } from "next/headers";
import { createServerClient } from "@supabase/auth-helpers-nextjs";
import type { Database } from "@/types/supabase";
import type { CookieOptions } from "@supabase/auth-helpers-nextjs";

export async function createSupabaseServerClient() {
  const cookieStore = await cookies();
  const mutableCookies = cookieStore as unknown as {
    set?: (name: { name: string; value: string } & CookieOptions) => void;
    delete?: (options: { name: string } & CookieOptions) => void;
  };

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !anonKey) {
    return null;
  }

  return createServerClient<Database>(url, anonKey, {
    cookies: {
      get(name) {
        return cookieStore.get(name)?.value;
      },
      set(name, value, options) {
        mutableCookies.set?.({ name, value, ...options });
      },
      remove(name, options) {
        mutableCookies.delete?.({ name, ...options });
      },
    },
  });
}
