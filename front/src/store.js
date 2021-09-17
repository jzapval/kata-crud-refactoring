import React, {createContext } from 'react';

const initialState = {
  todo: { list: [], item: {} },
  todoList: { list: [], item: {} },
  errorTodoList: false,
  errorTodo: { isError:false, id: null }
};
const Store = createContext(initialState)

export default Store;