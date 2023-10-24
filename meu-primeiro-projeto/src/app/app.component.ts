import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
  <app-new-component></app-new-component>
  <app-input [contador]="addvalue"></app-input>
  <button (click)="add()">Add</button>
  <ng-template [ngIf]="getDados">
    <h1>{{getDados.nome}}</h1>
    <h1>{{getDados.idade}}</h1>
  </ng-template>
  <app-output (enviarDados)="setDados($event)"> </app-output>
  <router-outlet></router-outlet>
`
})
export class AppComponent implements OnInit{
destruir = false;
public addvalue:number = 0;
  constructor() { }
  
  ngOnInit(): void {
    setInterval(()=>{console.log(1)},5000)
  }
  ngDoCheck():void{
    console.log("Conteudo Checado!")
  }
  public add():void {
    this.addvalue +=1;
  }
  public getDados: {nome:string,idade:number} | undefined;

  public setDados(event:{nome:string,idade:number}):void {
    this.getDados = event;
  }
}
