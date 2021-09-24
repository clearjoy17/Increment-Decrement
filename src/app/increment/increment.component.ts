import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'increment',
  templateUrl: './increment.component.html',
  styleUrls: ['./increment.component.css']
})
export class IncrementComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  randomize =0;


  increment() {
    this.randomize = this.randomize + Number(( Math.random()*10 ).toFixed())
  }

  decrement() {
    this.randomize = this.randomize - Number((Math.random()*10 ).toFixed())
  }

}
