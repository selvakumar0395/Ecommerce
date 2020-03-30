var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { TablesRoutes } from './tables.routing';
import { DatatableComponent } from './data-table/data-table.component';
import { SmarttableComponent } from './smart-table/smart-table.component';
import { BasictableComponent } from './basic/basic.component';
import { DarktableComponent } from './dark-basic/dark.component';
import { ColortableComponent } from './color-table/color.component';
import { TablesizeComponent } from './sizing/size.component';
let TablesModule = class TablesModule {
};
TablesModule = __decorate([
    NgModule({
        imports: [
            RouterModule.forChild(TablesRoutes),
            CommonModule,
            NgxDatatableModule,
            Ng2SmartTableModule
        ],
        declarations: [
            DatatableComponent,
            BasictableComponent,
            DarktableComponent,
            ColortableComponent,
            TablesizeComponent,
            SmarttableComponent
        ]
    })
], TablesModule);
export { TablesModule };
//# sourceMappingURL=tables.module.js.map