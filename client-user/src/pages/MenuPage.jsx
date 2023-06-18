import { useEffect, useState } from "react";
import {
  Box,
  Heading,
  SimpleGrid,
  Text,
  Image,
  Select,
  useColorModeValue,
} from "@chakra-ui/react";
import Navbar from "../layouts/navbar";
import Loading from "../components/loading";
import { useDispatch, useSelector } from "react-redux";
import { fetchMenus } from "../store/actions/actionCreator";

const MenuPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isLoading, setIsLoading] = useState(true);
  const { menus } = useSelector((state) => state.menu);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMenus())
      .then()
      .finally(() => {
        setIsLoading(false);
      });
  });

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredProducts =
    selectedCategory === "All"
      ? menus
      : menus.filter((menu) => menu.Category.name === selectedCategory);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <Navbar />
      <Box p={8} width={"205vh"}>
        <Heading as="h1" size="xl" mb={6}>
          Our Menus
        </Heading>
        <Box mb={4}>
          <Select
            value={selectedCategory}
            onChange={handleCategoryChange}
            maxWidth="200px"
          >
            <option value="All">All Categories</option>
            <option value="donut">Donut</option>
            <option value="jclub">Jclub</option>
            <option value="jcoffee">Jcoffee</option>
            <option value="jcool">Jcool</option>
            <option value="other">Other</option>
          </Select>
        </Box>
        <SimpleGrid columns={[1, 2, 3, 4]} spacing={6}>
          {filteredProducts.map((menu) => (
            <Box
              key={menu.slug}
              p={6}
              borderRadius="md"
              borderWidth={1}
              borderColor={useColorModeValue("gray.200", "gray.700")}
            >
              <Image src={menu.mainImg} alt={menu.name} mb={4} />
              <Text fontSize="xl" fontWeight="bold" mb={2}>
                {menu.name}
              </Text>
              <Text color={useColorModeValue("gray.600", "gray.400")}>
                {menu.price}
              </Text>
              <Text color={useColorModeValue("gray.600", "gray.400")}>
                {menu.description}
              </Text>
              <Text mt={4} color={useColorModeValue("blue.500", "blue.300")}>
                {menu.Category.name}
              </Text>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </>
  );
};

export default MenuPage;
