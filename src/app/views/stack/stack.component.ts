import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-stack',
  templateUrl: './stack.component.html',
  styleUrls: ['./stack.component.scss'],
  animations: [
    trigger('openClose', [
      state('open', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('closed', style({
        height: '100px',
        opacity: 0.5,
        backgroundColor: 'green'
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ])

    ,
    trigger('stackAnim', [
      transition(':enter', [
        style({ opacity: 0, top: '-100px' }),
        animate('500ms', style({ opacity: 1, top: '0px' }))
      ]),
      transition(':leave', [
        animate('500ms', style({ transformOrigin: 'center', transform: 'rotateZ(45deg) translateX(500px) translateY(-500px)', opacity: 0 }))
      ])
    ])
  ]
})
export class StackComponent implements OnInit {
  key: number = 0;
  arraySize: number = 5;
  isOpen: boolean = false;
  showTop: boolean;
  item: string = "0";
  stack: any[] = [];
  arraySizeDisabled: boolean = true;
  top: number = -1;
  autoIncrement: boolean = true;
  logs: string[] = [];

  constructor(private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.logs.push('Program started')
  }

  toggle() {
    this.isOpen = !this.isOpen;
  }

  onClickPop() {

    if (this.stack.length > 0) {
      this.showTop = false;
      this.stack.splice(0, 1);
      this.top = this.stack.length - 1;
      this.logs.push(`Item Pushed | Top : ${this.top}`)
    } else {
      this.logs.push(`Stack Underflow | Top : ${this.top}`)
      this.snackBar.open('Stack Underflow', 'Okay', { duration: 2000 });
    }

  }
  onClickPush() {
    if (this.stack.length < this.arraySize) {
      this.key += 1;
      this.stack.splice(0, 0, { value: this.item, key: this.key });
      this.top = this.stack.length - 1;
      this.logs.push(`Item Pushed | Top : ${this.top}`)

      //updating value if input value is single char
      if (this.item.length == 1 && this.autoIncrement) {
        const ascii = this.item.charCodeAt(0);
        this.item = String.fromCharCode(ascii + 1);
      }
    } else {
      this.logs.push(`Stack Overflow | Top : ${this.top}`)
      this.snackBar.open('Stack Overflow', 'Okay', { duration: 2000 });
    }
  }

  onClickEditArraySize() {
    this.arraySizeDisabled = false;
  }

  onChangeArraySize(event) {
    this.arraySizeDisabled = true;
    if (event.target.value && event.target.value > 0) {
      this.stack = [];
      this.item = '0';
    } else {
      this.snackBar.open('Array Size cant less then 1', 'Okay', { duration: 2000 });
      this.arraySize = 1;
    }
  }

  onClickResetProgram() {
    this.stack = [];
    this.top = -1;
    this.logs = ['Program started']
    this.item = '0';
  }

}
