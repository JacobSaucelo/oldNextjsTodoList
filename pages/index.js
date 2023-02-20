import { Center, Flex, Heading, VStack } from "@chakra-ui/react";
import Addtodo from "../components/Addtodo";
import TodoList from "../components/TodoList";
import useStore from "../store";

export default function Index() {
  const addTodo = useStore((state) => state.addTodo);
  const updateTodo = useStore((state) => state.updateTodo);

  const handleInputs = (todo) => {
    if (todo) {
      if (!todo.id) {
        return addTodo(todo);
      }
      return updateTodo(todo);
    }
  };

  return (
    <>
      <Flex h="100vh" justify="center" bg="gray.100">
        <Center>
          <VStack>
            <Heading size="2xl" mb={5}>
              Todo app
            </Heading>
            <TodoList handleInputs={handleInputs} />
            <Addtodo handleInputs={handleInputs} />
          </VStack>
        </Center>
      </Flex>
    </>
  );
}
