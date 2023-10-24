import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-atributos',
  templateUrl: './diretivas-atributos.component.html',
  styleUrls: ['./diretivas-atributos.component.css']
})
export class DiretivasAtributosComponent implements OnInit {
  public valor:boolean = true;
  public list:Array<{nome:string}> = [{nome:"teste"}];
  public date:Date = new Date();
  public nome:string = "";
  public altura:string = "20px";
  ngOnInit(): void {
    setInterval(()=>{
      if(this.valor) {
        this.valor = false;
        this.altura = "green"
      }else {
        this.valor = true;
        this.altura = "purple"
      }
    },2000) 
  }
  public salvar():void {
    this.list.push({nome:this.nome});
    this.nome = "";
  }
}
