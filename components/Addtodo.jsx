import { Button, Flex, FormControl, Input } from "@chakra-ui/react";
import React from "react";

const Addtodo = ({ handleInputs }) => {
  const [todo, setTodo] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleInputs(todo);
    setTodo("");
  };

  return (
    <>
      <FormControl as="form" onSubmit={handleSubmit}>
        <Flex justify="center" direction="column">
          <Input
            type="text"
            value={todo}
            placeholder="Add a todo"
            variant="filled"
            borderColor="blue.200"
            focusBorderColor="blue.400"
            _placeholder={{ color: "gray.600" }}
            onChange={(e) => setTodo(e.target.value)}
          />
          <Button
            type="submit"
            variant="outline"
            colorScheme="teal"
            mt={4}
            _hover={{ bg: "blue.300", color: "gray.200" }}
          >
            Submit
          </Button>
        </Flex>
      </FormControl>
    </>
  );
};

export default Addtodo;
