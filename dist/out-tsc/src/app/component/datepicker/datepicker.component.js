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
import { NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
const my = new Date();
// This is for the range date picker
const equals = (one, two) => one &&
    two &&
    two.year === one.year &&
    two.month === one.month &&
    two.day === one.day;
const before = (one, two) => !one || !two
    ? false
    : one.year === two.year
        ? one.month === two.month
            ? one.day === two.day
                ? false
                : one.day < two.day
            : one.month < two.month
        : one.year < two.year;
const after = (one, two) => !one || !two
    ? false
    : one.year === two.year
        ? one.month === two.month
            ? one.day === two.day
                ? false
                : one.day > two.day
            : one.month > two.month
        : one.year > two.year;
// End  range date picker
let NgbdDatepickerBasicComponent = class NgbdDatepickerBasicComponent {
    constructor(calendar) {
        // This is for multiple month
        this.displayMonths = 2;
        this.navigation = 'select';
        this.showWeekNumbers = false;
        // This is for the disable datepicker
        this.model3 = {
            year: my.getFullYear(),
            month: my.getMonth() + 1,
            day: my.getDate()
        };
        this.disabled = true;
        this.isHovered = date => this.fromDate &&
            !this.toDate &&
            this.hoveredDate &&
            after(date, this.fromDate) &&
            // tslint:disable-next-line:semicolon
            before(date, this.hoveredDate);
        this.isInside = date => after(date, this.fromDate) && before(date, this.toDate);
        this.isFrom = date => equals(date, this.fromDate);
        this.isTo = date => equals(date, this.toDate);
        this.fromDate = calendar.getToday();
        this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);
    }
    selectToday() {
        this.model = {
            year: my.getFullYear(),
            month: my.getMonth() + 1,
            day: my.getDate()
        };
    }
    onDateChange(date) {
        if (!this.fromDate && !this.toDate) {
            this.fromDate = date;
        }
        else if (this.fromDate && !this.toDate && after(date, this.fromDate)) {
            this.toDate = date;
        }
        else {
            this.toDate = null;
            this.fromDate = date;
        }
    }
};
NgbdDatepickerBasicComponent = __decorate([
    Component({
        selector: 'app-datepicker-basic',
        templateUrl: './datepicker.component.html',
        styles: [
            `
      .custom-day {
        text-align: center;
        padding: 0.185rem 0.25rem;
        display: inline-block;
        height: 2rem;
        width: 2rem;
      }
      .custom-day.focused {
        background-color: #e6e6e6;
      }
      .custom-day.range,
      .custom-day:hover {
        background-color: #0275d8;
        color: white;
      }
      .faded {
        opacity: 0.5;
      }
    `
        ]
    }),
    __metadata("design:paramtypes", [NgbCalendar])
], NgbdDatepickerBasicComponent);
export { NgbdDatepickerBasicComponent };
//# sourceMappingURL=datepicker.component.js.map