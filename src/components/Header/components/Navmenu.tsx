import {
  Flex,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Img,
} from "@chakra-ui/react";
import {
  TwitterLogo,
  FigmaLogo,
  InstagramLogo,
  FacebookLogo,
  LinkedinLogo,
  GithubLogo,
} from "@phosphor-icons/react";

export function Navmenu() {
  return (
    <Flex
      zIndex="3"
      // position={isFixed}
      position="sticky"
      maxWidth="144rem"
      width="100%"
      top="3.2rem"
      height="4.4rem"
      backgroundColor="black"
    >
      <Flex marginLeft="2.2rem" align="center" color="cyan.400" gap="1.8rem">
        <TwitterLogo size={28} />
        <FigmaLogo size={28} />
        <InstagramLogo size={28} />
        <FacebookLogo size={28} />
        <LinkedinLogo size={28} />
        <GithubLogo size={28} />
      </Flex>
      <Flex
        flex="1"
        justify="flex-end"
        align="center"
        color="cyan.400"
        gap="1.8rem"
      >
        <Breadcrumb separator="-">
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Início</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="#">Sobre</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href="#">Skills</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href="#">Trabalhos</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        <Img
          src="/CloudSun.svg"
          margin="0 6.6rem"
          alt="Mudar para tema claro"
        />
      </Flex>
    </Flex>
  );
}
