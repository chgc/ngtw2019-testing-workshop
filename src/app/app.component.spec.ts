import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { DataService } from './data.service';

fdescribe('AppComponent', () => {
  let mockDataService: DataService = {
    add: (a, b) => {}
  } as DataService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      providers: [{ provide: DataService, useValue: mockDataService }]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'ngtw2019-testing'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('ngtw2019-testing');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain(
      'ngtw2019-testing'
    );
  });

  describe('test add button', () => {
    it('component add method', () => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.componentInstance;
      app.add();
      expect(app.count).toBe(1);
    });

    it('component view add acount', () => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.componentInstance;
      app.add();
      fixture.detectChanges();
      const textContent = fixture.debugElement.nativeElement.querySelector(
        '.result'
      ).textContent;
      expect(textContent).toBe('1');
    });
  });
});
