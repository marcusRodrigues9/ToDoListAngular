import { Component, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TodoService } from './todo.service';
export interface TodoItem{
  id?:string;
  task:string;
  completed: boolean;

}
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  todoList: TodoItem[]= [];
  newTask: string="";
  constructor(private todoService: TodoService){}

  ngOnInit(){
    this.todoService.getTask().subscribe(tasks => this.todoList= tasks)
  }
  addTask():void{
    if(this.newTask.trim()!== ''){
      const task: TodoItem = {
        task: this.newTask,
        completed: false
      }
      this.todoService.addTask(task).subscribe(created => {
      this.todoList.push(created)
      this.newTask=''
      })
    }
  }
toggleCompleted(index: number): void {
  const task = this.todoList[index];
  task.completed = !task.completed;

  this.todoService.updateTask(task).subscribe(updatedTask => {
    this.todoList[index] = updatedTask;
  });
}

  deleteTask(id:number):void{
    this.todoList= this.todoList.filter(item => item.id !== id)
    console.log(this.todoList)
    localStorage.setItem('todoList', JSON.stringify(this.todoList))

  }
}
