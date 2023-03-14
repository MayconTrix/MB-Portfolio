import { Box, Flex, Text } from "@chakra-ui/react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

export function Header() {
  const today = new Date();
  const day = format(today, "dd");
  const month = format(today, "MMMM", { locale: ptBR });
  const year = format(today, "yyyy");
  const date = `${day} de ${month} de ${year}`;

  return (
    <Box zIndex="3" maxWidth="144rem" margin="0 auto">
      <Flex
        position="fixed"
        top="0"
        zIndex="3"
        maxWidth="144rem"
        width="100%"
        height="3.2rem"
        backgroundColor="black"
        align="center"
        justify="center"
      >
        <Text fontSize="1.2rem" color="cyan.400">
          {date}
        </Text>
      </Flex>
    </Box>
  );
}
