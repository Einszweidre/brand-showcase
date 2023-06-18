import { Box, Flex, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Loading from "../components/loading";
import Navbar from "../layouts/navbar";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories, fetchMenus } from "../store/actions/actionCreator";

const DashboardPage = () => {
  // Replace these counts with your actual data
  const { menus } = useSelector((state) => state.menu);
  const { categories } = useSelector((state) => state.category);
  const [isLoading, setIsLoading] = useState(true);
  const [menuCount, setMenuCount] = useState(true);
  const [categoryCount, setCategoryCount] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMenus())
      .then(() => {
        return dispatch(fetchCategories());
      })
      .finally(() => {
        setIsLoading(false);
        setMenuCount(menus.length);
        setCategoryCount(categories.length);
      });
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <Navbar />
      <Flex
        justifyContent="center"
        alignItems="center"
        height="10vh  "
        width={"205vh"}
      >
        <Text fontSize="5xl" fontWeight="bold" mb={2}>
          {"Dashboard"}
        </Text>
      </Flex>
      <Flex
        justifyContent="center"
        alignItems="baseline"
        height="90vh"
        width="205vh"
      >
        <Box
          width="200px"
          height="200px"
          borderWidth="1px"
          borderRadius="lg"
          p={4}
          mr={4}
        >
          <Text fontSize="xl" fontWeight="bold" mb={2}>
            Menu
          </Text>
          <Text fontSize="4xl">{menuCount}</Text>
        </Box>

        <Box
          width="200px"
          height="200px"
          borderWidth="1px"
          borderRadius="lg"
          p={4}
        >
          <Text fontSize="xl" fontWeight="bold" mb={2}>
            Category
          </Text>
          <Text fontSize="4xl">{categoryCount}</Text>
        </Box>
      </Flex>
    </>
  );
};

export default DashboardPage;
