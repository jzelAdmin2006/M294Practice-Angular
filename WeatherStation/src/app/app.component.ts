import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  temperatureCelsiusSubject = new BehaviorSubject<number>(0);

  temperatureFahrenheit$ = this.temperatureCelsiusSubject.pipe(
    map((temp) => this.roundTo2Digits(temp * 1.8 + 32))
  );

  temperatureKelvin$ = this.temperatureCelsiusSubject.pipe(
    map((temp) => this.roundTo2Digits(temp + 273.15))
  );

  isFreezing$ = this.temperatureCelsiusSubject.pipe(map((temp) => temp < 0));

  colder(): void {
    this.temperatureCelsiusSubject.next(
      this.temperatureCelsiusSubject.value - 1
    );
  }

  warmer(): void {
    this.temperatureCelsiusSubject.next(
      this.temperatureCelsiusSubject.value + 1
    );
  }

  private roundTo2Digits(value: number): number {
    return Math.round(value * 100) / 100;
  }
}
