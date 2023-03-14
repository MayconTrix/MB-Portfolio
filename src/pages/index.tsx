import { About } from "@/components/About";
import { Head } from "@/components/Head";
import { Skills } from "@/components/Skills";
import { Box, Flex } from "@chakra-ui/react";

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
    </Box>
  );
}
