var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { NotifierService } from 'angular-notifier';
let NotifierComponent = class NotifierComponent {
    /**
     * Constructor
     *
     * @param {NotifierService} notifier Notifier service
     */
    constructor(notifier) {
        this.notifier = notifier;
    }
    /**
     * Show a notification
     *
     * @param {string} type    Notification type
     * @param {string} message Notification message
     */
    showNotification(type, message) {
        this.notifier.notify(type, message);
    }
    /**
     * Hide oldest notification
     */
    hideOldestNotification() {
        this.notifier.hideOldest();
    }
    /**
     * Hide newest notification
     */
    hideNewestNotification() {
        this.notifier.hideNewest();
    }
    /**
     * Hide all notifications at once
     */
    hideAllNotifications() {
        this.notifier.hideAll();
    }
    /**
     * Show a specific notification (with a custom notification ID)
     *
     * @param {string} type    Notification type
     * @param {string} message Notification message
     * @param {string} id      Notification ID
     */
    showSpecificNotification(type, message, id) {
        this.notifier.show({
            id,
            message,
            type
        });
    }
    /**
     * Hide a specific notification (by a given notification ID)
     *
     * @param {string} id Notification ID
     */
    hideSpecificNotification(id) {
        this.notifier.hide(id);
    }
    ngOnInit() {
    }
};
NotifierComponent = __decorate([
    Component({
        selector: 'app-notifier',
        templateUrl: './notifier.component.html'
    }),
    __metadata("design:paramtypes", [NotifierService])
], NotifierComponent);
export { NotifierComponent };
//# sourceMappingURL=notifier.component.js.map