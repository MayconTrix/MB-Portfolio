import { Box, Flex, Img, Text } from "@chakra-ui/react";

export function Header() {
  const today = new Date();
  const day = today.getDate();
  const month = today.toLocaleString("default", { month: "long" });
  const year = today.getFullYear();
  const date = `${day} de ${month} de ${year}`;

  return (
    <Box maxWidth="144rem" width="100%" margin="0 auto">
      <Flex
        width="100%"
        height="3.2rem"
        backgroundColor="black"
        align="center"
        justify="center"
      >
        <Text fontSize="1.2rem" color="cyan.400">
          {date}
        </Text>
      </Flex>
      <Flex
        align="center"
        justify="center"
        height="16.2rem"
        backgroundImage="/Bgheader.png"
        padding="0 45rem 0 0"
      >
        <Text fontSize="3.2rem" color="cyan.400">
          Olá, seja bem vindo, eu sou <strong>Maycon Batista</strong>
        </Text>
      </Flex>
      <Flex height="4.4rem" backgroundColor="black">
        Hello World
      </Flex>
    </Box>
  );
}
