import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '@lemon/data';

@Component({
  selector: 'lemon-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  @Input() todos: Todo[]

  constructor() { }

  ngOnInit(): void {
  }

}
