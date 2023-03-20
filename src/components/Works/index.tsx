import { Box, Flex, Text } from "@chakra-ui/react";

export function Works() {
  return (
    <Flex
      marginTop="5rem"
      align="center"
      justify="center"
      height="58.8rem"
      width="100%"
      direction="column"
      gap="3rem"
    >
      <Flex direction="column" alignItems="center" marginBottom="2rem">
        <Box as="text" color="cyan.700" fontSize="3.2rem" fontWeight="bold">
          Works
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
        <Text marginTop="1.6rem" color="cyan.500" textAlign="center">
          Textinho?
        </Text>
      </Flex>
    </Flex>
  );
}
