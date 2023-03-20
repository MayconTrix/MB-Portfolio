import {
  Flex,
  Img,
  Text,
  Heading,
  Button,
  Link as ReachLink,
} from "@chakra-ui/react";

export function PortfolioCard() {
  return (
    <Flex marginTop="5rem">
      <Img
        width="32rem"
        height="21.2rem"
        borderRadius="0.4rem"
        border="1px solid #0BC5EA"
        src="/MyPortfolioCapa.png"
      />
      <Flex
        direction="column"
        color="cyan.500"
        marginLeft="4rem"
        justify="space-between"
      >
        <Heading>Portfólio Maycon Batista</Heading>
        <Text width="38rem">
          Este portfólio foi criado para critérios de aprendizado e demonstração
          dos meus conhecimentos.
        </Text>
        <Flex gap="1.5rem" fontWeight="bold">
          <Button as={ReachLink} href={""} colorScheme="cyan" isExternal>
            WebSite
          </Button>
          <Button
            as={ReachLink}
            colorScheme="cyan"
            href="https://github.com/MayconTrix/MB-Portfolio"
            isExternal
          >
            GitHub
          </Button>
          <Button
            as={ReachLink}
            colorScheme="cyan"
            href="https://www.figma.com/file/HvcpWyT1rSMKVN6cHcZ7Zo/My-Portfolio?t=PiJMLkpu4rpJly16-0"
            isExternal
          >
            Figma
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
