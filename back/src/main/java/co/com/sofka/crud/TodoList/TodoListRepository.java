package co.com.sofka.crud.TodoList;

import co.com.sofka.crud.Todo.Todo;
import org.springframework.data.repository.CrudRepository;

public interface TodoListRepository extends CrudRepository<TodoList, Long> {
}
