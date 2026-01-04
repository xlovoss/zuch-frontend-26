import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import * as PIXI from 'pixi.js';
import { Bunny } from './features/bunny/bunny';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Bunny],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Hannaa is also running');
}
