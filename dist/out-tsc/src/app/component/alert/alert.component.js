var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { debounceTime } from 'rxjs/operators';
import { Input, Component } from '@angular/core';
import { Subject } from 'rxjs';
let NgbdAlertBasicComponent = class NgbdAlertBasicComponent {
    constructor() {
        // this is for the Closeable Alert
        this.alerts = [];
        // End the Closeable Alert
        // This is for the self closing alert
        this._success = new Subject();
        this.staticAlertClosed = false;
        this.alerts.push({
            id: 1,
            type: 'success',
            message: 'This is an success alert'
        }, {
            id: 2,
            type: 'info',
            message: 'This is an info alert'
        }, {
            id: 3,
            type: 'warning',
            message: 'This is a warning alert'
        }, {
            id: 4,
            type: 'danger',
            message: 'This is a danger alert'
        });
        this.backup = this.alerts.map((alert) => Object.assign({}, alert));
    }
    closeAlert(alert) {
        const index = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    }
    reset() {
        this.alerts = this.backup.map((alert) => Object.assign({}, alert));
    }
    ngOnInit() {
        setTimeout(() => (this.staticAlertClosed = true), 20000);
        this._success.subscribe(message => (this.successMessage = message));
        this._success.pipe(debounceTime(5000)).subscribe(() => (this.successMessage = null));
    }
    changeSuccessMessage() {
        this._success.next(`${new Date()} - Message successfully changed.`);
    }
};
__decorate([
    Input(),
    __metadata("design:type", Array)
], NgbdAlertBasicComponent.prototype, "alerts", void 0);
NgbdAlertBasicComponent = __decorate([
    Component({
        selector: 'app-ngbd-alert',
        templateUrl: 'alert.component.html',
        styles: [`
    :host >>> .alert-custom {
      color: #99004d;
      background-color: #f169b4;
      border-color: #800040;
    }
  `]
    }),
    __metadata("design:paramtypes", [])
], NgbdAlertBasicComponent);
export { NgbdAlertBasicComponent };
//# sourceMappingURL=alert.component.js.map