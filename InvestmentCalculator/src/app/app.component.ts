import { Component } from '@angular/core';
import { BehaviorSubject, Observable, combineLatest, map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  private bitcoinPriceSubject = new BehaviorSubject<number>(16914);
  bitcoinPrice$ = this.bitcoinPriceSubject.asObservable();

  private investmentsSubject = new BehaviorSubject<any[]>([
    { count: 4, price: 20000, date: new Date(2020, 1, 1) },
    { count: 4, price: 20000, date: new Date(2021, 1, 1) },
    { count: 7, price: 10000, date: new Date(2022, 1, 1) },
  ]);
  investments$ = this.investmentsSubject.asObservable();

  balance$: Observable<number> = this.investments$.pipe(
    map((investments) =>
      investments.reduce((acc, investment) => acc + investment.count, 0)
    )
  );

  invested$: Observable<number> = this.investments$.pipe(
    map((investments) =>
      investments.reduce(
        (acc, investment) => acc + investment.count * investment.price,
        0
      )
    )
  );

  valueToday$: Observable<number> = combineLatest([
    this.balance$,
    this.bitcoinPrice$,
  ]).pipe(map(([balance, price]) => balance * price));

  win$: Observable<number> = combineLatest([
    this.valueToday$,
    this.invested$,
  ]).pipe(map(([valueToday, invested]) => valueToday - invested));

  inputCount: number = 0;
  inputPrice: number = 0;
  inputDate: Date = new Date();

  add() {
    alert(
      `Hinzugefügt: ${this.inputCount} BTC
      zum Preis von ${this.inputPrice} CHF`
    );
    this.investmentsSubject.next([
      ...this.investmentsSubject.getValue(),
      {
        count: Number(this.inputCount),
        price: Number(this.inputPrice),
        date: new Date(this.inputDate),
      },
    ]);
  }
}
