import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
} from "@chakra-ui/react";

const AddMenuPage = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Form Submission
  };

  return (
    <Box p={4}>
      <Box mb={4}>
        <form onSubmit={handleSubmit}>
          <Box mb={4}>
            <Box fontWeight="bold" fontSize="xl" mb={2}>
              Add New Menu
            </Box>
          </Box>

          <FormControl>
            <FormLabel>Menu Name</FormLabel>
            <Input type="text" placeholder="Enter menu name" />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Category</FormLabel>
            <Select placeholder="Select category">
              <option value="category1">Category 1</option>
              <option value="category2">Category 2</option>
            </Select>
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Image</FormLabel>
            <Input type="text" />
          </FormControl>

          <Button colorScheme="teal" mt={4} type="submit">
            Save
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default AddMenuPage;
