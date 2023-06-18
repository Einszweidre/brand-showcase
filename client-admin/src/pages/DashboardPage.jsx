import { Box, Flex, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Loading from "../components/loading";
import Navbar from "../layouts/navbar";

const DashboardPage = () => {
  // Replace these counts with your actual data
  const [menuCount, setMenuCount] = useState(0);
  const [categoryCount, setCategoryCount] = useState(0);

  useEffect(() => {
    fetch("http://localhost:3000/menus")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setMenuCount(data.length);
      })
      .catch((error) => {
        console.log(error);
      });

    fetch("http://localhost:3000/categories")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCategoryCount(data.length);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  if (menuCount.length === 0) {
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
