import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should have initial bitcoin price of 16914', (done) => {
    component.bitcoinPrice$.subscribe((value) => {
      expect(value).toBe(16914);
      done();
    });
  });

  it('should calculate the correct balance', (done) => {
    component.balance$.subscribe((balance) => {
      expect(balance).toBe(15);
      done();
    });
  });

  it('should calculate the correct invested amount', (done) => {
    component.invested$.subscribe((invested) => {
      expect(invested).toBe(230000);
      done();
    });
  });

  it('should calculate the current value of investments', (done) => {
    component.valueToday$.subscribe((valueToday) => {
      expect(valueToday).toBe(253710);
      done();
    });
  });

  it('should calculate the correct win/loss', (done) => {
    component.win$.subscribe((win) => {
      expect(win).toBe(23710);
      done();
    });
  });

  it('should add a new investment when "add" method is called', () => {
    component.inputCount = 5;
    component.inputPrice = 30000;
    component.inputDate = new Date(2023, 1, 1);

    component.add();

    component.investments$.subscribe((investments) => {
      const lastInvestment = investments[investments.length - 1];
      expect(investments.length).toBe(4);
      expect(lastInvestment.count).toBe(5);
      expect(lastInvestment.price).toBe(30000);
      expect(lastInvestment.date).toEqual(new Date(2023, 1, 1));
    });
  });
});
