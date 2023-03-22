import { useEffect, useState } from "react";
import {
  Flex,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Img,
  Box,
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
              <BreadcrumbLink href="#">Portfólio</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink href="#">Trabalhos</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
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
