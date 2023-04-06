import React, { useRef } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  IconButton,
  useDisclosure,
  Link as ReachLink,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { NAVMENU } from "@/constants/menu";
import { List } from "@phosphor-icons/react";

type NavMobileProps = {
  scrollTo: (id: string) => void;
};

export function NavMobile({ scrollTo }: NavMobileProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);

  return (
    <>
      <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 1 }}>
        <IconButton
          onClick={onOpen}
          marginLeft="2rem"
          height="4rem"
          aria-label="Menu"
          backgroundColor="transparent"
          color="cyan.400"
          icon={<List size={28} />}
          display={["flex", "flex", "flex", "none"]}
          _hover={{
            backgroundColor: "trasparent",
          }}
          _active={{ active: "none" }}
        />
      </motion.div>
      <Drawer
        size="sm"
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerBody backgroundColor="black">
            <DrawerHeader
              padding="0.4rem"
              textAlign="center"
              color="cyan.400"
              fontSize="2rem"
            >
              Menu
            </DrawerHeader>
            <DrawerCloseButton
              color="cyan.400"
              padding="1.6rem"
              fontSize="1.4rem"
            />
            <Flex
              width="100%"
              alignItems="center"
              direction="column"
              marginTop="3rem"
              gap="2rem"
              color="cyan.400"
            >
              {NAVMENU.map((option) => (
                <Flex
                  as={ReachLink}
                  onClick={() => {
                    scrollTo(option.id);
                    onClose();
                  }}
                  _hover={{
                    color: "cyan.700",
                    textDecoration: "none",
                  }}
                  key={option.id}
                  cursor="pointer"
                  fontWeight="bold"
                  fontSize="1.5rem"
                >
                  {option.name}
                </Flex>
              ))}
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
