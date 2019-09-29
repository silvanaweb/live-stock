import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import * as PlotlyJS from "plotly.js/dist/plotly.js";
import { PlotlyModule } from "angular-plotly.js";

import { AppComponent } from "./app.component";
import { StockCardComponent } from "./components/stock-card/stock-card.component";
import { StockListComponent } from "./components/stock-list/stock-list.component";
import { PlotlyExampleComponent } from "./components/plotly-example";

PlotlyModule.plotlyjs = PlotlyJS;

@NgModule({
  declarations: [
    AppComponent,
    StockCardComponent,
    StockListComponent,
    PlotlyExampleComponent
  ],
  imports: [BrowserModule, PlotlyModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
