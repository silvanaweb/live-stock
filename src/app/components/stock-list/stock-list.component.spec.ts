import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { StockListComponent } from "./stock-list.component";
import { StockCardComponent } from "../stock-card/stock-card.component";
import { Component } from "@angular/core";
import { PlotlyExampleComponent } from "../plotly-example";
import * as PlotlyJS from "plotly.js/dist/plotly.js";
import { PlotlyModule } from "angular-plotly.js";
PlotlyModule.plotlyjs = PlotlyJS;

describe("StockListComponent", () => {
  let testHostComponent: TestHostComponent;
  let testHostFixture: ComponentFixture<TestHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        StockListComponent,
        StockCardComponent,
        TestHostComponent,
        PlotlyExampleComponent
      ],
      imports: [PlotlyModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    testHostFixture = TestBed.createComponent(TestHostComponent);
    testHostComponent = testHostFixture.componentInstance;
    testHostFixture.detectChanges();
  });

  it("should create", () => {
    expect(testHostComponent).toBeTruthy();
  });

  @Component({
    selector: `host-component`,
    template: `
      <app-stock-list [stockList]="stockList"></app-stock-list>
    `
  })
  class TestHostComponent {
    public stockList = [{ name: "Stock", prices: [0] }];
  }
});
