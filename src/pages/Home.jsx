import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Flex
      mt={"4"}
      justifyContent={"space-between"}
      align={"center"}
      minH={"500px"}
      h={'auto'}
      gap={"5"}
      flexDirection={{
        base: "column",
        md: "row",
      }}
    >
      <Box position={'relative'}bg={'orange.light'} borderRadius={'30% 70% 70% 30% / 24% 46% 54% 76% '} >
      <Image src="/bike.png" width={"md"} zIndex={2}/>
        {/* <Box position={'absolute'} borderRadius={'30% 70% 70% 30% / 24% 46% 54% 76% '} left={'0'} right={'0'} top={'0'} bottom={'0'} bg={'purple'} zIndex={0}></Box> */}
      </Box>
      <Box>
        <Box maxW="32rem">
          <Heading mb={4} color={'orange.dark'}>
            Modern online and offline payments for Africa
          </Heading>
          <Text fontSize="xl" color={'brown'}>
            Paystack helps businesses in Africa get paid by anyone, anywhere in
            the world
          </Text>
          <Link to={"/vehicles"}>
            <Button size="lg" bg={"orange.light"} mt="24px" boxShadow={'md'}>
              Rent a vehicle
            </Button>
          </Link>
        </Box>
      </Box>
    </Flex>
  );
};

export default Home;
