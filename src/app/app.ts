import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

export interface TodoItem{
  id:number;
  task:string;
  completed: boolean;
}
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  todoList: TodoItem[]= [];
  newTask: string="";
}
