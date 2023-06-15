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
import Loading from "../components/loading";

const MenuPage = () => {
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/menus?_expand=category&_expand=user")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setMenus(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (menus.length === 0) {
    return <Loading />;
  }

  return (
    <Box p={4} height={"auto"} width={"205vh"}>
      <Text fontSize={"3xl"} align={"center"} fontWeight={"bold"}>
        Menu
      </Text>
      <Button colorScheme="teal" mb={4}>
        Add New Menu
      </Button>

      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>No</Th>
            <Th>Menu Name</Th>
            <Th>Category</Th>
            <Th>Created By</Th>
            <Th width={"75px"}>Image</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {menus.map((menu, index) => (
            <Tr key={menu.id}>
              <Td>{index + 1}</Td>
              <Td>{menu.name}</Td>
              <Td>{menu.category.name}</Td>
              <Td>{menu.user.email}</Td>
              <Td>{menu.image}</Td>
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
  );
};

export default MenuPage;
