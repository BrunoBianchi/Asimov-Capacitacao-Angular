import { Component, OnInit, DoCheck, Input } from '@angular/core';

//Interface
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit, DoCheck {
  public list: Array<TaskList> = [];
  public deleteItem(id: number): void {
    this.list.splice(id, 1);
    this.salvarDados();
  }
  public addItem(event: string): void {
    this.list.push({
      task: event,
      checked: false,
      id: Math.floor(Math.random() * 100) % 100,
    });
    this.salvarDados();
  }
  public deletarTodos(): void {
    this.list = [];
  }
  public salvarDados(): void {
    localStorage.setItem('@todo_list', JSON.stringify(this.list));
  }
  constructor() {}
  public validateInput(value:string,index:number):void {
    if(value.length <=0) {
      this.list.splice(index,1);
    }else {
      this.list[index].task =value;
      this.salvarDados();
    }
  }
  ngOnInit(): void {
    let str: any = localStorage.getItem('@todo_list')?.toString();
    this.list = JSON.parse(str);
  }
  ngDoCheck(): void {
    this.list.sort((a,b)=>{return Number(a.checked) - Number(b.checked)|| Number(b.task) -Number(a.task)});
    this.salvarDados();
  }
}
