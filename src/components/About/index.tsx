import { Box, Flex, Img, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

import Atropos from "atropos/react";

export function About() {
  return (
    <Flex
      id="About"
      marginTop="5rem"
      align="center"
      justify="center"
      minHeight="58.8rem"
      width="100%"
      padding="1rem"
    >
      <Flex
        direction={{ base: "column", sm: "column", lg: "row" }}
        minHeight="34.1rem"
        position="relative"
        gap="3rem"
      >
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          transition={{ delay: 0.4 }}
          animate={{ scale: 1, opacity: 1 }}
        >
          <Flex
            direction="column"
            alignItems="center"
            marginBottom="2rem"
            paddingLeft="2rem"
          >
            <Box
              as="text"
              color="cyan.700"
              fontSize="3.2rem"
              fontWeight="bold"
              textAlign="center"
              position="relative"
            >
              Sobre
              <Box
                position="absolute"
                bottom="0"
                right="0"
                borderBottom="0.8rem solid #0BC5EA"
                width="65%"
              />
            </Box>
            <Text
              maxWidth="66rem"
              color="cyan.500"
              lineHeight="160%"
              fontSize="1.7rem"
              padding="1.2rem"
            >
              <strong>- Desde</strong> a infância, apaixonado por tecnologia e
              jogos, busquei trilhar um caminho nesse campo, trabalhando como
              autônomo por um período significativo, oferecendo suporte em TI,
              tanto em hardware quanto em software.
              <br />
              <br />
              <strong>- Durante</strong> a pandemia, aproveitei o tempo
              disponível para me aprofundar nos estudos de programação, onde me
              deparei com uma grande oportunidade de ingressar como membro
              Front-end/UI Designer na Rembrandtech. Esta experiência me
              incentivou a realizar uma transição de carreira, dedicando-me
              ainda mais para me desenvolver como programador e designer.
            </Text>
          </Flex>
        </motion.div>
        <Box
          position="relative"
          alignSelf="center"
          width="30.2rem"
          height="32.6rem"
        >
          <Atropos activeOffset={40} shadowScale={1.05}>
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              transition={{ delay: 0.9 }}
              animate={{ scale: 1, opacity: 1 }}
            >
              <Img
                width={{ base: "25rem", sm: "50rem" }}
                src="/Foto.png"
                alt="Foto de Maycon Batista usando terno"
              />
            </motion.div>
          </Atropos>
          <Box
            background="cyan.400"
            width="60%"
            height="0.8rem"
            position="absolute"
            bottom={{ base: "-6", md: "-2", lg: "-2" }}
            right={{ base: "-10", sm: "-50", md: "-220", lg: "-2" }}
          />
          <Box
            background="cyan.400"
            width="0.8rem"
            height="30%"
            position="absolute"
            bottom={{ base: "-6", md: "0", lg: "0" }}
            right={{ base: "-10", sm: "-50", md: "-220", lg: "-2" }}
          />
        </Box>
        <Box
          background="cyan.400"
          width="0.8rem"
          height={{ base: "10%", sm: "10%", md: "10%", lg: "30%" }}
          position="absolute"
          top="0"
          left="0"
        />
        <Box
          background="cyan.400"
          width="20%"
          height="0.8rem"
          position="absolute"
          top="0"
          left="0"
        />
      </Flex>
    </Flex>
  );
}
