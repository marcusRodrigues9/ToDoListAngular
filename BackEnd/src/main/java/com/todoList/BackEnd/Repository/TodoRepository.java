package com.todoList.BackEnd.Repository;

import com.todoList.BackEnd.model.Todo;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface TodoRepository extends MongoRepository<Todo, String> {

}
