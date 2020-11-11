import { Component, OnInit } from '@angular/core';
import { Lampada } from './_modal/lampada.modal';

@Component({
  selector: 'app-lampadas',
  templateUrl: './lampadas.component.html',
  styleUrls: ['./lampadas.component.css']
})
export class LampadasComponent implements OnInit {  

  lampadas: Lampada[] = [
    {id: 1, name: "Lampada 1", description: "Lampada sala", status: false, pino: 1},
    {id: 2, name: "Lampada 2", description: "Lampada sala", status: false, pino: 2},
    {id: 3, name: "Lampada 3", description: "Lampada sala", status: true, pino: 3},
    {id: 4, name: "Lampada 4", description: "Lampada sala", status: false, pino: 4}
  ]

  addLampada = false;
  newLamp = new Lampada();

  constructor(){
  }

  ngOnInit(): void {
  }

  turnOnOff(event){
    let index = this.lampadas.indexOf(event);
    this.lampadas[index].status = !this.lampadas[index].status;
  }

  adicionarLampada(){
    this.addLampada = !this.addLampada;
  }
}
