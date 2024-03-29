import { NAVMENU } from "@/constants/menu";
import { Box, Breadcrumb, BreadcrumbItem, Link } from "@chakra-ui/react";
import { motion } from "framer-motion";

interface NavMenuProps {
  color?: string;
  fontWeight?: string;
  scrollTo?: (id: string) => void;
  display?: string[];
}

export default function NavMenu({
  scrollTo,
  color,
  fontWeight,
  display,
}: NavMenuProps) {
  return (
    <Breadcrumb
      fontWeight={fontWeight}
      color={color}
      spacing="0.8rem"
      separator="-"
      display={display}
    >
      {NAVMENU.map((option) => (
        <BreadcrumbItem key={option.id} cursor="pointer">
          <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 1 }}>
            <Box
              // as={ReachLink}
              title={option.name}
              onClick={() => scrollTo?.(option.id)}
              _hover={{
                color: "cyan.300",
                textDecoration: "none",
              }}
              cursor="pointer"
            >
              {option.name}
            </Box>
          </motion.div>
        </BreadcrumbItem>
      ))}
    </Breadcrumb>
  );
}
