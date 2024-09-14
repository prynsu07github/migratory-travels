import { Box, Flex, Text } from "@chakra-ui/react"

const Footer = () => {
    const year = new Date().getFullYear()
  return (
   <Box 
//    position={'absolute'} bottom={'0'} right={'0'} left={'0'} mx={{ base: "4", sm: "12", md: "24" }}
w={'full'}
mt={'4'}
   >
     {/* <Divider  bg={'gray.light'}/> */}
     <Flex justifyContent={'space-between'} alignItems={'center'} py={'5'}>
        <Flex gap={'2'}>
            socials
        </Flex>
        <Flex gap={'2'}>
            <Text>©️All Rights Reserved</Text>
            <Text>{year}</Text>
        </Flex>
     </Flex>
   </Box>
  )
}

export default Footer