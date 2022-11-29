import { supabase } from "./services/supabse";

// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export async function middleware(req: NextRequest) {
  // We need to create a response and hand it to the supabase client to be able to modify the response headers.
  const res = NextResponse.next();
  // Check if we have a session
  const {
    data: { session },
  } = await supabase.auth.getSession();

  console.log(session);
  // Check auth condition
  if (session?.user.email) {
    // Authentication successful, forward request to protected route.
    return res;
  }

  // Auth condition not met, redirect to home page.
  const redirectUrl = req.nextUrl.clone();
  redirectUrl.pathname = "/";
  redirectUrl.searchParams.set(`redirectedFrom`, req.nextUrl.pathname);
  return NextResponse.redirect(redirectUrl);
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/classroom/:path*"],
};
