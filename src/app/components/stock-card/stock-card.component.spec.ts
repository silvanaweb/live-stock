import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { StockCardComponent } from "./stock-card.component";
import { Component } from "@angular/core";
import { PlotlyExampleComponent } from "../plotly-example";
import * as PlotlyJS from "plotly.js/dist/plotly.js";
import { PlotlyModule } from "angular-plotly.js";
PlotlyModule.plotlyjs = PlotlyJS;

describe("StockCardComponent", () => {
  let testHostComponent: TestHostComponent;
  let testHostFixture: ComponentFixture<TestHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
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

  it("should show Stock name", () => {
    expect(testHostFixture.nativeElement.querySelector("h2").innerText).toEqual(
      "Stock"
    );
  });

  @Component({
    selector: `host-component`,
    template: `
      <app-stock-card
        [name]="stock.name"
        [prices]="stock.prices"
      ></app-stock-card>
    `
  })
  class TestHostComponent {
    public stock = { name: "Stock", prices: [0] };
  }
});
