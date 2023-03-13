import { Box, Flex, Heading, Text } from "@chakra-ui/react";

export function About() {
  return (
    <Flex width="100%">
      <Box position="relative">
        <Box
          position="absolute"
          bottom="0"
          right="0"
          borderBottom="2px solid black"
          width="50%"
        />
        <Text fontSize="3.2rem">Sobre</Text>
        <Text fontSize="3.2rem">Teste</Text>
      </Box>
    </Flex>
  );
}
