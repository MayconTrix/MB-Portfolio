import { NAVMENU } from "@/constants/menu";
import {
  Breadcrumb,
  BreadcrumbItem,
  Flex,
  // useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

export default function NavMenu({ scrollTo }: any) {
  // const textColor = useColorModeValue("cyan.400", "cyan.300");
  // const hoverColor = useColorModeValue("cyan.300", "cyan.400");

  return (
    <Breadcrumb
      // fontWeight="semibold"
      color="cyan.400"
      spacing="8px"
      separator="-"
      display={["none", "none", "none", "flex"]}
    >
      {NAVMENU.map((option) => (
        <BreadcrumbItem key={option.id} cursor="pointer">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }}>
            <Flex
              as="a"
              title={option.name}
              onClick={() => scrollTo(option.id)}
              _hover={{
                color: "cyan.300",
              }}
              cursor="pointer"
            >
              {option.name}
            </Flex>
          </motion.div>
        </BreadcrumbItem>
      ))}
    </Breadcrumb>
  );
}
