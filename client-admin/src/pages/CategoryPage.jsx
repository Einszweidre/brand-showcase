import {
  Box,
  Button,
  Text,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../components/loading";
import Navbar from "../layouts/navbar";
import { fetchCategories } from "../store/actions/actionCreator";

const CategoryPage = () => {
  const { categories } = useSelector((state) => state.category);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories())
      .then()
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <Navbar />
      <Box p={4} height={"100vh"} width={"205vh"}>
        <Text fontSize={"3xl"} align={"center"} fontWeight={"bold"} mb={10}>
          Category
        </Text>
        <Button colorScheme="teal" mb={4}>
          Add New Category
        </Button>

        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>No</Th>
              <Th>Category Name</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {categories.map((category, index) => (
              <Tr key={category.id}>
                <Td>{index + 1}</Td>
                <Td>{category.name}</Td>
                <Td>
                  <Button colorScheme="blue" size="sm" mr={2}>
                    Edit
                  </Button>
                  <Button colorScheme="red" size="sm">
                    Delete
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </>
  );
};

export default CategoryPage;
