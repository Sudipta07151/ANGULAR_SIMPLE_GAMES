import { Component, OnInit, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'app-dicerollelement',
  templateUrl: './dicerollelement.component.html',
  styleUrls: ['./dicerollelement.component.css'],
})
export class DicerollelementComponent implements OnInit {
  @Input() dices: any = [];
  indexOne: number = Math.floor(Math.random() * 6);
  indexTwo: number = Math.floor(Math.random() * 6);
  range: number[] = [NaN, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  selected: number = NaN;
  gt: boolean = false;
  lt: boolean = false;
  eq: boolean = false;
  result: boolean = false;
  showResult: boolean = false;

  dicesArray = [
    {
      imageURL: '../../assets/images/one.png',
      value: 1,
    },
    {
      imageURL: '../../assets/images/two.png',
      value: 2,
    },
    {
      imageURL: '../../assets/images/three.png',
      value: 3,
    },
    {
      imageURL: '../../assets/images/four.png',
      value: 4,
    },
    {
      imageURL: '../../assets/images/five.png',
      value: 5,
    },
    {
      imageURL: '../../assets/images/six.png',
      value: 6,
    },
  ];

  constructor() {
    this.getRandomDiceOne();
  }

  ngOnInit(): void {}

  getRandomDiceOne() {
    this.indexOne = Math.floor(Math.random() * 6);
  }

  getRandomDiceTwo() {
    this.indexTwo = Math.floor(Math.random() * 6);
  }

  handleButtonRoll() {
    this.getRandomDiceOne();
    this.getRandomDiceTwo();
    this.result = this.checkResult();
    this.handleComparator('');
    this.selected = NaN;
  }

  handleSelected(event: Event) {
    console.log('change clicked');
    this.selected = parseInt((event.target as HTMLInputElement).value);
  }

  checkResult() {
    const diceOneValue = this.dicesArray[this.indexOne];
    const diceTwoValue = this.dicesArray[this.indexTwo];
    if (this.gt) {
      if (diceOneValue.value + diceTwoValue.value > this.selected) return true;
      else return false;
    } else if (this.lt) {
      if (diceOneValue.value + diceTwoValue.value < this.selected) return true;
      else return false;
    } else if (this.eq) {
      if (diceOneValue.value + diceTwoValue.value === this.selected)
        return true;
      else return false;
    }
    return false;
  }

  handleComparator(operator: string) {
    switch (operator) {
      case '>':
        this.gt = true;
        this.lt = false;
        this.eq = false;
        break;
      case '<':
        this.gt = false;
        this.lt = true;
        this.eq = false;
        break;
      case '=':
        this.gt = false;
        this.lt = false;
        this.eq = true;
        break;
      default:
        this.gt = false;
        this.lt = false;
        this.eq = false;
        break;
    }
  }
}
