import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import Navigation from "../components/Navigation/Navigation";
import { Page } from "../types";
import Footer from "../components/Footer/Footer";

type Props = AppProps & {
  Component: Page;
};

function MyApp({ Component, pageProps }: Props) {
  const getLayout =
    Component.getLayout ||
    ((page) => (
      <>
        <SessionProvider session={pageProps.session}>
          <Navigation />
          {page}
          <Footer />
        </SessionProvider>
      </>
    ));
  return getLayout(<Component {...pageProps} />);
}

export default MyApp;
