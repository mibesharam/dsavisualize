import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LayoutComponent implements OnInit {
  showSidenav: boolean = true;
  constructor(private router: Router) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.showSidenav = !this.showSidenav;
    }, 1000);
  }

  onClickLink(url: string) {
    this.showSidenav = false;
    this.router.navigateByUrl(url);
  }

}
