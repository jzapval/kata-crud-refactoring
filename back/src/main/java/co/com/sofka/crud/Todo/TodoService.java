package co.com.sofka.crud.Todo;

import co.com.sofka.crud.TodoList.TodoList;
import co.com.sofka.crud.TodoList.TodoListDTO;
import co.com.sofka.crud.TodoList.TodoListRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TodoService implements InterfaceTodoService {

    private TodoListRepository todoListRepository;
    private TodoRepository todoRepository;

    @Autowired
    public TodoService(TodoListRepository todoListRepository, TodoRepository todoRepository) {
        this.todoListRepository = todoListRepository;
        this.todoRepository = todoRepository;
    }

    @Override
    public Iterable<Todo> listTodo(){
        return todoRepository.findAll();
    }

    @Override
    public Todo saveTodo(TodoDTO todoDTO){
        Todo todo = new Todo();
        todo.setName(todoDTO.getName());
        todo.setCompleted(todoDTO.isCompleted());
        todo.setTodoListId(todoDTO.getTodoListId());
        return todoRepository.save(todo);
    }

    @Override
    public Todo update(TodoDTO todoDTO){
        Todo todo = todoRepository.findById(todoDTO.getId()).orElseThrow();
        todo.setName(todoDTO.getName());
        todo.setCompleted(todoDTO.isCompleted());
        todo.setTodoListId(todoDTO.getTodoListId());
        return todoRepository.save(todo);
    }

    @Override
    public void deleteTodo(Long id){
        todoRepository.delete(getTodo(id));
    }

    @Override
    public Todo getTodo(Long id){
         return todoRepository.findById(id).orElseThrow();
    }

    @Override
    public Iterable<TodoList> listTodoList(){
        return todoListRepository.findAll();
    }

    @Override
    public TodoList saveTodoList(TodoListDTO todoListDTO){
        TodoList todoList = new TodoList();
        todoList.setName(todoListDTO.getName());
        return todoListRepository.save(todoList);
    }

    @Override
    public void deleteTodoList(Long id){
        todoListRepository.delete(getTodoList(id));
    }

    @Override
    public TodoList getTodoList(Long id){
        return todoListRepository.findById(id).orElseThrow();
    }
}
