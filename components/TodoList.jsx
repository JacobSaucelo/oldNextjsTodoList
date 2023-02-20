import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  HStack,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import useStore from "../store";

const TodoList = ({ handleInputs }) => {
  const todoList = useStore((state) => state.todoList);
  const removeTodo = useStore((state) => state.removeTodo);
  const [isOpen, setIsOpen] = React.useState(false);
  const [todo, setTodo] = React.useState({
    id: null,
    action: null,
  });

  return (
    <>
      <VStack mb={5}>
        {todoList.length ? (
          todoList.map((todo) => (
            <HStack
              key={todo.id}
              rounded="lg"
              border="1px solid"
              borderColor="blue.300"
              _hover={{ transform: "translate(0px, -5px)" }}
              maxW="300px"
              wordBreak="break-word"
              p={3}
            >
              <Text color="blue.900" textTransform="capitalize">
                {todo.action}
              </Text>
              <EditIcon
                color="red.300"
                _hover={{ color: "red.500" }}
                onClick={() => {
                  setIsOpen(true);
                  setTodo({
                    id: todo.id,
                    action: todo.action,
                  });
                }}
              />
              <DeleteIcon
                color="gray.400"
                _hover={{ color: "gray.500" }}
                onClick={() => removeTodo(todo.id)}
              />
            </HStack>
          ))
        ) : (
          <Heading>No more todo's</Heading>
        )}
      </VStack>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <ModalOverlay>
          <ModalContent>
            <ModalHeader>
              <ModalCloseButton />
            </ModalHeader>
            <ModalBody>
              <form
                id="update-form"
                onSubmit={(e) => {
                  e.preventDefault();
                  handleInputs(todo);
                  setIsOpen(false);
                }}
              >
                <FormControl>
                  <FormLabel>Edit a todo</FormLabel>
                  <Input
                    value={todo.action}
                    name="action"
                    type="text"
                    onChange={(e) =>
                      setTodo({ ...todo, [e.target.name]: e.target.value })
                    }
                  />
                  <FormHelperText>hoy tangina mo bisaya</FormHelperText>
                </FormControl>
              </form>
            </ModalBody>
            <ModalFooter>
              <Button type="submit" form="update-form">
                Submit
              </Button>
            </ModalFooter>
          </ModalContent>
        </ModalOverlay>
      </Modal>
    </>
  );
};

export default TodoList;
