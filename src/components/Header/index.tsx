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
import { Navmenu } from "./components/Navmenu";

export function Header() {
  const [scrollPosition, setScrollPosition] = useState(0);
  // const [isFixed, setFixed] = useState("sticky");

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

  // useEffect(() => {
  //   const toggleFixed = () => {
  //     if (window.pageYOffset > 163) {
  //       setFixed("fixed");
  //     } else {
  //       setFixed("sticky");
  //     }
  //   };
  //   window.addEventListener("scroll", toggleFixed);

  //   return () => window.removeEventListener("scroll", toggleFixed);
  // }, []);

  return (
    <Box
      // height="100vh"
      zIndex="3"
      maxWidth="144rem"
      margin="0 auto"
    >
      <Flex
        position="sticky"
        top="0"
        zIndex="3"
        // position={isFixed}
        // maxWidth="144rem"
        // width="100%"
        height="3.2rem"
        backgroundColor="black"
        align="center"
        justify="center"
      >
        {/* <Text fontSize="1.2rem" color="cyan.400">
          {date}
        </Text> */}
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
      {/* <Flex
        marginTop="4.8rem"
        align="center"
        justify="center"
        height="55rem"
        width="100%"
        backgroundColor="gray.900"
      >
        <Box height="34.1rem" width="126rem" position="relative">
          <Box
            background="cyan.400"
            width="0.8rem"
            height="30%"
            position="absolute"
            top="0"
            left="0"
          />
          <Box
            background="cyan.400"
            width="0.8rem"
            height="30%"
            position="absolute"
            bottom="0"
            right="0"
          />
          <Flex justifyContent="flex-end" width="100%" padding="0.8rem">
            <Flex flex="1" direction="column" alignItems="center">
              <Flex direction="column" alignItems="center" marginBottom="2rem">
                <Box
                  as="text"
                  color="cyan.700"
                  fontSize="3.2rem"
                  fontWeight="bold"
                >
                  Sobre
                  <Box position="relative">
                    <Box
                      position="absolute"
                      bottom="0"
                      right="0"
                      borderBottom="0.8rem solid #0BC5EA"
                      width="65%"
                    />
                  </Box>
                </Box>
              </Flex>
              <Text
                width="66rem"
                color="cyan.500"
                lineHeight="160%"
                fontSize="1.6rem"
              >
                <strong>- Desde</strong> muito novo, amante de tecnologias e
                jogos (vídeo game, computador e arcades), procurei seguir por
                este caminho, da tecnologia, trabalhando por um bom tempo como
                autônomo dando suporte em TI. (Hardware e Software). Passei por
                outros trabalhos que não gostei muito como freelancer, após
                algum tempo acabei voltando para a área de TI.
                <br />
                <br />
                <strong>- Com</strong> a pandemia consegui encontrar mais tempo
                em casa e resolvi estudar programação, onde me deparei com uma
                grande oportunidade, assim me tornando um Trainee - Front-end /
                UI Design da Rembrandtech, aproveitando esta oportunidade decidi
                estudar mais a fundo e junto a isso fazer uma transição de
                carreira, me dedicando somente a programação, Hoje atuo como
                Front-end / UI Design | Júnior na mesma.
              </Text>
            </Flex>
            <Box justifySelf="end" width="30.2rem" height="32.6rem">
              <Img src="/Foto.png" alt="Foto de Maycon Batista usando terno" />
            </Box>
          </Flex>
          <Box
            background="cyan.400"
            width="20%"
            height="0.8rem"
            position="absolute"
            top="0"
            left="0"
          />
          <Box
            background="cyan.400"
            width="20%"
            height="0.8rem"
            position="absolute"
            bottom="0"
            right="0"
          />
        </Box>
      </Flex> */}
    </Box>
  );
}
