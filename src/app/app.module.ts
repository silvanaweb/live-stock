import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { StockCardComponent } from './components/stock-card/stock-card.component';
import { StockListComponent } from './components/stock-list/stock-list.component';

@NgModule({
  declarations: [AppComponent, StockCardComponent, StockListComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
