import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  value = '';
  completed: boolean = false;
  taskList: any[] = []

  addTask(value: string) {
    this.taskList.push({ id: this.taskList.length, name: value }) 
  }

  removeTask(id: number) {
    this.taskList= this.taskList.filter(value=>value.id!== id)
  }

  markDone(value: any) {
    value.completed = !value.completed
    value.completed === true ?
      this.taskList.push(this.taskList.splice(this.taskList.indexOf(value), 1)[0]) :
      this.taskList.unshift(this.taskList.splice(this.taskList.indexOf(value), 1)[0])

  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
