import { Box, Flex, Img, Link, Text } from "@chakra-ui/react";

export function Skills() {
  return (
    <Flex
      marginTop="5rem"
      align="center"
      justify="center"
      height="59rem"
      width="100%"
      backgroundColor="black"
      direction="column"
      gap="3rem"
    >
      <Flex direction="column" alignItems="center" marginBottom="2rem">
        <Box as="text" color="cyan.700" fontSize="3.2rem" fontWeight="bold">
          Skills
          <Box position="relative">
            <Box
              position="absolute"
              bottom="0"
              left="0"
              borderBottom="0.8rem solid #0BC5EA"
              width="65%"
            />
          </Box>
        </Box>
        <Text marginTop="1.6rem" color="cyan.500" textAlign="center">
          Eu tenho um <strong>pouco de experiência</strong> com estas
          tecnologias.
          <br /> Para maiores informações,{" "}
          <Link
            fontWeight="bold"
            fontSize="1.8rem"
            href="https://flowcv.com/resume/sssput1so9"
            isExternal
          >
            Curriculum Vitae
          </Link>
        </Text>
      </Flex>

      <Box zIndex="1" position="relative">
        <Box
          bgColor="cyan.400"
          position="absolute"
          bottom="-200"
          right="250"
          width="21rem"
          height="54.4rem"
        />
      </Box>
      <Flex
        zIndex="2"
        width="82rem"
        height="9.2rem"
        gap="3rem"
        borderBottom="6px solid #0BC5EA"
      >
        <Img
          src="/skills/github.svg"
          height="8.2rem"
          title="GitHub"
          alt="Simbolo do GitHub"
        />
        <Img
          src="/skills/figma.svg"
          height="8.2rem"
          title="Figma"
          alt="Simbolo do Figma "
        />
        <Img
          src="/skills/html5.svg"
          height="8.2rem"
          title="HTML"
          alt="Simbolo do Html5"
        />
        <Img
          src="/skills/css3.svg"
          height="8.2rem"
          title="CSS"
          alt="Simbolo do CSS3"
        />
        <Img
          src="/skills/javascript.svg"
          height="8.2rem"
          title="JavaScript"
          alt="Simbolo do JavaScript"
        />
        <Img
          src="/skills/typescript.svg"
          height="8.2rem"
          title="TypeScript"
          alt="Simbolo do TypeScript"
        />
        <Img
          src="/skills/react.svg"
          height="8.2rem"
          title="React"
          alt="Simbolo do React"
        />
        <Img
          src="/skills/nextjs.svg"
          height="8.2rem"
          title="NextJS"
          alt="simbolo do react"
        />
      </Flex>
    </Flex>
  );
}
