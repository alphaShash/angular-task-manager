import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  value = '';
  completed: boolean = false;
  selectedId: number = -1
  taskList: any[] = []
  addTask(value: string) {
    this.taskList.push({ id: this.taskList.length, name: value })
    console.log(this.taskList)
  }
  removeTask(id: number) {
    
    this.taskList= this.taskList.filter(value=>value.id!== id)
    console.log(this.taskList);
    
  }
  markDone(id: number) {
  this.selectedId = id
}
  constructor() { }

  ngOnInit(): void {
  }

}
