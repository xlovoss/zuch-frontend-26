import { Component, inject } from '@angular/core';
import { StateService } from './state.service'; // Pfad ggf. anpassen

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [],
  templateUrl: './service.html',
  styleUrl: './service.css'
})
export class ServicesComponent {
  // Hier holen wir uns den State
  protected stateService = inject(StateService);

  // Um im HTML direkt auf die Werte zuzugreifen:
  state = this.stateService.state;

  // Beispiel: Eine Methode, die aufgerufen wird, wenn man klickt
  addPoints() {
    this.stateService.updateScore(10);
  }
}