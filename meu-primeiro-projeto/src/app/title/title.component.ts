import { Component,OnInit, OnChanges, Input,DoCheck } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit, OnChanges{
   @Input() public title:string = "Oi";
   ngOnInit():void{}
   ngOnChanges():void{
      console.log("Foi Alterado!");
   }
}
