import {
  Box,
  // Button,
  Text,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Loading from "../components/loading";

const CategoryPage = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/categories")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCategories(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (categories.length === 0) {
    return <Loading />;
  }

  return (
    <Box p={4} height={"100vh"} width={"205vh"}>
      <Text fontSize={"3xl"} align={"center"} fontWeight={"bold"} mb={10}>
        Category
      </Text>
      {/* <Button colorScheme="teal" mb={4}>
        Add New Menu
      </Button> */}

      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>No</Th>
            <Th>Category Name</Th>
          </Tr>
        </Thead>
        <Tbody>
          {categories.map((category, index) => (
            <Tr key={category.id}>
              <Td>{index + 1}</Td>
              <Td>{category.name}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default CategoryPage;
