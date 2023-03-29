import { useEffect, useState } from "react";
import { Flex, Img, Box, Text } from "@chakra-ui/react";
import NavMenu from "./components/NavMenu";
import { motion } from "framer-motion";
import { SocialIcons } from "./components/SocialIcons";
import { NavMobile } from "./components/NavMobile";

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
  };

  function scrollTo(id: string) {
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
    <>
      <Flex
        marginTop="3.2rem"
        align="center"
        height="16.2rem"
        backgroundImage="/Bgheader.png"
        padding="0 45rem 0 0"
      >
        <Box
          transform={`translate3d(0px, ${0 + scrollPosition * 0.5}px, 100px)`}
        >
          <motion.div
            initial={{ y: "-50vw", opacity: 0 }}
            transition={{ delay: 0.5 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <Text
              width={{ sm: "50rem", md: "65rem" }}
              marginLeft={{ base: "6rem", md: "8rem", lg: "14rem" }}
              fontSize={{ sm: "2.2rem", md: "3.2rem" }}
              color="cyan.400"
              whiteSpace="nowrap"
            >
              Olá, seja bem vindo, eu sou <strong>Maycon Batista</strong>
            </Text>
          </motion.div>
        </Box>
      </Flex>
      <Flex
        zIndex="3"
        position="sticky"
        maxWidth="144rem"
        width="100%"
        top="3.2rem"
        height="4.4rem"
        backgroundColor="black"
      >
        <motion.div
          initial={{ y: "-5vw", opacity: 0 }}
          transition={{ delay: 1 }}
          animate={{ y: 10, opacity: 1 }}
        >
          <SocialIcons margin="4rem" color="cyan.400" />
        </motion.div>
        <Flex
          flex="1"
          margin="0 4rem"
          justify="flex-end"
          align="center"
          color="cyan.400"
          gap="1.8rem"
        >
          <motion.div
            initial={{ y: "-5vw", opacity: 0 }}
            transition={{ delay: 1.5 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <NavMenu
              scrollTo={scrollTo}
              display={["none", "none", "none", "flex"]}
            />
            <NavMobile scrollTo={scrollTo} />
          </motion.div>
        </Flex>
      </Flex>
    </>
  );
}
