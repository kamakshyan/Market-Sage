import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import LoadingBar from "react-top-loading-bar";
import { useState,useEffect } from "react";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const [progress, setProgress] = useState(0);
  const router = useRouter();
  
  useEffect(() => {
    router.events.on("routeChangeComplete", () => setProgress(100));
    router.events.on("routeChangeStart", () => setProgress(40));
  });
  return (
    <>
      <LoadingBar
        color="#fc0356"
        waitingTime={500}
        progress={progress}
        height={4}
        onLoaderFinished={() => setProgress(0)}
      />
      <Component {...pageProps} />
    </>
  );
}
