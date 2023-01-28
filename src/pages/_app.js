import "/styles/globals.scss";
import { AnchorProvider } from "@/contexts/anchor";

const Portfolio = ({ Component, pageProps }) => {
  return (
    <AnchorProvider>
      <Component {...pageProps} />
    </AnchorProvider>
  );
};

export default Portfolio;
