import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-selectornumerico',
  templateUrl: './selectornumerico.component.html',
  styleUrls: ['./selectornumerico.component.css']
})
export class SelectornumericoComponent implements OnInit {
  @Input() minimo = 1;
  @Input() maximo = 100;
  actual = 1;

  constructor() { }

  ngOnInit(): void {
    this.actual = this.minimo;
  }

  incrementar(){
    if (this.actual<this.maximo){
      this.actual++;
    }
  }

  decrementar(){
    if (this.actual>this.minimo){
      this.actual--;
    }
  }

  fijar(i:number){
    if (i >= this.minimo && i <= this.maximo){
      this.actual = i;
    }
  }

}
