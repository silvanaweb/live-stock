import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { StockCardComponent } from "./stock-card.component";
import { Component } from "@angular/core";

describe("StockCardComponent", () => {
  let testHostComponent: TestHostComponent;
  let testHostFixture: ComponentFixture<TestHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StockCardComponent, TestHostComponent]
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
      <app-stock-card [stock]="stock"></app-stock-card>
    `
  })
  class TestHostComponent {
    public stock = { name: "Stock", price: 0 };
  }
});
