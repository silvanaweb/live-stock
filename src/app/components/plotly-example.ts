import { Component, Input } from "@angular/core";

@Component({
  selector: "plotly-example",
  template: `
    <plotly-plot
      [data]="getData(xCoords, yCoords)"
      [layout]="layout"
      [style]="{ width: '100%' }"
    ></plotly-plot>
  `
})
export class PlotlyExampleComponent {
  @Input() xCoords: Array<number>;
  @Input() yCoords: Array<number>;

  public layout = { height: 300 };

  getData(xCoords, yCoords) {
    return [
      {
        x: xCoords,
        y: yCoords,
        type: "scatter",
        mode: "lines+points",
        marker: { color: "red" }
      }
    ];
  }
}
