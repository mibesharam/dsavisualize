import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({

  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
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
export class HomeComponent implements OnInit {
  key: number = 0;
  isOpen: boolean = false;
  showTop: boolean;
  constructor() { }
  item: number = 0;
  stack: any[] = [];

  ngOnInit(): void {
  }


  toggle() {
    this.isOpen = !this.isOpen;
  }

  onClickPop() {

    if (this.stack.length > 0) {
      this.showTop = false;
      this.stack.splice(0, 1);
    }
  }
  onClickPush() {
    this.key += 1;
    this.stack.splice(0, 0, { value: this.item, key: this.key });
  }

}
