import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { RouterModule, Routes } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

import { HomeComponent } from 'src/app/views/home/home.component';
import { FormsModule } from '@angular/forms';
import { StackComponent } from 'src/app/views/stack/stack.component';
const route: Routes = [
  // url:home
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'stack',
        component: StackComponent
      }
    ]
  }
]

@NgModule({
  declarations: [
    LayoutComponent,
    StackComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    RouterModule.forChild(route)
  ]
})
export class LayoutModule { }
