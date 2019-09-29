import { mapToStockItem, StockItem } from "./stock.service";

const stockProducts: Array<StockItem> = [{ name: "Stock 1", price: 0 }];
const stockName: string = "Stock 1";

describe("StockService", () => {
  it("should mapToStockItem return correct stock item", () => {
    const stockResult = mapToStockItem(1)(stockName);
    const stockToBe = { name: stockName, price: 1 };
    expect(stockResult).toEqual(stockToBe);
  });
});
