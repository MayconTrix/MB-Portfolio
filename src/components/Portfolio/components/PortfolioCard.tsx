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
  textDirection: any;
  image: string;
  title: string;
  alt: string;
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
          <Flex
            position="relative"
            marginTop="10rem"
            direction={card.direction}
          >
            <Img
              width="32rem"
              height="21.2rem"
              borderRadius="0.4rem"
              border="1px solid #0BC5EA"
              src={card.image}
              title={card.title}
              alt={card.alt}
            />
            <Flex
              direction="column"
              margin="0 6rem"
              justify="space-between"
              textAlign={card.textDirection}
            >
              <Heading color="cyan.400">{card.title}</Heading>
              <Text
                width="38rem"
                color="cyan.700"
                dangerouslySetInnerHTML={{ __html: card.description }}
              />
              <Flex
                gap="1.5rem"
                fontWeight="bold"
                justifyContent={card.textDirection}
              >
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
            <Box
              position="absolute"
              bottom="-20"
              borderRadius="4px"
              borderBottom="0.4rem solid #0987A0"
              width="50%"
            />
          </Flex>
        </Box>
      ))}
    </>
  );
}
