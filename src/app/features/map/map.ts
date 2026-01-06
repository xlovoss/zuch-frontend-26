import { Component, inject, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { StateService } from '../../state.service';

import * as p from 'pixi.js';

@Component({
  selector: 'app-map',
  imports: [],
  templateUrl: './map.html',
  styleUrl: './map.css',
})
export class Map implements AfterViewInit {
  @ViewChild('pixiCanvas') pixiCanvas!: ElementRef<HTMLCanvasElement>;
  stateService = inject(StateService);

  async ngAfterViewInit() {
    // PixiJS-Anwendung erstellen
    const app = new p.Application();
    await app.init({
      canvas: this.pixiCanvas.nativeElement,
      backgroundColor: 0x1099bb,
    });

    const rectangle = new p.Graphics();
    rectangle.rect(200, 475, 200, 150);
    rectangle.fill(0xfff000);

    // Rechteck zur Bühne hinzufügen
    app.stage.addChild(rectangle);
  }
}
