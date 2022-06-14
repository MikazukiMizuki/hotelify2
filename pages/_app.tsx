import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import type { AppProps } from "next/app";
import Navigation from "../components/Navigation/Navigation";
import { Page } from "../types";
import Footer from "../components/Footer/Footer";
import { UserProvider } from "@auth0/nextjs-auth0";

type Props = AppProps & {
  Component: Page;
};

function MyApp({ Component, pageProps }: Props) {
  
  const getLayout =
    Component.getLayout ||
    ((page) => (
      <UserProvider>
        <Navigation />
        <Component {...pageProps} />
        <Footer />
      </UserProvider>
    ));
  return getLayout(
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  );
}

export default MyApp;
