import { Box, Flex, Text, Link as ReachLink, color } from "@chakra-ui/react";
import PortfolioCard from "./components/PortfolioCard";

export function Portfolio() {
  return (
    <Flex
      marginTop="5rem"
      align="center"
      width="100%"
      direction="column"
      gap="3rem"
    >
      <Flex direction="column" alignItems="center" margin="5rem 0">
        <Box as="text" color="cyan.700" fontSize="3.2rem" fontWeight="bold">
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
          fontWeight="bold"
          href="https://github.com/MayconTrix"
          isExternal
          _hover={{ color: "cyan.300" }}
        >
          GitHub
        </Box>
      </Text>
    </Flex>
  );
}
