import { useEffect, useState } from "react";
import { SOCIAL_MEDIA } from "@/constants/socials";
import { Flex, Img, Box, Text, Link as ReachLink } from "@chakra-ui/react";
import NavMenu from "./components/NavMenu";
import { motion } from "framer-motion";

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
          <Text
            width="100%"
            marginLeft="14rem"
            fontSize="3.2rem"
            color="cyan.400"
          >
            Olá, seja bem vindo, eu sou <strong>Maycon Batista</strong>
          </Text>
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
        <Flex marginLeft="2.2rem" align="center" gap="2.5rem">
          {SOCIAL_MEDIA.map((social, index) => (
            <Box as={ReachLink} href={social.url} key={index} isExternal>
              <motion.div whileHover={{ scale: 1.3 }} whileTap={{ scale: 1 }}>
                <Img
                  height="2.8rem"
                  borderRadius="0.8rem"
                  src={social.icon}
                  title={social.name}
                  alt={social.alt}
                  width="2.8rem"
                />
              </motion.div>
            </Box>
          ))}
        </Flex>
        <Flex
          flex="1"
          justify="flex-end"
          align="center"
          color="cyan.400"
          gap="1.8rem"
        >
          <NavMenu />
          <Img
            src="/CloudSun.svg"
            margin="0 4rem"
            alt="Mudar para tema claro"
            title="Tema"
          />
        </Flex>
      </Flex>
    </>
  );
}
