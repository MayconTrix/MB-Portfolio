import { useEffect, useState } from "react";
import { Flex, Box, Text } from "@chakra-ui/react";
import NavMenu from "./components/NavMenu";
import { motion } from "framer-motion";
import { SocialIcons } from "./components/SocialIcons";
import { NavMobile } from "./components/NavMobile";

type CorrectPosition = {
  [key: string]: number;
};

export function Head() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    function handleScroll() {
      setScrollPosition(window.pageYOffset);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const correctPosition = {
    Home: 0,
    About: 55,
    Skills: 0,
    Portfolio: 50,
    Works: 50,
  } as { [key: string]: number };

  function scrollTo(id: string | number) {
    const element = document.getElementById(id.toString());
    if (element) {
      const position = findPos(element);
      window.scroll(0, (position ?? 0) - correctPosition[id]);
    }
  }

  function findPos(obj: HTMLElement | null): number {
    let pos: number = 0;
    let currentObj = obj;
    while (currentObj?.offsetParent) {
      pos += currentObj.offsetTop;
      currentObj = currentObj.offsetParent as HTMLElement;
    }
    return pos;
  }

  return (
    <>
      <Flex
        marginTop="3.2rem"
        align="center"
        height="16.2rem"
        backgroundImage="/Bgheader.png"
      >
        <Box
          transform={`translate3d(0px, ${0 + scrollPosition * 0.5}px, 100px)`}
        >
          <Text
            width={{ sm: "35rem", md: "65rem" }}
            marginLeft={{ base: "2rem", md: "8rem", lg: "14rem" }}
            fontSize={{ base: "2rem", sm: "2.2rem", md: "3.2rem" }}
            color="cyan.400"
          >
            Olá, seja bem vindo, eu sou <strong>Maycon Batista</strong>
          </Text>
        </Box>
      </Flex>
      <Flex
        zIndex="3"
        position="sticky"
        width="100%"
        top="3.2rem"
        minHeight="4.4rem"
        backgroundColor="black"
      >
        <SocialIcons
          margin={{ base: "1rem", sm: "4rem", md: "6rem" }}
          color="cyan.400"
        />
        <Flex
          flex="1"
          margin={{ base: "0 1rem", sm: "0 4rem", md: "0 6rem" }}
          justify="flex-end"
          align="center"
          color="cyan.400"
          gap="1.8rem"
        >
          <NavMenu
            scrollTo={scrollTo}
            display={["none", "none", "none", "flex"]}
          />
          <NavMobile scrollTo={scrollTo} />
        </Flex>
      </Flex>
    </>
  );
}
