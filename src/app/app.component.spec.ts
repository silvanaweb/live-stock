import { TestBed, async } from "@angular/core/testing";
import { AppComponent } from "./app.component";
import { StockListComponent } from "./components/stock-list/stock-list.component";
import { StockCardComponent } from "./components/stock-card/stock-card.component";
import { StockService } from "./services/stock.service";

describe("AppComponent", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, StockListComponent, StockCardComponent],
      providers: [StockService]
    }).compileComponents();
  }));

  it("should create the app", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  // it(`should have as title 'Live Stock'`, () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual("Live Stock");
  // });

  // it("should render title in a h1 tag", () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector("h1").textContent).toContain("Live Stock");
  // });
});
