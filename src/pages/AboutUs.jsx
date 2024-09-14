import { Box, Heading, Text, Image, Flex, VStack } from '@chakra-ui/react';

const AboutUs = () => {
  return (
    <Box maxW="7xl" mx="auto">
      <Heading as="h1" size="2xl" textAlign="center" my="4">
        About Us
      </Heading>

      <Flex direction={{ base: 'column', md: 'row' }} alignItems="center" mb="10">
        <Box flex="1" textAlign="center">
          <Image
            borderRadius="lg"
            src="/Logo.png"
            alt="Migratory Travels"
            objectFit="cover"
            maxH="400px"
            mx="auto"
          />
        </Box>
        <VStack flex="1" spacing="5" px={{ base: '0', md: '10' }} alignItems="start">
          <Text fontSize="lg">
            At Migratory Travels, we believe in the power of exploration and the freedom of the open road. Founded in 2019, our mission has been to provide top-quality bikes for rent, allowing adventurers of all kinds to discover new places, create unforgettable memories, and experience the world from a unique perspective.
          </Text>
          <Text fontSize="lg">
            Migratory Travels was born out of a passion for travel and a love for biking. Our founder, an avid traveler and cyclist, saw an opportunity to merge these two passions into a business that could help others experience the joy and freedom of biking. Since our inception, we have been dedicated to making travel accessible and enjoyable for everyone.
          </Text>
        </VStack>
      </Flex>

      <Box mb="10">
        <Heading as="h2" size="xl" mb="5">
          What We Offer
        </Heading>
        <Text fontSize="lg" mb="2">
          We offer a wide range of bikes to suit every need and preference. Whether you’re a seasoned cyclist looking for a high-performance road bike or a casual rider seeking a comfortable cruiser for a leisurely day out, we have the perfect bike for you. Our fleet is meticulously maintained and regularly updated to ensure you have a smooth and safe ride.
        </Text>
      </Box>

      <Box mb="10">
        <Heading as="h2" size="xl" mb="5">
          Why Choose Migratory Travels?
        </Heading>
        <Text fontSize="lg" mb="2">
          <strong>Quality Bikes:</strong> We pride ourselves on offering only the best bikes in excellent condition. Each bike undergoes regular maintenance and thorough checks before every rental.
        </Text>
        <Text fontSize="lg" mb="2">
          <strong>Affordable Rates:</strong> We believe that everyone should have the chance to explore, which is why we offer competitive pricing and flexible rental options.
        </Text>
        <Text fontSize="lg" mb="2">
          <strong>Exceptional Service:</strong> Our team is passionate about biking and travel. We are here to provide you with personalized recommendations, route suggestions, and support throughout your rental experience.
        </Text>
        <Text fontSize="lg" mb="2">
          <strong>Convenience:</strong> With multiple rental locations and easy booking options, getting a bike from Migratory Travels is hassle-free and convenient.
        </Text>
      </Box>

      <Box mb="10">
        <Heading as="h2" size="xl" mb="5">
          Our Vision
        </Heading>
        <Text fontSize="lg">
          Our vision is to inspire and enable more people to explore the world on two wheels. We aim to be the go-to destination for bike rentals, offering unparalleled service and a wide selection of bikes to meet the diverse needs of our customers.
        </Text>
      </Box>

      <Box textAlign="center">
        <Text fontSize="2xl" fontWeight="bold">
          Happy Riding!
        </Text>
        <Text fontSize="lg">The Migratory Travels Team</Text>
      </Box>
    </Box>
  );
};

export default AboutUs;
