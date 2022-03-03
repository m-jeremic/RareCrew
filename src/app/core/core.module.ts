import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ModelModule } from "../model/model.module";
import { TableComponent } from "./table.component";
import { PieChartComponent } from "./pieChart.component";;

@NgModule({
    imports: [BrowserModule, ModelModule],
    declarations: [TableComponent, PieChartComponent],
    exports: [ModelModule, TableComponent, PieChartComponent],
})
export class CoreModule { }
