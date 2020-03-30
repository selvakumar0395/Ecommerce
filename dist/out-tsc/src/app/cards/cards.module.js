var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CardsRoutes } from './cards.routing';
import { BasicComponent } from './basic/basic.component';
import { CustomComponent } from './custom/custom.component';
import { WeatherComponent } from './weather/weather.component';
let CardsModule = class CardsModule {
};
CardsModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(CardsRoutes)],
        declarations: [BasicComponent, CustomComponent, WeatherComponent]
    })
], CardsModule);
export { CardsModule };
//# sourceMappingURL=cards.module.js.map