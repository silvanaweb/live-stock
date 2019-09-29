import { Component, Input, ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: "app-stock-card",
  templateUrl: "./stock-card.component.html",
  styleUrls: ["./stock-card.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StockCardComponent {
  @Input() name: string = "";
  @Input() prices: Array<number> = [];

  public createTimeArray(length: number) {
    return [...Array(length).keys()];
  }
}
