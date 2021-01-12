import { Component } from '@angular/core';
import { TodoListComponent } from './to-do-list/to-do-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'to-do-list';
  exibir: boolean = false;

  toggleShow() {
    this.exibir = !this.exibir;
  }
}