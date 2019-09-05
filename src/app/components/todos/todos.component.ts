import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';
import { TodosService } from '../../services/todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[];

  constructor(private todoService: TodosService) { }

  ngOnInit() {
    this.todoService.getTodos().subscribe( todos => {
      this.todos = todos;
    })
  }

  deleteTodo(todo:Todo) {
    //Delete from UI
    this.todos = this.todos.filter( t => t.id !== todo.id );

    //Delete from server
    this.todoService.deleteTodo(todo).subscribe()
  } 

  //Add Todo
  addTodo(todo : Todo) {
    this.todoService.addTodo(todo).subscribe( todo => {
      this.todos.push(todo);
    })
  }
}
