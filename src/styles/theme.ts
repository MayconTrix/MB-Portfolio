import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    gray: {
      "50": "#",
      "100": "#A0AEC0",
      "600": "#4A5568",
      "700": "#2D3748",
      "800": "#1A202C",
      "900": "#0C4A6E",
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
        background: "#262c38",
        color: "gray.400",
        boxSizing: "border-box",
        padding: 0,
        margin: 0,
        WebkitFontSmoothing: "antialiased",
        MozOsxFontSmoothing: "grayscale",
        scrollBehavior: "smooth",
        scrollbarWidth: "thin",
        scrollbarColor: "#a0aec0",
      },
      body: {
        maxWidth: "100vw",
        overFlowX: "hidden",
        fontSize: "1.6rem",
      },
      "body::-webkit-scrollbar": {
        width: "0.7rem",
      },
      "body::-webkit-scrollbar-track": {
        background: "#a0aec0",
      },
      "body::-webkit-scrollbar-thumb": {
        backgroundColor: "#4a5568",
        borderRadius: "0.4rem",
      },
    },
  },
});

// export const COLORS = {
//   STRONG: ["gray.300", "gray.800"],
//   WEAK: ["gray.500", "gray.600"],
// };

// export const ICON_COLORS = ["#A0AEC0", "#718096"];
