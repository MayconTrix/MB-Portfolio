import { useEffect, useState } from "react";
import { Box, Flex, IconButton } from "@chakra-ui/react";
import { About } from "@/components/About";
import { Footer } from "@/components/Footer";
import { Head } from "@/components/Head";
import { Skills } from "@/components/Skills";
import { Portfolio } from "@/components/Portfolio";
import { Works } from "@/components/Works";
import { ArrowUp } from "@phosphor-icons/react";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <Box
      flexDirection="column"
      maxWidth="144rem"
      margin="0 auto"
      width="100%"
      backgroundColor="gray.900"
    >
      <Head />
      <About />
      <Skills />
      <Portfolio />
      <Works />
      <Footer />

      {isVisible && (
        <Flex
          position="fixed"
          bottom="4rem"
          marginLeft="3rem"
          justifyContent="start"
          zIndex={3}
          onClick={scrollToTop}
        >
          <IconButton
            size="lg"
            icon={<ArrowUp size={18} weight="fill" color="black" />}
            backgroundColor="cyan.600"
            variant="solid"
            aria-label="Search database"
            _hover={{ backgroundColor: "cyan.400" }}
          >
            Topo
          </IconButton>
        </Flex>
      )}
    </Box>
  );
}
