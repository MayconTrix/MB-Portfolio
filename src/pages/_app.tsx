import { MainLayout } from "@/layouts/MainLayout";
import { theme } from "@/styles/theme";
import { ChakraProvider, ColorModeProvider, CSSReset } from "@chakra-ui/react";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
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
