import { Box, Flex, Img, Text } from "@chakra-ui/react";

export function Skills() {
  return (
    <Flex
      marginTop="4.8rem"
      align="center"
      justify="center"
      height="54.8rem"
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
        <Text marginTop="1.6rem" color="cyan.500">
          Eu tenho um <strong>pouco de experiência</strong> com essas
          tecnologias.
        </Text>
      </Flex>

      <Box zIndex="1" position="relative">
        <Box
          bgColor="cyan.400"
          position="absolute"
          bottom="-200"
          right="250"
          width="210px"
          height="524px"
        />
      </Box>
      <Flex
        zIndex="2"
        width="79.2rem"
        height="9.2rem"
        gap="3.2rem"
        borderBottom="6px solid #0BC5EA"
      >
        <Img src="/github.svg" height="8.2rem"></Img>
        <Img src="/figma.svg" height="8.2rem"></Img>
        <Img src="/html5.svg" height="8.2rem"></Img>
        <Img src="/css3.svg" height="8.2rem"></Img>
        <Img src="/javascript.svg" height="8.2rem"></Img>
        <Img src="/typescript.svg" height="8.2rem"></Img>
        <Img src="/react.svg" height="8.2rem"></Img>
        <Img src="/nextjs.svg" height="8.2rem" alt="simbolo do react"></Img>
      </Flex>
    </Flex>
  );
}
