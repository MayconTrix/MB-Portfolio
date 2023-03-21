import { Box, Flex } from "@chakra-ui/react";
import PortfolioCard from "./components/PortfolioCard";

export function Portfolio() {
  return (
    <Flex
      marginTop="5rem"
      align="center"
      // height="58.8rem"
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
    </Flex>
  );
}
