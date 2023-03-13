import { About } from "@/components/About";
import { Flex } from "@chakra-ui/react";

export default function Home() {
  return (
    <Flex
      backgroundColor="red.100"
      direction="column"
      maxWidth="144rem"
      margin="0 auto"
      width="100%"
      height="100vh"
    >
      <About />
    </Flex>
  );
}
