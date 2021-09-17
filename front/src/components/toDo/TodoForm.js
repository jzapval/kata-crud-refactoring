import React, { useContext, useRef, useState } from "react";
import Store from "../../store";

const TodoForm = ({ todoListId }) => {
  const HOST_API = "http://localhost:8080/api";
  const formRef = useRef(null);
  const {
    state: { todo, errorTodo },
    dispatch,
  } = useContext(Store);
  const item = todo.item;
  const error = errorTodo;
  const [state, setState] = useState(item);

  const onAdd = (event) => {
    event.preventDefault();

    if (
      /^\d+$|[]|^\W+$/.test(state.name) ||
      state.name === undefined ||
      state.name === ""
    ) {
      dispatch({
        type: "update-errorTodo",
        error: { isError: true, id: todoListId },
      });
    } else {
      dispatch({
        type: "update-errorTodo",
        error: { isError: false, id: null },
      });
      const request = {
        name: state.name,
        id: null,
        completed: false,
        todoListId: todoListId,
      };

      fetch(HOST_API + "/todo", {
        method: "POST",
        body: JSON.stringify(request),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((todo) => {
          dispatch({ type: "add-todo", item: todo });
          setState({ name: "" });
          formRef.current.reset();
        });
    }
  };

  const onEdit = (event) => {
    event.preventDefault();
    if (/^\d+$|[]|^\W+$/.test(state.name) || state.name === "") {
      dispatch({
        type: "update-errorTodo",
        error: { isError: true, id: todoListId },
      });
    } else {
      dispatch({
        type: "update-errorTodo",
        error: { isError: false, id: null },
      });
      const request = {
        name: state.name,
        id: item.id,
        isCompleted: item.isCompleted,
        todoListId: todoListId,
      };

      fetch(HOST_API + "/todo", {
        method: "PUT",
        body: JSON.stringify(request),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((todo) => {
          dispatch({ type: "update-todo", item: todo });
          setState({ name: "" });
          formRef.current.reset();
        });
    }
  };

  return (
    <form className="form-inline d-flex justify-content-center" ref={formRef}>
      <div className="form-group">
        <input
          type="text"
          name="name"
          placeholder="¿Qué piensas hacer?"
          className={
            error && error.id === todoListId
              ? "is-invalid form-control form-control"
              : "form-control"
          }
          defaultValue={todoListId === item.todoListId ? item.name : null}
          onChange={(event) => {
            setState({ ...state, name: event.target.value });
          }}
        ></input>
      </div>

      <button
        type="button"
        className={
          todoListId === item.todoListId
            ? "btn btn-secondary btn-sm ml-2"
            : "d-none"
        }
        onClick={onEdit}
      >
        Actualizar
      </button>
      <button
        type="button"
        className={
          todoListId !== item.todoListId
            ? "btn btn-info btn-md ml-2"
            : "d-none"
        }
        onClick={onAdd}
      >
        Crear Lista
      </button>
    </form>
  );
};

export default TodoForm;
