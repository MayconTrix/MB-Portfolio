import { SKILLS_MEDIAS } from "@/constants/skills";
import {
  Box,
  Flex,
  Img,
  SimpleGrid,
  Text,
  Link as ReachLink,
  Link,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

export function Skills() {
  return (
    <Flex
      id="Skills"
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
        <Box
          data-aos="fade-down"
          as="text"
          color="cyan.700"
          fontSize="3.2rem"
          fontWeight="bold"
        >
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
        <Text
          data-aos="fade-left"
          marginTop="1.6rem"
          color="cyan.500"
          textAlign="center"
        >
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

      <Box
        display={{ base: "none", lg: "flex" }}
        zIndex="1"
        position="relative"
      >
        <Box
          bgColor="cyan.400"
          position="absolute"
          bottom="-200"
          right="300"
          width="21rem"
          height="54.4rem"
        />
      </Box>
      <Flex
        data-aos="fade-up-right"
        zIndex="2"
        gap="3rem"
        borderBottom="6px solid #0BC5EA"
      >
        <SimpleGrid columns={{ base: 2, sm: 4, md: 4, lg: 8 }} gap="4rem">
          {SKILLS_MEDIAS.map((media) => (
            <Box key={media.title}>
              <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 1 }}>
                <Link href={media.url} isExternal>
                  <Img
                    src={media.src}
                    height="8.2rem"
                    title={media.title}
                    alt={media.alt}
                  />
                </Link>
              </motion.div>
            </Box>
          ))}
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}
