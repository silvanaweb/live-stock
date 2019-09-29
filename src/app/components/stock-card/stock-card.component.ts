import { Component, Input } from "@angular/core";
import { StreamedStockType } from "../../app.component";

@Component({
  selector: "app-stock-card",
  templateUrl: "./stock-card.component.html",
  styleUrls: ["./stock-card.component.css"]
})
export class StockCardComponent {
  @Input() stock: StreamedStockType;

  constructor() {}
}
