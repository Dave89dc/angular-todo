import { Component, Input } from '@angular/core';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {

  // @inport dice "questa proprietà può essere riempita dall'html, tramite una proprietà"
  @Input() todoArray: Todo[] = []; // invece di "?" lo inizializziamo come array vuoto di default

  deleteTodo(todoToDelete: Todo){
    console.log('Devo cancelare: ', todoToDelete.title);
    this.todoArray = this.todoArray.filter(todo => todo.title !== todoToDelete.title);
  };

}
