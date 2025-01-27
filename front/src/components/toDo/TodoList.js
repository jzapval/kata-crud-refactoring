import React, { useContext, useEffect} from 'react';
import Store from '../../store';

const TodoList = ({todoListId}) => {
  const HOST_API = "http://localhost:8080/api";
  const { state: { todo }, dispatch } = useContext(Store);
  const currentList = todo.list.filter((item) => item.todoListId === todoListId );

  useEffect(() => {
    fetch(HOST_API + "/todos")
      .then(response => response.json())
      .then((list) => {
        dispatch({ type: "update-list-todo", list })
      })
  }, [dispatch]);

  const onDelete = (id) => {
    fetch(HOST_API + "/" + id + "/todo", {
      method: "DELETE"
    }).then((list) => {
      dispatch({ type: "delete-todo", id })
    })
  };

  const onEdit = (todo) => {
    dispatch({ type: "edit-todo", item: todo })
  };

  const onChange = (event, todo) => {
    const request = {
      name: todo.name,
      id: todo.id,
      completed: event.target.checked,
      todoListId: todoListId
    };
    fetch(HOST_API + "/todo", {
      method: "PUT",
      body: JSON.stringify(request),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then((todo) => {
        dispatch({ type: "update-todo", item: todo });
      });
  };

  const decorationDone = {
    textDecoration: 'line-through'
  };

  return <div className="mt-3">
    <table className="table table-striped text-center bg bg-light">
        <thead class="">
          <tr className="bg-tercero text-light">
            <th>TAREA</th>
            <th>¿COMPLETADO?</th>
            <th>ACCIONES</th>
          </tr>
        </thead>
        <tbody>
          {currentList.map((todo) => {
            return <tr className="table-success" key={todo.id} style={todo.completed ? decorationDone : {}}>
              <td className="align-middle">{todo.name}</td>
              <td className="align-items-center">
                <input type="checkbox" className="check" defaultChecked={todo.completed} onChange={(event) => onChange(event, todo)}></input>
              </td>
              <td className="text-center">
                <button type="button" onClick={() => onDelete(todo.id)} className="btn btn-danger btn-md"><i class="fas fa-minus-circle text-light"></i></button>
                <button disabled={todo.completed} onClick={() => onEdit(todo)} type="button" className="btn btn-info btn-md ml-1"><i class="fas fa-edit text-light"></i></button>
              </td>
            </tr>
          })}
        </tbody>
      </table>
      <div className={currentList.length === 0 ? "": "d-none"}>
        <h4 className="text-center">No se han creado tareas aún.</h4>
      </div>
  </div>
}

export default TodoList;