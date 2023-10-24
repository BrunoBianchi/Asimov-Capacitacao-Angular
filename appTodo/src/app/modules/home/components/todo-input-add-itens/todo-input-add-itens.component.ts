import { Component,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-todo-input-add-itens',
  templateUrl: './todo-input-add-itens.component.html',
  styleUrls: ['./todo-input-add-itens.component.css']
})
export class TodoInputAddItensComponent {
  @Output() public taskEventEmitter = new EventEmitter();
  public task:string = "";

  public addTaskItem():void {
    this.taskEventEmitter.emit(this.task);
    this.task = '';
  }
}
