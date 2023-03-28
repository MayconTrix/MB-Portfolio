import { MainLayout } from "@/layouts/MainLayout";
import { theme } from "@/styles/theme";
import { ChakraProvider, ColorModeProvider, CSSReset } from "@chakra-ui/react";
import type { AppProps } from "next/app";

import Aos from "aos";
import "atropos/css";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  });

  return (
    <ChakraProvider theme={theme}>
      <ColorModeProvider>
        <CSSReset />
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </ColorModeProvider>
    </ChakraProvider>
  );
}
