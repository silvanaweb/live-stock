import { Component, ViewEncapsulation, OnInit } from "@angular/core";
import { StockService, StockItem } from "./services/stock.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  title = "Live Stock";
  stockList: Array<StockItem> = [];

  constructor(private stockService: StockService) {}

  ngOnInit() {
    const s = this.stockService.getListStock();
    this.stockList = [...s];
    console.log(s);
  }
}
