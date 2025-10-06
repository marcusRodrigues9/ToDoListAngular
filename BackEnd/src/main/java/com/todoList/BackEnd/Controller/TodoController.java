package com.todoList.BackEnd.Controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/todos/api")
@CrossOrigin(origins = "http://localhost:4200")
public class TodoController {

}
