import type { AppProps } from "next/app";

import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css"; //icons
import "/node_modules/primeflex/primeflex.css";
import "../styles/layout.css";
import "../styles/reset_css_browser.css";

import { SessionContextProvider, Session } from "@supabase/auth-helpers-react";
import { supabase } from "../services/supabse";
interface TypeAppProps {
  initialSession: Session;
}

export default function App({ Component, pageProps }: AppProps<TypeAppProps>) {
  return (
    <SessionContextProvider
      supabaseClient={supabase}
      initialSession={pageProps.initialSession}
    >
      <Component {...pageProps} />
    </SessionContextProvider>
  );
}
