import { Component, computed, effect, input, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuItem } from '../custom-sidenav/custom-sidenav.component';
import { CommonModule } from '@angular/common';
import { animate, style, transition, trigger } from '@angular/animations'
import { MaterialModule } from '../material.module';

@Component({
  selector: 'app-menu-item',
  standalone: true,
  animations: [
    trigger('expandContractMenu', [
      transition(':enter', [
        style({ opacity: 0, height: '0px'}),
        animate('400ms ease-in-out', style({ opacity: 1, height: '*'}))
      ]),
      transition(':leave', [
        animate('400ms ease-in-out', style({ opacity: 0, height: '0px'}))
      ])
    ])
  ],
  imports: [MaterialModule, RouterModule, CommonModule],
  templateUrl: './menu-item.component.html',
  styleUrl: './menu-item.component.scss'
})
export class MenuItemComponent {

  item = input.required<MenuItem>();

  collapsed = input(true);

  nestedMenuOpen = signal(true);

  routeHistory = input('');

  toggleNested(){
    if (!this.item().subItems) {
      return;
    }

    this.nestedMenuOpen.set(!this.nestedMenuOpen());
  }


  level = computed(() => this.routeHistory().split('/').length - 1);

  logRoutes = effect(() => console.log(this.routeHistory()));

}
