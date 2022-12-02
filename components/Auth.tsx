import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { supabase } from "../services/supabase";
export default function Auth({ children }: React.PropsWithChildren) {
  const router = useRouter();
  useEffect(() => {
    const getSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      if (session) {
        if (!router.pathname.startsWith("/u/")) {
          router.push("/u/dashboard");
          return;
        }
      } else {
        if (router.pathname.startsWith("/u/")) {
          router.push("/");
        }
      }
    };
    getSession();
  }, []);

  return <>{children}</>;
}
