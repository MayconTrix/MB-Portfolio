import { generalMetadata } from "@/constants/generalMetadata";
import { ColorModeScript, theme } from "@chakra-ui/react";
import { Html, Head, Main, NextScript } from "next/document";

export const metadata = generalMetadata;

export default function Document() {
  return (
    <Html lang="pt-br">
      <title>MB - Portfólio</title>
      <meta name="description" content="Portfólio de Maycon Batista."></meta>
      <meta
        name="keywords"
        content="Maycon Batista, Maycon, Batista, UI, UX, Design, frontend"
      ></meta>
      <link rel="shortcut icon" href="/favicon.png" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap"
        rel="stylesheet"
      />
      <Head />
      <body>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
