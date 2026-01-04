import { Component } from '@angular/core';
import * as pixy from 'pixi.js';
import { ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-bunny',
  imports: [],
  templateUrl: './bunny.html',
  styleUrl: './bunny.css',
})
export class Bunny {

    @ViewChild('pixiCanvas') pixiCanvas!: ElementRef<HTMLCanvasElement>;

  async ngAfterViewInit() {
    // PixiJS-Anwendung erstellen
    const app = new pixy.Application();
     await app.init({
      canvas: this.pixiCanvas.nativeElement,
      
      backgroundColor: 0x1099bb,
    });

  const rectangle = new pixy.Graphics();
  rectangle.rect(200, 475, 200, 150);
  rectangle.fill(0xff0000);

    // Rechteck zur Bühne hinzufügen
   app.stage.addChild(rectangle);
  }
}


