import { WORKS } from "@/constants/works";
import { Box, Flex, Img, SimpleGrid, Text } from "@chakra-ui/react";
import Atropos from "atropos/react";

export function Works() {
  return (
    <Flex
      id="Works"
      marginTop="15rem"
      align="center"
      height="58.8rem"
      width="100%"
      backgroundColor="black"
      bgGradient="linear(159.8deg, gray.900 49.8%, black 50%)"
      direction="column"
      gap="3rem"
    >
      <Flex data-aos="fade-up" direction="column" margin="2rem 0">
        <Box as="text" color="cyan.700" fontSize="3.2rem" fontWeight="bold">
          Trabalhos
          <Box position="relative">
            <Box
              position="absolute"
              bottom="0"
              left="0"
              borderBottom="0.8rem solid #0BC5EA"
              width="65%"
            />
          </Box>
        </Box>
      </Flex>
      <Text color="cyan.500" textAlign="center">
        Tenho orgulho em ter colaborado com algumas empresas incríveis:
      </Text>
      <SimpleGrid columns={{ base: 1, md: 1, lg: 1 }} gap="4rem">
        {WORKS.map((company) => (
          <Flex key={company.name} id={company.name}>
            <Atropos activeOffset={40} shadowScale={1.05}>
              <Img
                height="12rem"
                borderRadius="0.8rem"
                src={company.logo}
                title={company.title}
                alt={company.alt}
              />
            </Atropos>
          </Flex>
        ))}
      </SimpleGrid>
    </Flex>
  );
}
