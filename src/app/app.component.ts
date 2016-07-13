import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

require('css/manifest.js');

@Component({
  selector: 'my-app',
  directives: [ROUTER_DIRECTIVES],
  templateUrl: './app.component.html',
  styles: [require('./app.component.scss').toString()]
})
export class AppComponent {}