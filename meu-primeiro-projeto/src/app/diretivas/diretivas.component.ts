import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas',
  templateUrl: './diretivas.component.html',
  styleUrls: ['./diretivas.component.css']
})
export class DiretivasComponent implements OnInit {
  public condition:boolean = true;
  public nome:string = "dener";
  public cond:boolean = true;
  public list:Array<{nome:string}>  = [
    {nome:"item1"},
    {nome:"item2"}
  ];
  constructor() {}

  ngOnInit(): void {
    setInterval(()=>{
      if(this.condition == true) {
        this.condition = false;
      }else {
        this.condition = true;
      }
    },3000)
  }
  public onClick():void{
    if(this.cond == true) {
      this.cond = false;
    }else {
      this.cond = true;
    }  
  }
  public addList():void {
    this.list.push({nome:"teste"})

  }
  public onClickEventList(arg:number):void {
    this.list.splice(arg,1);
  } 
}
