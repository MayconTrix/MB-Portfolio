import { WORKS } from "@/constants/works";
import { Box, Flex, Img, SimpleGrid, Text } from "@chakra-ui/react";

export function Works() {
  return (
    <Flex
      marginTop="15rem"
      align="center"
      height="58.8rem"
      width="100%"
      backgroundColor="black"
      bgGradient="linear(159.8deg, gray.900 49.8%, black 50%)"
      direction="column"
      gap="3rem"
    >
      <Flex direction="column" marginBottom="2rem">
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
      <Text marginTop="1.6rem" color="cyan.500" textAlign="center">
        Tenho orgulho de ter colaborado com algumas empresas incríveis:
      </Text>
      <SimpleGrid columns={{ base: 1, sm: 1, md: 1, lg: 1 }} marginTop="4rem">
        {WORKS.map((company) => (
          <Flex key={company.name} id={company.name}>
            <Img
              height="12rem"
              borderRadius="0.8rem"
              src={company.logo}
              title={company.title}
              alt={company.alt}
            />
          </Flex>
        ))}
      </SimpleGrid>
    </Flex>
  );
}
