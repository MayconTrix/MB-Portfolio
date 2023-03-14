import { About } from "@/components/About";
import { Flex } from "@chakra-ui/react";

export default function Home() {
  return (
    <Flex
      direction="column"
      maxWidth="144rem"
      margin="0 auto"
      width="100%"
      height="100vh"
      backgroundColor="gray.900"
    >
      <About />
      <About />
      <About />
    </Flex>
  );
}
