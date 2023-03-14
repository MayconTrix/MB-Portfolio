import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    gray: {
      "50": "#",
      "100": "#A0AEC0",
      "600": "#4A5568",
      "700": "#2D3748",
      "800": "#1A202C",
      "900": "#171923",
    },
    cyan: {
      "50": "#EDFDFD",
      "100": "#C4F1F9",
      "200": "#9DECF9",
      "300": "#76E4F7",
      "400": "#0BC5EA",
      "500": "#00B5D8",
      "600": "#00A3C4",
      "700": "#0987A0",
      "800": "#086F83",
      "900": "#065666",
    },
  },
  sizes: {
    // ...theme.space,
    max: "max-content",
    min: "min-content",
    full: "100%",
    "3xs": "14rem",
    "2xs": "16rem",
    xs: "13.75rem",
    sm: "24rem",
    md: "28rem",
    lg: "32rem",
    xl: "36rem",
    "2xl": "42rem",
    "3xl": "48rem",
    "4xl": "56rem",
    "5xl": "64rem",
    "6xl": "72rem",
    "7xl": "80rem",
    "8xl": "90rem",
    container: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  fonts: {
    heading: "Roboto, sans-serif",
    body: "Roboto, sans-serif",
  },

  styles: {
    global: {
      html: {
        fontSize: "62.5%",
        color: "gray.400",
        boxSizing: "border-box",
        padding: 0,
        margin: 0,
        WebkitFontSmoothing: "antialiased",
        MozOsxFontSmoothing: "grayscale",
        scrollBehavior: "smooth",
        scrollbarWidth: "thin",
        scrollbarColor: "red",
      },
      body: {
        maxWidth: "100vw",
        overFlowX: "hidden",
        fontSize: "1.6rem",
        background: "gray.800",
      },
      "body::-webkit-scrollbar": {
        width: "1rem",
      },
      "body::-webkit-scrollbar-track": {
        background: "cyan.400",
      },
      "body::-webkit-scrollbar-thumb": {
        backgroundColor: "gray.900",
        borderRadius: "0.4rem",
      },
      "body::-webkit-scrollbar-thumb:hover": {
        backgroundColor: "gray.700",
        borderRadius: "0.4rem",
      },
    },
  },
});
