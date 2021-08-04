import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  completed: boolean = false;
  taskList: any[] = []
  newTodoForm = this.formBuilder.group({
    todoItem: ''
  })
    
  constructor(
    private formBuilder: FormBuilder
  ) { }
  

  addTask() {
    const value = this.newTodoForm.value.todoItem
    this.taskList.push({ id: this.taskList.length, name: value })
    this.newTodoForm.reset();
    
  }

  removeTask(i: any) {
    this.taskList.splice(i, 1)
    console.log(i);
    
  }

  markDone(value: any) {
    value.completed = !value.completed
    value.completed === true ?
      this.taskList.push(this.taskList.splice(this.taskList.indexOf(value), 1)[0]) :
      this.taskList.unshift(this.taskList.splice(this.taskList.indexOf(value), 1)[0])
  }
  
  

  ngOnInit(): void {
  }

}
