import React, { useContext, useEffect } from "react";
import Store from "../../store";
import TodoForm from '../toDo/TodoForm';
import TodoList from '../toDo/TodoList';

const TodoListList = () => {
  const HOST_API = "http://localhost:8080/api";
  const { state: { todoList }, dispatch } = useContext(Store);
  const currentList = todoList.list;

  useEffect(() => {
    fetch(HOST_API + "/todoLists")
      .then((response) => response.json())
      .then((list) => {
        dispatch({ type: "update-list-todoList", list });
      });
  }, [dispatch]);

  const onDelete = (id) => {
    fetch(HOST_API + "/" + id + "/todoList", {
      method: "DELETE",
    }).then((todoList) => {
      dispatch({ type: "delete-todoList", id });
    });
  };

  return (
    <div>
      <div>
        {currentList.map((todoList) => {
          return (
            <div className="p-3 my-3 border bg bg-dark"  key={todoList.id}>
              <div className="d-flex justify-content-center mb-4">
                <h4 className="text text-center text-light">{ todoList.name ? todoList.name.toUpperCase() : ""}</h4>
              </div>
                <button type="button" className="btn btn-danger form-control mb-3" onClick={() => onDelete(todoList.id)}>Eliminar Tarea</button>
              <TodoForm todoListId={todoList.id} />
              <TodoList todoListId={todoList.id} />
            </div>
          );
        })}
        <div className={currentList.length === 0 ? "": "d-none"}>No se han creado listas de tareas aún.</div>
      </div>
    </div>
  );
};

export default TodoListList;