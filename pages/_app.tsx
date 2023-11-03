import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import LoadingBar from "react-top-loading-bar";
import { useState,useEffect } from "react";
import { useRouter } from "next/router";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }: AppProps) {
  const [progress, setProgress] = useState(0);
  const router = useRouter();
  
  useEffect(() => {
    router.events.on("routeChangeComplete", () => setProgress(100));
    router.events.on("routeChangeStart", () => setProgress(40));
  });

  return (
    <>
    <ToastContainer
    position="bottom-right"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={true}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="dark"
    />
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
