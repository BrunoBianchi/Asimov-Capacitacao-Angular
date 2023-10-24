import { Component } from '@angular/core';

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  styleUrls: ['./data-biding.component.css']
})
export class DataBidingComponent {
  public nome:string ="Bruno";
  public idade:number = 21;
  public checkedDisabled:boolean = true;
  public imgSrc:string = "https://logosmarcas.net/wp-content/uploads/2020/12/Discord-Logo.png";
  public imgAlt:string = "terste";
  public position:{x:number,y:number} = {x:0,y:0};
  public alertaInfo(arg:MouseEvent):void {
    console.log(arg);
  }
  public mouseMoveTeste(arg:MouseEvent) {
    console.log(arg);
    this.position.x = arg.offsetX;
    this.position.y = arg.offsetY;
  }
}
