package co.com.sofka.crud.Repository;

import co.com.sofka.crud.Todo.Todo;
import co.com.sofka.crud.TodoList.TodoList;
import org.springframework.data.repository.CrudRepository;

public interface TodoListRepository extends CrudRepository<TodoList, Long> {
}
