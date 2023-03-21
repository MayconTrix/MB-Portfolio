import { PORTFOLIO } from "@/constants/portfolio";
import {
  Flex,
  Img,
  Text,
  Heading,
  Button,
  Link as ReachLink,
} from "@chakra-ui/react";
// import type { Property } from "csstype";
import React from "react";

// interface PortfolioCardProps {
//   row: Property.FlexDirection;
//   image: string;
//   title: string;
//   description: string;
//   webHref: string;
//   gitHref: string;
//   figmaHref: string;
// }

export default function PortfolioCard() {
  return (
    <>
      {PORTFOLIO.map((card: any) => (
        <>
          <Flex marginTop="5rem" flexDirection={card.row}>
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
        </>
      ))}
    </>
  );
}
