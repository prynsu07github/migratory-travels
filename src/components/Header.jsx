import { Flex, Text, IconButton, Box, useDisclosure, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const routes = [
    { name: "Home", href: "/" },
    { name: "Vehicles", href: "/vehicles" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" }
  ];

  return (
    <Flex justifyContent={"space-between"} alignItems={"center"}>
     <Link to={'/'}>
     <Image src="/Logo.png" h={'24'} w={'24'} />
     </Link>
      <Box display={{ base: "block", md: "none" }}>
        <IconButton
          icon={isOpen ? <CloseIcon w={5} h={5} /> : <HamburgerIcon w={6} h={6} />}
          aria-label="Toggle Navigation"
          onClick={isOpen ? onClose : onOpen}
          variant="ghost"
          size="lg"
          color={"gray.dark"}
          zIndex={11}
        />
      </Box>
      <Flex
        gap={{ base: "4px", md: "10" }}
        alignItems={{ md: 'center' }}
        flexDirection={{ base: "column", md: "row" }}
        display={{ base: isOpen ? "flex" : "none", md: "flex" }}
        position={{ base: "absolute", md: "relative" }}
        left={{ base: "0", md: "auto" }}
        top={{ base: "0", md: "auto" }}
        bg={{ base: "white", md: "transparent" }}
        h={{ base: "100vh", md: "auto" }}
        w={{ base: "100%", md: "auto" }}
        p={{ base: "4", md: "0" }}
        zIndex={"10"}
      >
        {routes.map(route => (
          <Link key={route.name} to={route.href} onClick={onClose}>
            <Text fontSize={"lg"} _hover={{
              color:"orange.dark"
            }}>{route.name}</Text>
          </Link>
        ))}
      </Flex>
    </Flex>
  );
};

export default Header;
