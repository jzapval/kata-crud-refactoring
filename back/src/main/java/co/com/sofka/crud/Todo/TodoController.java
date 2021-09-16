package co.com.sofka.crud.Todo;

import co.com.sofka.crud.TodoList.TodoList;
import co.com.sofka.crud.TodoList.TodoListDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class TodoController {

    @Autowired
    private TodoService service;

    @GetMapping(value = "api/todos")
    public Iterable<Todo> listTodo(){
        return service.listTodo();
    }
    
    @PostMapping(value = "api/todo")
    public Todo saveTodo(@RequestBody TodoDTO todoDTO){
        return service.saveTodo(todoDTO);
    }

   @PutMapping(value = "api/todo")
    public Todo update(@RequestBody TodoDTO todoDTO){
        if(todoDTO.getId() != null){
            return service.update(todoDTO);
        }
        throw new RuntimeException("No existe el id para actualziar");
    }

    @DeleteMapping(value = "api/{id}/todo")
    public void delete(@PathVariable("id")Long id){
        service.deleteTodo(id);
    }

    @GetMapping(value = "api/{id}/todo")
    public Todo get(@PathVariable("id") Long id){
        return service.getTodo(id);
    }

    @GetMapping(value = "api/todoLists")
    public Iterable<TodoList> listTodoList(){
        return service.listTodoList();
    }

    @PostMapping(value = "api/todoList")
    public TodoList saveTodoList(@RequestBody TodoListDTO todoListDTO){
        return service.saveTodoList(todoListDTO);
    }


    @DeleteMapping(value = "api/{id}/todoList")
    public void deleteTodoList(@PathVariable("id")Long id){
        service.deleteTodoList(id);
    }

    @GetMapping(value = "api/{id}/todoList")
    public TodoList getTodoList(@PathVariable("id") Long id){
        return service.getTodoList(id);
    }
}
