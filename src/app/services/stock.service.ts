import { Injectable } from "@angular/core";
import { interval, from, Observable } from "rxjs";
import { switchMap } from "rxjs/operators";

type StockItemType = {
  name: string;
  price: number;
};

const mapToStockItemType: (
  price: number
) => (name: string) => StockItemType = price => name => ({
  name,
  price
});
const setPriceToStockItemType: (
  item: StockItemType,
  price: number
) => StockItemType = (item, price) => ({
  name: item.name,
  price
});
const stockProducts: Array<StockItemType> = [
  "Stock 1",
  "Stock 2",
  "Stock 3"
].map(mapToStockItemType(0));

@Injectable({
  providedIn: "root"
})
class StockService {
  createStockValues: (
    stockProducts: Array<StockItemType>
  ) => Array<StockItemType> = products => {
    return products.map(StockItemType =>
      setPriceToStockItemType(StockItemType, Math.random() * 3 + 8)
    );
  };

  getListStock(): Observable<StockItemType> {
    return interval(1000).pipe(
      switchMap(() => from(this.createStockValues(stockProducts)))
    );
  }
}

export { StockService, StockItemType, mapToStockItemType };
