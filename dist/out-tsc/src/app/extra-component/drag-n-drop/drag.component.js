var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component, ViewEncapsulation } from '@angular/core';
let DragComponent = class DragComponent {
    constructor() {
        // This is with the output example
        this.many = ['The', 'possibilities', 'are', 'endless!'];
        this.many2 = ['Explore', 'them'];
    }
    hasClass(el, name) {
        return new RegExp('(?:^|\\s+)' + name + '(?:\\s+|$)').test(el.className);
    }
    addClass(el, name) {
        if (!this.hasClass(el, name)) {
            el.className = el.className ? [el.className, name].join(' ') : name;
        }
    }
    removeClass(el, name) {
        if (this.hasClass(el, name)) {
            el.className = el.className.replace(new RegExp('(?:^|\\s+)' + name + '(?:\\s+|$)', 'g'), '');
        }
    }
    onDrag(args) {
        const [e] = args;
        this.removeClass(e, 'ex-moved');
    }
    onDrop(args) {
        const [e] = args;
        this.addClass(e, 'ex-moved');
    }
    onOver(args) {
        const [el] = args;
        this.addClass(el, 'ex-over');
    }
    onOut(args) {
        const [el] = args;
        this.removeClass(el, 'ex-over');
    }
    onDropModel(args) {
        const [el, target, source] = args;
        console.log('onDropModel:');
        console.log(el);
        console.log(target);
        console.log(source);
    }
    onRemoveModel(args) {
        const [el, source] = args;
        console.log('onRemoveModel:');
        console.log(el);
        console.log(source);
    }
};
DragComponent = __decorate([
    Component({
        templateUrl: './drag.component.html',
        styleUrls: ['./drag.scss'],
        encapsulation: ViewEncapsulation.None
    })
], DragComponent);
export { DragComponent };
//# sourceMappingURL=drag.component.js.map