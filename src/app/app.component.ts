import { Component, ViewEncapsulation, OnInit, OnDestroy } from "@angular/core";
import { StockService, StockItemType } from "./services/stock.service";
import { Subscription } from "rxjs";

type StreamedStockType = {
  name: string;
  prices: Array<number>;
};
type MappedStockType = Record<string, Array<number>>;

const MAX_LENGTH = 60;

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
      this.createStockDisplay(s);
    });
  }

  createStockDisplay(newStockValue: StockItemType) {
    this.stockMap[newStockValue.name] = this.stockMap[newStockValue.name]
      ? this.updatePrices(
          this.stockMap[newStockValue.name],
          newStockValue.price
        )
      : [newStockValue.price];
    const stock = this.stockList.find(item => item.name === newStockValue.name);
    if (stock) {
      stock.prices = this.stockMap[newStockValue.name];
    } else {
      this.stockList.push({
        name: newStockValue.name,
        prices: this.stockMap[newStockValue.name]
      });
    }
  }

  updatePrices(prices: Array<number>, newPrice: number): Array<number> {
    if (prices.length < MAX_LENGTH) {
      return [...prices, newPrice];
    } else {
      return [...prices.slice(1), newPrice];
    }
  }

  ngOnDestroy() {
    if (this.stockSubscription) {
      this.stockSubscription.unsubscribe();
    }
  }
}

export { AppComponent, StreamedStockType };
