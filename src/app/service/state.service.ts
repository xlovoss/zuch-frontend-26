import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root' // Das macht den State überall verfügbar
})
export class StateService {
  // Wir nennen die Variable einfach 'state', wie gewünscht
  // Hier kannst du deine Startwerte eintragen (z.B. Punkte, Level, etc.)
  readonly state = signal({
    score: 0,
    active: false,
    currentLevel: 1
  });

  // Beispiel-Methoden, um den State zu ändern
  updateScore(points: number) {
    this.state.update(current => ({
      ...current,
      score: current.score + points
    }));
  }

  reset() {
    this.state.set({
      score: 0,
      active: false,
      currentLevel: 1
    });
  }
}