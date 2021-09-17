import React, { useReducer } from 'react';
import Store from './store';
import reducer from './reducer';

const initialState = {
  todo: { list: [], item: {} },
  todoList: { list: [], item: {} },
  errorTodoList: false,
  errorTodo: { isError:false, id: null }
};

const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <Store.Provider value={{ state, dispatch }}>
    {children}
  </Store.Provider>
}

export default StoreProvider ;