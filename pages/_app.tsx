import type { AppProps } from "next/app";

import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css"; //icons
import "/node_modules/primeflex/primeflex.css";
import "../styles/layout.css";
import { Montserrat } from '@next/font/google'

const font = Montserrat({})

export default function App({ Component, pageProps }: AppProps) {
  return (
  <div className={font.className}> 
  <Component {...pageProps} />
  </div>);
}
