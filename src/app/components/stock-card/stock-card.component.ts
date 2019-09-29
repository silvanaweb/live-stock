import { Component, OnInit, Input } from "@angular/core";
import { StockItem } from "../../services/stock.service";

@Component({
  selector: "app-stock-card",
  templateUrl: "./stock-card.component.html",
  styleUrls: ["./stock-card.component.css"]
})
export class StockCardComponent {
  @Input() stock: StockItem;

  constructor() {}
}
