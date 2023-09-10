import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let compiled: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [FormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should display message in h1 and input field', () => {
    expect(compiled.querySelector('h1').textContent).toContain('Hello World!');
    expect(compiled.querySelector('input').value).toBe('Hello World!');

    const input = compiled.querySelector('input');
    input.value = 'Neue Nachricht';
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    expect(component.msg).toBe('Neue Nachricht');
    expect(compiled.querySelector('h1').textContent).toContain(
      'Neue Nachricht'
    );
  });
});
