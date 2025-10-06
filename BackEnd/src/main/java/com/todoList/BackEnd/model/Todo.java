package com.todoList.BackEnd.model;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
@Data
public class Todo {
    @Id
    private String id;
    private String task;
    private boolean completed;

    public void setId(String id) {
    }
}
