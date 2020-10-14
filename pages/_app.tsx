import NextNprogress from "nextjs-progressbar";
import "./styles/main.scss";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      {" "}
      <NextNprogress
        color="aqua"
        startPosition="0.3"
        stopDelayMs="200"
        height="3"
      />
      <Component {...pageProps} />
    
    </>
  );
}
