import {
  Flex,
  HStack,
} from "@chakra-ui/react";
import Card from "../components/Card";

const Vehicles = () => {
  const bikes = [
    {
      img:"/Bullet.jpeg",
      name:"Royal Enfield classic 350",
      price:1500
    },
    {
      img:"/Activa.jpeg",
      name:"Activa",
      price:500
    },
    {
      img:"/Activa2.jpeg",
      name:"Activa",
      price:500
    },
    {
      img:"/Bullet.jpeg",
      name:"Royal Enfield classic 350",
      price:1500
    },
    {
      img:"/Activa.jpeg",
      name:"Activa",
      price:500
    },
    {
      img:"/Activa2.jpeg",
      name:"Activa",
      price:500
    }
  ]
  return (
    <HStack mt={"4"}>
      <Flex gap={"4"}  w={'full'} flexWrap={"wrap"} justifyContent={'center'}>
        {
          bikes.map((bike , index) => (
            <Card key={index} img={bike.img} price={bike.price} name={bike.name}/>
          ))
        }
      </Flex>
    </HStack>
  );
};

export default Vehicles;
