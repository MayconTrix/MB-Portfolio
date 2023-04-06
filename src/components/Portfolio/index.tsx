import { Box, Flex, Text, Link as ReachLink } from "@chakra-ui/react";
import PortfolioCard from "./components/PortfolioCard";

export function Portfolio() {
  return (
    <Flex
      id="Portfolio"
      marginTop="5rem"
      align="center"
      width="100%"
      direction="column"
      gap="3rem"
    >
      <Flex direction="column" alignItems="center" margin="5rem 0">
        <Box
          data-aos="fade-down"
          as="text"
          color="cyan.700"
          fontSize="3.2rem"
          fontWeight="bold"
        >
          Portfólio
          <Box position="relative">
            <Box
              position="absolute"
              bottom="0"
              left="10"
              borderBottom="0.8rem solid #0BC5EA"
              width="65%"
            />
          </Box>
        </Box>
        <PortfolioCard />
      </Flex>
      <Text
        textAlign="center"
        margin="4rem 2rem"
        color="cyan.400"
        fontSize="2rem"
      >
        Para mais conteúdo sobre meus trabalhos e estudos visite o meu{" "}
        <Box
          as={ReachLink}
          data-aos="fade-up-left"
          fontWeight="bold"
          fontSize="2rem"
          color="cyan.200"
          href="https://github.com/MayconTrix"
          isExternal
          textDecoration="underline"
          _hover={{ color: "cyan.500" }}
        >
          GitHub
        </Box>
      </Text>
      <Box
        bottom={{ base: "0", sm: "5", md: "-20" }}
        borderBottom="0.6rem solid #000"
        width="20%"
      />
    </Flex>
  );
}
