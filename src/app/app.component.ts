import { Component, ViewEncapsulation, OnInit, OnDestroy } from "@angular/core";
import { StockService, StockItemType } from "./services/stock.service";
import { Subscription } from "rxjs";

type StreamedStockType = {
  name: string;
  prices: Array<number>;
};
type MappedStockType = Record<string, Array<number>>;

const MAX_WiDTH = 60;

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  encapsulation: ViewEncapsulation.None
})
class AppComponent implements OnInit, OnDestroy {
  title = "Live Stock";
  stockList: Array<StreamedStockType> = [];
  stockMap: MappedStockType = {};
  private stockSubscription: Subscription;

  constructor(private stockService: StockService) {}

  ngOnInit() {
    const obs = this.stockService.getListStock();
    this.stockSubscription = obs.subscribe(s => {
      // console.log(`${s.name} ${s.price}`);
      this.createStockDisplay(s);
    });
  }

  createStockDisplay(newStockValue: StockItemType) {
    this.stockMap[newStockValue.name] = this.stockMap[newStockValue.name]
      ? [...this.stockMap[newStockValue.name], newStockValue.price]
      : [newStockValue.price];
    this.stockList = Object.entries(this.stockMap).map(([name, prices]) => ({
      name,
      prices
    }));
  }

  ngOnDestroy() {
    if (this.stockSubscription) {
      this.stockSubscription.unsubscribe();
    }
  }
}

export { AppComponent, StreamedStockType };
