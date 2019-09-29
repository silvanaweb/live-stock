import { mapToStockItemType, StockItemType } from "./stock.service";

const stockProducts: Array<StockItemType> = [{ name: "Stock 1", price: 0 }];
const stockName: string = "Stock 1";

describe("StockService", () => {
  it("should mapToStockItemType return correct stock item", () => {
    const stockResult = mapToStockItemType(1)(stockName);
    const stockToBe = { name: stockName, price: 1 };
    expect(stockResult).toEqual(stockToBe);
  });
});
