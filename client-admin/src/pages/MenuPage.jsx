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
import Navbar from "../layouts/navbar";
import { useDispatch, useSelector } from "react-redux";
import { fetchMenus } from "../store/actions/actionCreator";

const MenuPage = () => {
  const { menus } = useSelector((state) => state.menu);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  function handleEdit(id) {}

  function handleDelete(id) {}

  useEffect(() => {
    dispatch(fetchMenus())
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
                <Td>{menu.Category.name}</Td>
                <Td>{menu.User.email}</Td>
                <Td>{menu.mainImg}</Td>
                <Td>
                  <Button
                    onClick={handleEdit}
                    colorScheme="blue"
                    size="sm"
                    mr={2}
                  >
                    Edit
                  </Button>
                  <Button onClick={handleDelete} colorScheme="red" size="sm">
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

export default MenuPage;
