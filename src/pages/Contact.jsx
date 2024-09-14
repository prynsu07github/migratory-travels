import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  VStack,
  Heading,
} from '@chakra-ui/react';
import { useRef } from 'react';

const ContactForm = () => {
  const ref = useRef()
  return (
    <Box
      bg={'white.dark'}
      p={{ base: 4, md: 8 }}
      borderRadius="md"
      w={{base:'full' , md:"400px"}}
      mx="auto"
      mt={'4'}
      boxShadow={'md'}
    >
      <Heading as="h2" size="xl" mb={6} textAlign="center">
        Contact Us
      </Heading>
      <VStack spacing={4}>
        <FormControl id="name" isRequired>
          <FormLabel>Name</FormLabel>
          <Input
            ref={ref}
            type="text"
            focusBorderColor={'orange.dark'}
            placeholder="Your Name"
          />
        </FormControl>
        <FormControl id="email" isRequired>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            focusBorderColor={"orange.dark"}
            placeholder="Your Email"
          />
        </FormControl>
        <FormControl id="message" isRequired>
          <FormLabel>Message</FormLabel>
          <Textarea
            focusBorderColor={"orange.dark"}
            placeholder="Your Message"
            rows={6}
          />
        </FormControl>
        <Button
          bg={"orange.dark"}
          color="white"
          _hover={{ bg: 'orange.light' }}
          size="lg"
          width="full"
        >
          Submit
        </Button>
      </VStack>
    </Box>
  );
};

export default ContactForm;
