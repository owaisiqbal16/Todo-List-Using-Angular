import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../models/Todo';
import { TodosService } from '../../services/todos.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();

  onToggle(todo) {
    //toggle in ui
    todo.completed = !todo.completed;
    //toggle on server
    this.todosService.toggleCompleted(todo).subscribe()
  }

  onDelete(todo) {
    this.deleteTodo.emit(todo);
  }

  constructor(private todosService: TodosService) { }

  ngOnInit() {
  }

  setClasses() {
    let classes = {
      todo: true,
      'is-complete': this.todo.completed
    }

    return classes;
  }

}
