import type { NextPage } from "next";
import { useRouter } from "next/router";
import type { AppProps } from "next/app";
import { Montserrat } from "@next/font/google";
import type { ReactElement, ReactNode } from "react";

import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css"; //icons
import "/node_modules/primeflex/primeflex.css";
import "../styles/layout.css";
import "../styles/reset_css_browser.css";

import { supabase } from "../services/supabase";
import { SessionContextProvider, Session } from "@supabase/auth-helpers-react";

import Auth from "../components/Auth";
import LayoutLogged from "../components/LayoutLogged";

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
  initialSession: Session;
};
const font = Montserrat({});

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const router = useRouter();
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <SessionContextProvider
      supabaseClient={supabase}
      initialSession={pageProps.initialSession}
    >
      {router.pathname.startsWith("/u/") ? (
        <LayoutLogged>
          <Auth>
            <Component {...pageProps} />
          </Auth>
        </LayoutLogged>
      ) : (
        <Auth>{getLayout(<Component {...pageProps} />)}</Auth>
      )}
    </SessionContextProvider>
  );
}
