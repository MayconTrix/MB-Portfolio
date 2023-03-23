import { Flex, Text } from "@chakra-ui/react";
import NavMenu from "../Head/components/NavMenu";
import { SocialIcons } from "../Head/components/SocialIcons";

export function Footer() {
  return (
    <Flex
      align="center"
      justify="center"
      height="58.8rem"
      width="100%"
      backgroundColor="black"
      direction="column"
      justifyContent="space-around"
      alignItems="center"
    >
      <Flex
        width="100%"
        marginTop="9rem"
        align="center"
        justifyContent="space-around"
      >
        <Text
          width="52rem"
          fontSize="3.2rem"
          color="cyan.400"
          textAlign="center"
        >
          <strong>Vivendo</strong>, <strong>aprendendo</strong> e
          <strong> subindo de nível</strong> um dia de cada vez.
        </Text>
        <Flex
          direction="column"
          align="center"
          justify="center"
          width="55rem"
          height="32rem"
          backgroundColor="cyan.500"
          borderRadius="0.2rem"
          gap="3rem"
        >
          <NavMenu color="black" fontWeight="semibold" />
          <SocialIcons color="black" />
        </Flex>
      </Flex>
      <Text fontSize="1.2rem" marginTop="3.8rem" color="cyan.400">
        Feito por Maycon Batista © 2023
      </Text>
    </Flex>
  );
}
