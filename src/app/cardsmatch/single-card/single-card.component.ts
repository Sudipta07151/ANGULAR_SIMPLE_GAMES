import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-single-card',
  templateUrl: './single-card.component.html',
  styleUrls: ['./single-card.component.css'],
})
export class SingleCardComponent implements OnInit {
  @Input() card: any = [];
  @Input() flipped = false;
  @Output() clickCard = new EventEmitter();
  constructor() {}

  ngOnInit(): void {
    // console.log(this.card);
  }
  handleClick(card: any) {
    console.log(card);
    this.clickCard.emit(card);
  }
}
