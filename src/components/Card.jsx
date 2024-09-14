/* eslint-disable react/prop-types */
import { Box, Button, Flex, Image, Text } from "@chakra-ui/react"

const Card = ({img , price , name}) => {
  const availabel = true
  return (
   <Box className="card" borderRadius={"5px"} p={'2'} boxShadow={"md"}  width={'350px'} bg={'gray.100'} position={'relative'}>
    <Flex h={{base:"200px" , md:"250px"}} alignItems={'center'} overflow={'hidden'}>
    <Image src={img} w={'full'} h={'auto'}/>
      </Flex>
    <Flex justifyContent={"space-between"} mt={"4"} gap={'2'} flexDirection={'column'}>
    <Flex justifyContent={'space-between'} alignItems={'center'} gap={'2'}>
      <Text color={'gray.light'} fontSize={'md'}>{name}</Text>
        <Text color={'green.500'} fontSize={'md'} fontWeight={'bold'}>{price}Rs/Day</Text>
        </Flex>
        <Button bg={'orange.light'} color={'white.dark'} alignSelf={'flex-end'} w={'full'}>Details</Button>
     
    </Flex>
    <Text position={'absolute'} top={'2'} right={'2'} bg={availabel?'green.600':'orange.dark'} px={'2'} py={'1'} borderRadius={'full'} color={'white'} fontSize={'10px'} >{availabel ? "Availabel" :"On-rent"}</Text>
   </Box>
  )
}

export default Card