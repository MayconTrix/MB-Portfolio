import { Metadata } from "next";

export const generalMetadata: Metadata = {
  metadataBase: new URL("https://mbportfolio.vercel.app/"),
  title: "MB Portfólio",
  description: "Frontend & UI/UX Design",
  applicationName: "MB Portfólio",
  abstract: "Bem vindo ao MB Portfólio.",
  authors: [
    {
      name: "Maycon Batista",
      url: "https://mbportfolio.vercel.app/",
    },
  ],
  openGraph: {
    type: "website",
    url: "https://mbportfolio.vercel.app/",
    siteName: "MB Portfólio",
    images: [
      {
        url: "/MyPortfolioCapa.png",
        width: "1200px",
        height: "630px",
        alt: "MB Portfólio",
      },
    ],
  },
  category: "Front-end e Design",
  viewport: "width=device-width, initial-scale=1.0",
  robots: "index, follow",
};
