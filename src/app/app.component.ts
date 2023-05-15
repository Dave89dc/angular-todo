import { Component } from '@angular/core';
import { Todo } from './models/todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'angular-todo';

  todos: Todo[] = [
    {
      title: 'Regalo alla nonna',
      description: 'Compra il profumo che le piace tanto',
      priority: 3
    },
    {
      title: 'Compra il pane',
      priority: 1
    }
  ];

  addTodo(newTodo: Todo){
    this.todos.push(newTodo);
  };

}
