import create from "zustand";

const useStore = create((set) => ({
  todoList: [
    { id: 1, action: "buy milk" },
    { id: 2, action: "leave family" },
  ],
  addTodo: (todo) =>
    set((state) => ({
      todoList: [
        {
          id: Math.random() * 100,
          action: todo,
        },
        ...state.todoList,
      ],
    })),
  updateTodo: (updateTodo) =>
    set((state) => ({
      todoList: state.todoList.map((todo) => {
        if (todo.id === updateTodo.id) {
          return {
            ...todo,
            id: todo.id,
            action: updateTodo.action,
          };
        }
        return todo;
      }),
    })),
  removeTodo: (id) =>
    set((state) => ({
      todoList: state.todoList.filter((todo) => todo.id !== id),
    })),
}));

export default useStore;
