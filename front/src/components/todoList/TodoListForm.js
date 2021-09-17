import React, { useContext, useRef, useState } from "react";
import Store from "../../store";

const TodoListForm = () => {
  const HOST_API = "http://localhost:8080/api";
  const formRef = useRef(null);
  const {
    state: { todoList, errorTodoList },
    dispatch,
  } = useContext(Store);
  const item = todoList.item;
  const error = errorTodoList;
  const [state, setState] = useState(item);

  const onAdd = (event) => {
    event.preventDefault();
    if (
      /^\d+$|[]|^\W+$/.test(state.name) ||
      state.name === undefined ||
      state.name === ""
    ) {
      dispatch({ type: "update-errorTodoList", error: true });
    } else {
      dispatch({ type: "update-errorTodoList", error: false });
      const request = {
        name: state.name,
        id: null,
      };

      fetch(HOST_API + "/todoList", {
        method: "POST",
        body: JSON.stringify(request),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((todoList) => {
          dispatch({ type: "add-todoList", item: todoList });
          setState({ name: "" });
          formRef.current.reset();
        });
    }
  };

  return (
    <form className="form-inline d-flex justify-content-center mt-5" ref={formRef}>
      <div className="form-group">
        <input
          type="text"
          name="name"
          placeholder="Nombre de la lista"
          className={
            error ? "is-invalid form-control form-control" : "form-control"
          }
          defaultValue={item.name}
          onChange={(event) => {
            setState({ ...state, name: event.target.value });
          }}
        ></input>
        <button
        type="button"
        className="btn btn-info btn-md ml-2"
        onClick={onAdd}
      >
        Nueva lista
      </button>
      </div>      
    </form>
  );
};

export default TodoListForm;
