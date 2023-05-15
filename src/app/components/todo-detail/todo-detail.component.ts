import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.scss']
})
export class TodoDetailComponent {

  // Input() da padre a figlio, Output() da figlio a padre:

  @Input() todoDetail?: Todo; // in questo caso è meglio mettere "?", piuttosto che un default
  @Output() todoDeleted: EventEmitter<Todo> = new EventEmitter(); // output "EventEmitter", cosa deve mandare, ed è di tipo new EventEmitter()

  deleteTodo(){
    this.todoDeleted.emit(this.todoDetail);
  };

}
