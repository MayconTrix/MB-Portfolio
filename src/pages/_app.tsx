import { MainLayout } from "@/layouts/MainLayout";
import { theme } from "@/styles/theme";
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import type { AppProps } from "next/app";

import Aos from "aos";
import "aos/dist/aos.css";
import "atropos/css";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  });

  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </ChakraProvider>
  );
}
