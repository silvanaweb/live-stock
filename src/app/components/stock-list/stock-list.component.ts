import { Component, OnInit, Input } from "@angular/core";
import { StockItemType } from "../../services/stock.service";

@Component({
  selector: "app-stock-list",
  templateUrl: "./stock-list.component.html",
  styleUrls: ["./stock-list.component.css"]
})
export class StockListComponent {
  @Input() stockList: Array<StockItemType>;
}
