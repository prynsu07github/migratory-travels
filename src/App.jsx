import { Box, Divider, Flex, Image } from "@chakra-ui/react";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Vehicles from "./pages/Vehicles";
import Footer from "./components/Footer";
import AboutUs from "./pages/AboutUs";
import ContactForm from "./pages/Contact";
function App() {
  return (
    <Flex
      position={"relative"}
      bg={"white.dark"}
      minH={"100vh"}
      h={"auto"}
      w={"100%"}
      px={{ base: "4", sm: "12", md: "24" }}
      color={"gray.dark"}
      display={'flex'}
      flexDirection={'column'}
    >
      <Header />
      <Divider  bg={'gray.light'}/>
      <Box minH={'500px'}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vehicles" element={<Vehicles />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactForm />} />
      </Routes>
      </Box>
      <Box position={"fixed"} bottom={"15px"} right={"15px"}>
        <a href="whatsapp://send?phone=9136802972&text=Hello, I am looking for bike on rent.">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/2062095_application_chat_communication_logo_whatsapp_icon.svg/2048px-2062095_application_chat_communication_logo_whatsapp_icon.svg.png"
            w={"10"}
            h={"10"}
          />
        </a>
      </Box>
      <Box position={"fixed"} bottom={"65px"} right={"15px"}>
      <a href="tel:9136802972">
        <Image
            src="https://cdn-icons-png.flaticon.com/512/217/217887.png"
            w={"10"}
            h={"10"}
          />
        </a>
      </Box>
      <Footer />
    </Flex>
  );
}

export default App;
