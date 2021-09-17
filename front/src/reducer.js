function reducer(state, action) {
  switch (action.type) {
    case "update-todo":
      const todoUpItem = state.todo;
      const listUpdateEdit = todoUpItem.list.map((item) => {
        if (item.id === action.item.id) {
          return action.item;
        }
        return item;
      });
      return {...state, todo: { list: listUpdateEdit, item: {} } };
    case "delete-todo":
      const todoUpDelete = state.todo;
      const listUpdate = todoUpDelete.list.filter((item) => {
        return item.id !== action.id;
      });
      todoUpDelete.list = listUpdate;
      return { ...state, todo: todoUpDelete };
    case "update-list-todo":
      const todoUpList = state.todo;
      todoUpList.list = action.list;
      return { ...state, todo: todoUpList };
    case "edit-todo":
      const todoUpEdit = state.todo;
      todoUpEdit.item = action.item;
      return { ...state, todo: todoUpEdit };
    case "add-todo":
      const todoUp = state.todo.list;
      todoUp.push(action.item);
      return { ...state, todo: { list: todoUp, item: {} } };
    case "add-todoList":
      const todoListUp = state.todoList.list;
      todoListUp.push(action.item);
      return {...state, todoList: { list: todoListUp, item: {} } };
    case "update-list-todoList":
      const todoListUpList = state.todoList;
      todoListUpList.list = action.list;
      return { ...state, todoList: todoListUpList };
    case "delete-todoList":
      const todoListUpDelete = state.todoList;
      const todoListUpdate = todoListUpDelete.list.filter((item) => {
        return item.id !== action.id;
      });
      todoListUpDelete.list = todoListUpdate;
      return { ...state, todoList: todoListUpDelete };
    case "update-errorTodoList":
      return { ...state, errorTodoList: action.error };
    case "update-errorTodo":
      return { ...state, errorTodo: { isError:action.error.isError, id: action.error.id } };    
    default:
      return state;
  }
}

export default reducer;