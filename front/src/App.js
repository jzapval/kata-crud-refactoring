import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import TodoListForm from "./components/todoList/TodoListForm";
import TodoListList from "./components/todoList/TodoListList";
import StoreProvider from "./provider";

function App() {
  return (
    <StoreProvider>
      <div className="container border my-3 w-75 p-3 bg bg-light">
        <h2 className="my-3 text-center">To-Do LISTA</h2>
        <TodoListForm />
        <div className="container mt-5">
          <TodoListList />
        </div>
      </div>
    </StoreProvider>
  );
}

export default App;
