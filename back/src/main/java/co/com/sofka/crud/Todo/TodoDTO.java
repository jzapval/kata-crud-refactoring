package co.com.sofka.crud.Todo;

public class TodoDTO {
    private Long id;
    private String name;
    private boolean completed;
    private Long todoListId;

    public TodoDTO() {
        super();
    }

    public TodoDTO(Long id, String name, boolean completed, Long todoListId) {
        this.id = id;
        this.name = name;
        this.completed = completed;
        this.todoListId = todoListId;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public boolean isCompleted() {
        return completed;
    }

    public void setCompleted(boolean completed) {
        this.completed = completed;
    }

    public Long getTodoListId() {
        return todoListId;
    }

    public void setTodoListId(Long todoListId) {
        this.todoListId = todoListId;
    }
}
