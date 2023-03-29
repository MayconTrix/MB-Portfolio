import { Flex, Text } from "@chakra-ui/react";
import NavMenu from "../Head/components/NavMenu";
import { SocialIcons } from "../Head/components/SocialIcons";

export function Footer() {
  const correctPosition = {
    Home: 0,
    About: 0,
    Skills: 0,
    Portfolio: 50,
    Works: 50,
  };

  function scrollTo(id: string) {
    console.log(id);
    const position = findPos(document.getElementById(id));
    // @ts-ignore
    window.scroll(0, (position || 0) - correctPosition[id]);
  }

  function findPos(obj: any) {
    let pos: any = 0;
    if (obj.offsetParent) {
      do {
        pos += obj.offsetTop;
      } while ((obj = obj.offsetParent));
      return [pos];
    }
  }
  return (
    <Flex
      align="center"
      // justify="center"
      minHeight="58.8rem"
      width="100%"
      backgroundColor="black"
      direction="column"
      justifyContent="space-around"
      // alignItems="center"
      // padding="1rem"
    >
      <Flex
        data-aos="zoom-in-up"
        direction={{ base: "column", lg: "row" }}
        // gap="10rem"
        width="100%"
        marginTop="2rem"
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
          width={{ base: "3rem", sm: "50rem", md: "55rem" }}
          height={{ base: "20rem", sm: "30rem", md: "32rem" }}
          backgroundColor="cyan.500"
          borderRadius="0.2rem"
          gap="3rem"
        >
          <NavMenu
            scrollTo={scrollTo}
            display="flex"
            color="black"
            fontWeight="semibold"
          />
          <SocialIcons color="black" />
        </Flex>
      </Flex>
      <Text fontSize="1.2rem" margin="3.8rem" color="cyan.400">
        Feito por Maycon Batista © 2023
      </Text>
    </Flex>
  );
}
