package co.com.sofka.crud.Todo;

import co.com.sofka.crud.TodoList.TodoList;
import co.com.sofka.crud.TodoList.TodoListDTO;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

public interface InterfaceTodoService {

    public Iterable<Todo> listTodo();
    public Todo saveTodo(TodoDTO todoDTO);
    public Todo update(TodoDTO todoDTO);
    public void deleteTodo(Long id);
    public Todo getTodo(Long id);
    public Iterable<TodoList> listTodoList();
    public TodoList saveTodoList(TodoListDTO todoListDTO);
    public void deleteTodoList(Long id);
    public TodoList getTodoList(Long id);
}

