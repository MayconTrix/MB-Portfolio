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

import { motion } from "framer-motion";
import Atropos from "atropos/react";

interface PortfolioCardProps {
  aos: string;
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
            data-aos={card.aos}
            position="relative"
            marginTop={{ base: "2rem", md: "6rem" }}
            direction={{ base: "column", md: card.direction }}
            padding="1rem"
            align={{ base: "center", md: "normal" }}
          >
            <Atropos activeOffset={40} shadowScale={1.05} key={index}>
              <Img
                width="32rem"
                height="21rem"
                borderRadius="0.4rem"
                border="1px solid #0BC5EA"
                src={card.image}
                title={card.title}
                alt={card.alt}
                loading="lazy"
              />
            </Atropos>
            <Flex
              direction="column"
              margin={{ base: "2rem 0", md: "0 6rem" }}
              justify="space-between"
              textAlign={{ base: "center", md: card.textDirection }}
              align={{ base: "center", md: "normal" }}
            >
              <Heading color="cyan.400">{card.title}</Heading>
              <Text
                maxWidth="38rem"
                color="cyan.700"
                margin={{ base: "0", md: "0" }}
                dangerouslySetInnerHTML={{ __html: card.description }}
              />
              <Flex
                gap="1.5rem"
                marginTop="1rem"
                fontWeight="bold"
                justifyContent={{ base: "start", md: card.textDirection }}
              >
                <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 1 }}>
                  {card.webHref && (
                    <Button
                      as={ReachLink}
                      href={card.webHref}
                      colorScheme="cyan"
                      fontSize="1.4rem"
                      _hover={{ color: "cyan.900", textDecoration: "none" }}
                      isExternal
                    >
                      WebSite
                    </Button>
                  )}
                </motion.div>
                <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 1 }}>
                  {card.gitHref && (
                    <Button
                      as={ReachLink}
                      href={card.gitHref}
                      colorScheme="cyan"
                      fontSize="1.4rem"
                      _hover={{ color: "cyan.900", textDecoration: "none" }}
                      isExternal
                    >
                      GitHub
                    </Button>
                  )}
                </motion.div>
                <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 1 }}>
                  {card.figmaHref && (
                    <Button
                      as={ReachLink}
                      href={card.figmaHref}
                      colorScheme="cyan"
                      fontSize="1.4rem"
                      _hover={{ color: "cyan.900", textDecoration: "none" }}
                      isExternal
                    >
                      Figma
                    </Button>
                  )}
                </motion.div>
              </Flex>
            </Flex>
            <Box
              position="absolute"
              bottom={{ base: "0", sm: "5", md: "-20" }}
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
