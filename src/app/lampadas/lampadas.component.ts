import { Component, OnInit } from '@angular/core';
import { Lampada } from './_modal/lampada.modal';

@Component({
  selector: 'app-lampadas',
  templateUrl: './lampadas.component.html',
  styleUrls: ['./lampadas.component.css']
})
export class LampadasComponent implements OnInit {  

  lampadas: Lampada[] = [
    {name: "Lampada 1", description: "Lampada sala", status: false},
    {name: "Lampada 1", description: "Lampada sala", status: false},
    {name: "Lampada 1", description: "Lampada sala", status: true},
    {name: "Lampada 1", description: "Lampada sala", status: false},
    {name: "Lampada 1", description: "Lampada sala", status: true},
    {name: "Lampada 1", description: "Lampada sala", status: false}
  ]

  constructor(){
  }

  ngOnInit(): void {
  }

  turnOnOff(event){
    //debugger;
  }
}
