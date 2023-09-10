import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      declarations: [AppComponent],
    })
  );

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should generate startup names with prefixes', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.generate();
    const name = app.name;

    const prefixFound = app.prefixes.some((prefix) => name.startsWith(prefix));
    expect(prefixFound)
      .withContext(`Expected "${name}" to start with one of the prefixes.`)
      .toBeTrue();
  });

  it('should generate startup names with suffixes', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.generate();
    const name = app.name;

    const suffixFound = app.suffixes.some((suffix) => name.endsWith(suffix));
    expect(suffixFound)
      .withContext(`Expected "${name}" to end with one of the suffixes.`)
      .toBeTrue();
  });
});
