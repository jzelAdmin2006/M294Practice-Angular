import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should increase temperature by 1 when warmer is called', () => {
    component.warmer();

    expect(component.temperatureCelsiusSubject.value).toEqual(1);
  });

  it('should decrease temperature by 1 when colder is called', () => {
    component.colder();

    expect(component.temperatureCelsiusSubject.value).toEqual(-1);
  });

  it('isFreezing$ should emit true when temperature is below 0', () => {
    component.colder();

    component.isFreezing$.subscribe((isFreezing) => {
      expect(isFreezing).toBeTrue();
    });
  });

  it('isFreezing$ should emit false when temperature is 0 or above', () => {
    function expectNotFreezing() {
      component.isFreezing$.subscribe((isFreezing) => {
        expect(isFreezing).toBeFalse();
      });
    }

    expectNotFreezing();

    component.warmer();

    expectNotFreezing();
  });
});
