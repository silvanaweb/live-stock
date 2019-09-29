import { Injectable } from "@angular/core";

type StockItem = {
  name: string;
  price: number;
};
const mapToStockItem: (
  price: number
) => (name: string) => StockItem = price => name => ({
  name,
  price
});
const setPriceToStockItem: (item: StockItem, price: number) => StockItem = (
  item,
  price
) => ({
  name: item.name,
  price
});
const stockProducts: Array<StockItem> = ["Stock 1", "Stock 2", "Stock 3"].map(
  mapToStockItem(0)
);

@Injectable({
  providedIn: "root"
})
class StockService {
  stockStream: (
    stockProducts: Array<StockItem>
  ) => Array<StockItem> = products => {
    return products.map(stockItem =>
      setPriceToStockItem(stockItem, Math.random() * 3 + 8)
    );
  };

  getListStock() {
    return this.stockStream(stockProducts);
  }
}

export { StockService, StockItem, mapToStockItem };
