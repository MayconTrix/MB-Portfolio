import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  Img,
  Text,
} from "@chakra-ui/react";
import {
  TwitterLogo,
  FigmaLogo,
  InstagramLogo,
  FacebookLogo,
  LinkedinLogo,
  GithubLogo,
} from "@phosphor-icons/react";

import { useState, useEffect } from "react";
// import { Navmenu } from "./components/Navmenu";

export function Header() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isFixed, setFixed] = useState("sticky");

  const today = new Date();
  const day = today.getDate();
  const month = today.toLocaleString("default", { month: "long" });
  const year = today.getFullYear();
  const date = `${day} de ${month} de ${year}`;

  useEffect(() => {
    function handleScroll() {
      setScrollPosition(window.pageYOffset);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 163) {
        setFixed("fixed");
      } else {
        setFixed("sticky");
      }
    };
    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <Box zIndex="3" height="100vh" maxWidth="144rem" margin="0 auto">
      <Flex
        zIndex="3"
        // position={isFixed}
        position="sticky"
        top="0"
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
        <Box
          transform={`translate3d(0px, ${0 + scrollPosition * 0.5}px, 100px)`}
        >
          <Text fontSize="3.2rem" color="cyan.400">
            Olá, seja bem vindo, eu sou <strong>Maycon Batista</strong>
          </Text>
        </Box>
      </Flex>
      {/* <Navmenu /> */}
      <Flex
        zIndex="3"
        // position={isFixed}
        position="sticky"
        top="3.2rem"
        height="4.4rem"
        backgroundColor="black"
      >
        <Flex marginLeft="2.2rem" align="center" color="cyan.400" gap="1.8rem">
          <TwitterLogo size={28} />
          <FigmaLogo size={28} />
          <InstagramLogo size={28} />
          <FacebookLogo size={28} />
          <LinkedinLogo size={28} />
          <GithubLogo size={28} />
        </Flex>
        <Flex
          flex="1"
          justify="flex-end"
          align="center"
          color="cyan.400"
          gap="1.8rem"
        >
          <Breadcrumb separator="-">
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Início</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink href="#">Sobre</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink href="#">Skills</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink href="#">Trabalhos</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <Img
            src="/CloudSun.svg"
            margin="0 6.6rem"
            alt="Mudar para tema claro"
          />
        </Flex>
      </Flex>
    </Box>
  );
}
