import { Box, Text } from "@chakra-ui/react";

export function Header() {
  return (
    <Box
      maxWidth="144rem"
      width="100%"
      margin="0 auto"
      // position="fixed"
      // top="0"
      // zIndex="500"
      textAlign="center"
      backgroundColor="red.200"
    >
      <Text>Hello World</Text>
    </Box>
  );
}
