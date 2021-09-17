import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import TodoListForm from "./components/todoList/TodoListForm";
import TodoListList from "./components/todoList/TodoListList";
import StoreProvider from "./provider";

function App() {
  return (
    <StoreProvider>
      <div className="container-fluid border bg bg-light">
        <h2 className="my-5 text-center ">TO-DO</h2>
        <TodoListForm />
        <div className="container mt-5 mb-5">
          <TodoListList />
        </div>
      </div>
    </StoreProvider>
  );
}

export default App;
