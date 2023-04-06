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
        <Link href="https://twitter.com/TiuTrix" isExternal>
          <TwitterLogo size={28} />
        </Link>
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.3, color: "#76E4F7" }}
        whileTap={{ scale: 1 }}
      >
        <Link
          href="https://www.figma.com/files/team/1202625884338087146/My-Projects?fuid=1146523709759227520"
          isExternal
        >
          <FigmaLogo size={28} />
        </Link>
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.3, color: "#76E4F7" }}
        whileTap={{ scale: 1 }}
      >
        <Link href="https://www.linkedin.com/in/maycontrix/" isExternal>
          <LinkedinLogo size={28} />
        </Link>
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.3, color: "#76E4F7" }}
        whileTap={{ scale: 1 }}
      >
        <Link href="https://github.com/MayconTrix" isExternal>
          <GithubLogo size={28} />
        </Link>
      </motion.div>
    </Flex>
  );
}
