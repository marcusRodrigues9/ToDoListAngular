import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
export interface TodoItem{
  id:number;
  task:string;
  completed: boolean;
}
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  todoList: TodoItem[]= [];
  newTask: string="";

  addTask():void{
    if(this.newTask.trim()!== ''){
      const newTodoItem: TodoItem = {
        id: Date.now(),
        task: this.newTask,
        completed: false
      }
      this.todoList.push(newTodoItem)
      this.newTask=''
    }
  }
  toggleCompleted(index:number):void{
    this.todoList[index].completed = !this.todoList[index].completed
  }

  deleteTask(id:number):void{
    this.todoList= this.todoList.filter(item => item.id !== id)
    console.log(this.todoList)
  }
}
