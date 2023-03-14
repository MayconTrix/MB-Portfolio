import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Flex } from "@chakra-ui/react";

export default function Home() {
  return (
    <Flex
      direction="column"
      maxWidth="144rem"
      margin="0 auto"
      width="100%"
      backgroundColor="gray.900"
    >
      <About />
      <Skills />
    </Flex>
  );
}
