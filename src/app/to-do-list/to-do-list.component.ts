import { Component, OnInit } from '@angular/core';
import { TodoItem } from './todoItem';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class TodoListComponent {

  newTask: string = '';

  tasks: TodoItem[] = [
  ];

  addTask() {
    this.tasks.push({
      description: this.newTask,
      done: false
    })
  }

  deleteTask(i: number) {
    this.tasks.splice(i, 1);
  }
}