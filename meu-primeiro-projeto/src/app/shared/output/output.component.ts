import { Component, EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent {
  @Output() public enviarDados = new EventEmitter();
  public list:Array<{nome:string,idade:number}> = [
    {nome:"Bruno",idade:21},
    {nome:"Julia",idade:21},
  ];
  public getDados(event:number) {
    this.enviarDados.emit(this.list[event]);
    console.log(this.list[event]);
  }
}
