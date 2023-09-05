import { Flex, Link, BoxProps } from "@chakra-ui/react";
import {
  FigmaLogo,
  GithubLogo,
  LinkedinLogo,
  TwitterLogo,
} from "@phosphor-icons/react";
import { motion } from "framer-motion";

interface SocialIconsProps {
  color: string;
  margin?: BoxProps["margin"] | undefined;
}

export function SocialIcons({ color, margin }: SocialIconsProps) {
  return (
    <Flex color={color} marginLeft={margin} align="center" gap="3rem">
      <motion.div
        whileHover={{ scale: 1.3, color: "#76E4F7" }}
        whileTap={{ scale: 1 }}
      >
        <Link
          href="https://twitter.com/TiuTrix"
          isExternal
          aria-label="traços na forma de um pássaro"
        >
          <TwitterLogo size={28} alt="Ícone do Twitter" />
        </Link>
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.3, color: "#76E4F7" }}
        whileTap={{ scale: 1 }}
      >
        <Link
          href="https://www.figma.com/"
          isExternal
          aria-label="três círculos a esquerda e dois a direita, representando a letra F de figma"
        >
          <FigmaLogo size={28} alt="Ícone do Figma" />
        </Link>
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.3, color: "#76E4F7" }}
        whileTap={{ scale: 1 }}
      >
        <Link
          href="https://www.linkedin.com/in/maycontrix/"
          isExternal
          aria-label="Um quadrado com as letras i, n, dentro"
        >
          <LinkedinLogo size={28} alt="Ícone do Linkedin" />
        </Link>
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.3, color: "#76E4F7" }}
        whileTap={{ scale: 1 }}
      >
        <Link
          href="https://github.com/MayconTrix"
          isExternal
          aria-label="traços na forma de um gatinho"
        >
          <GithubLogo size={28} alt="Ícone do Github" />
        </Link>
      </motion.div>
    </Flex>
  );
}
