package com.todoList.BackEnd.Controller;

import com.todoList.BackEnd.Repository.TodoRepository;
import com.todoList.BackEnd.model.Todo;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/todos/api")
@CrossOrigin(origins = "http://localhost:4200")
public class TodoController {

    private final TodoRepository repository;
    public TodoController(TodoRepository repository) {
        this.repository = repository;
    }
    @GetMapping
    public List<Todo> getAll(){
        return repository.findAll();
    }
    @PostMapping
    public Todo create(@RequestBody Todo todo){
        return repository.save((todo));
    }
    @DeleteMapping("/{id}")
    public void delete(@PathVariable String id){
        repository.deleteById(id);
    }

    @PutMapping("/{id}")
    public Todo update(@PathVariable String id, @RequestBody Todo todo){
        todo.setId(id);
        return repository.save(todo);
    }
}
