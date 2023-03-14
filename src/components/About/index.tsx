import { Box, Flex, Heading, Img, Text } from "@chakra-ui/react";

export function About() {
  return (
    <Flex
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
              <Text color="cyan.700" fontSize="3.2rem" fontWeight="bold">
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
              </Text>
            </Flex>
            <Text
              width="66rem"
              color="cyan.500"
              lineHeight="160%"
              fontSize="1.6rem"
            >
              <strong>- Desde</strong> muito novo, amante de tecnologias e jogos
              (vídeo game, computador e arcades), procurei seguir por este
              caminho, da tecnologia, trabalhando por um bom tempo como autônomo
              dando suporte em TI. (Hardware e Software). Passei por outros
              trabalhos que não gostei muito como freelancer, após algum tempo
              acabei voltando para a área de TI.
              <br />
              <br />
              <strong>- Com</strong> a pandemia consegui encontrar mais tempo em
              casa e resolvi estudar programação, onde me deparei com uma grande
              oportunidade, assim me tornando um Trainee - Front-end / UI Design
              da Rembrandtech, aproveitando esta oportunidade decidi estudar
              mais a fundo e junto a isso fazer uma transição de carreira, me
              dedicando somente a programação, Hoje atuo como Front-end / UI
              Design | Júnior na mesma.
            </Text>
          </Flex>
          <Box justifySelf="end" width="30.2rem" height="32.6rem">
            <Img src="/Foto.png" />
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
    </Flex>
  );
}
