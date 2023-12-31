import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should set the count to 0 at start', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.count()).toEqual(0);
  });

  it('should increment the count', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.increment();
    expect(app.count()).toEqual(1);
  });

  it('should decrement the count', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.increment();
    app.increment();
    app.decrement();
    expect(app.count()).toEqual(1);
  });

  it('should not decrement the count below 0', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.decrement();
    expect(app.count()).toEqual(0);
  });

  it('should reset the count', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.increment();
    app.reset();
    expect(app.count()).toEqual(0);
  });

  it('should render the count', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.count').textContent).toContain('0');
  });  

  it('should render the double of the count', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.double').textContent).toContain('0');
  });

  it('should render the binary power of the count', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.binary-power').textContent).toContain('1');
  });

  it('should notify the count', fakeAsync(() => {
    spyOn(console, 'log'); // The spy is a function that replaces the original function and should be created before the component.
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.increment();
    tick(1000);
    expect(console.log).toHaveBeenCalled();
  }));

  it('should make double as double of count', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.increment();
    app.increment();
    expect(app.double()).toEqual(4);
  });

  it('should make binary power have the value of the power of two and the count as the power', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.increment();
    app.increment();
    app.increment();
    expect(app.binaryPower()).toEqual(8);
  });

  it('should reset the count when the reset button is clicked', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.increment();
    app.increment();
    const compiled = fixture.nativeElement;
    compiled.querySelector('.reset').click();
    expect(app.count()).toEqual(0);
  });

  it('should reset count, double and binary power when the reset button is clicked', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.increment();
    app.increment();
    const compiled = fixture.nativeElement;
    compiled.querySelector('.reset').click();
    expect(app.count()).toEqual(0);
    expect(app.double()).toEqual(0);
    expect(app.binaryPower()).toEqual(1);
  });
});
