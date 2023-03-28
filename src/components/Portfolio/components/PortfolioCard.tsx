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
            marginTop={{ base: "2rem", md: "6rem" }}
            direction={{ base: "column", md: card.direction }}
            padding="1rem"
            align={{ base: "center", md: "normal" }}
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
              margin={{ base: "2rem 0", md: "0 6rem" }}
              justify="space-between"
              textAlign={{ base: "center", md: card.textDirection }}
              align={{ base: "center", md: "normal" }}
            >
              <Heading color="cyan.400">{card.title}</Heading>
              <Text
                width="38rem"
                color="cyan.700"
                margin={{ base: "2rem", md: "0" }}
                dangerouslySetInnerHTML={{ __html: card.description }}
              />
              <Flex
                gap="1.5rem"
                fontWeight="bold"
                justifyContent={{ base: "start", md: card.textDirection }}
              >
                {card.webHref && (
                  <Button
                    as={ReachLink}
                    href={card.webHref}
                    colorScheme="cyan"
                    fontSize="1.2rem"
                    isExternal
                  >
                    WebSite
                  </Button>
                )}
                {card.gitHref && (
                  <Button
                    as={ReachLink}
                    href={card.gitHref}
                    colorScheme="cyan"
                    fontSize="1.2rem"
                    isExternal
                  >
                    GitHub
                  </Button>
                )}
                {card.figmaHref && (
                  <Button
                    as={ReachLink}
                    href={card.figmaHref}
                    colorScheme="cyan"
                    fontSize="1.2rem"
                    isExternal
                  >
                    Figma
                  </Button>
                )}
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
