import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  value = '';
  completed: boolean = false;
  onEnter(value: string) { this.value = value; }

  constructor() { }

  ngOnInit(): void {
  }

}
