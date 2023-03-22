import React from "react";
import { PORTFOLIO } from "@/constants/portfolio";
import {
  Flex,
  Img,
  Text,
  Heading,
  Button,
  Link as ReachLink,
  Box,
} from "@chakra-ui/react";

interface PortfolioCardProps {
  direction: any;
  image: string;
  title: string;
  description: string;
  webHref: string;
  gitHref: string;
  figmaHref: string;
}

export default function PortfolioCard() {
  return (
    <>
      {PORTFOLIO.map((card: PortfolioCardProps, index) => (
        <Box key={index}>
          <Flex marginTop="10rem" direction={card.direction}>
            <Img
              width="32rem"
              height="21.2rem"
              borderRadius="0.4rem"
              border="1px solid #0BC5EA"
              src={card.image}
            />
            <Flex
              direction="column"
              color="cyan.500"
              margin="0 4rem"
              justify="space-between"
            >
              <Heading>{card.title}</Heading>
              <Text
                width="38rem"
                dangerouslySetInnerHTML={{ __html: card.description }}
              />
              <Flex gap="1.5rem" fontWeight="bold">
                <Button
                  as={ReachLink}
                  href={card.webHref}
                  colorScheme="cyan"
                  isExternal
                >
                  WebSite
                </Button>
                <Button
                  as={ReachLink}
                  colorScheme="cyan"
                  href={card.gitHref}
                  isExternal
                >
                  GitHub
                </Button>
                <Button
                  as={ReachLink}
                  colorScheme="cyan"
                  href={card.figmaHref}
                  isExternal
                >
                  Figma
                </Button>
              </Flex>
            </Flex>
          </Flex>
        </Box>
      ))}
    </>
  );
}
