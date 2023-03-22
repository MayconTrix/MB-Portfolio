import { Box } from "@chakra-ui/react";
import { About } from "@/components/About";
import { Footer } from "@/components/Footer";
import { Head } from "@/components/Head";
import { Skills } from "@/components/Skills";
import { Portfolio } from "@/components/Portfolio";
import { Works } from "@/components/Works";

export default function Home() {
  return (
    <Box
      flexDirection="column"
      maxWidth="144rem"
      margin="0 auto"
      width="100%"
      backgroundColor="gray.900"
    >
      <Head />
      <About />
      <Skills />
      <Portfolio />
      <Works />
      <Footer />
    </Box>
  );
}
