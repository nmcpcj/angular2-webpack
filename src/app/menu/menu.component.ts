// app/weapons.component.ts
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  directives: [ROUTER_DIRECTIVES],
  templateUrl: './menu.component.html',
  styles: [require('./menu.component.scss').toString()]
})
export class MenuComponent {
  componentName = 'MenuComponent';
  menus: Array<any>;
  active:string = '';

  constructor(private router:Router) {
    
    this.menus = [
      { name: 'users', target: 'users' }
    ];
  }

  ngOnInit() {
    this.active = this.router.url.replace(/[^A-Z0-9]+/ig, "");
  }

  ngOnDestroy() {}

  menuSelect(name:string) {}
}