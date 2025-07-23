import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {NgxTypedJsModule} from 'ngx-typed-js';

@Component({
  selector: 'app-hero',
  imports: [NgxTypedJsModule, RouterLink],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  
}
