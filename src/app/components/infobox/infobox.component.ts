import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-infobox',
  templateUrl: './infobox.component.html',
  styleUrls: ['./infobox.component.scss']
})
export class InfoboxComponent implements OnInit {
  numbers = [1,2];
  constructor() { 
    this.numbers = [1,2,3,4,5,6,7,8,9,10];
  }

  ngOnInit(): void {
  }

}
