var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
let FullComponent = class FullComponent {
    constructor(router) {
        this.router = router;
        this.config = {};
        this.tabStatus = 'justified';
        this.isCollapsed = false;
        this.showSettings = false;
        this.showMobileMenu = false;
        this.expandLogo = false;
        this.options = {
            theme: 'light',
            dir: 'ltr',
            layout: 'vertical',
            sidebartype: 'full',
            sidebarpos: 'fixed',
            headerpos: 'fixed',
            boxed: 'full',
            navbarbg: 'skin6',
            sidebarbg: 'skin5',
            logobg: 'skin5' // six possible values: skin(1/2/3/4/5/6)
        };
    }
    Logo() {
        this.expandLogo = !this.expandLogo;
    }
    ngOnInit() {
        if (this.router.url === '/') {
            this.router.navigate(['/dashboard/dashboard1']);
        }
        this.defaultSidebar = this.options.sidebartype;
        this.handleSidebar();
    }
    onResize(event) {
        this.handleSidebar();
    }
    handleSidebar() {
        this.innerWidth = window.innerWidth;
        switch (this.defaultSidebar) {
            case 'full':
            case 'iconbar':
                if (this.innerWidth < 1170) {
                    this.options.sidebartype = 'mini-sidebar';
                }
                else {
                    this.options.sidebartype = this.defaultSidebar;
                }
                break;
            case 'overlay':
                if (this.innerWidth < 767) {
                    this.options.sidebartype = 'mini-sidebar';
                }
                else {
                    this.options.sidebartype = this.defaultSidebar;
                }
                break;
            default:
        }
    }
    toggleSidebarType() {
        switch (this.options.sidebartype) {
            case 'full':
            case 'iconbar':
                this.options.sidebartype = 'mini-sidebar';
                break;
            case 'overlay':
                this.showMobileMenu = !this.showMobileMenu;
                break;
            case 'mini-sidebar':
                if (this.defaultSidebar === 'mini-sidebar') {
                    this.options.sidebartype = 'full';
                }
                else {
                    this.options.sidebartype = this.defaultSidebar;
                }
                break;
            default:
        }
    }
};
__decorate([
    HostListener('window:resize', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], FullComponent.prototype, "onResize", null);
FullComponent = __decorate([
    Component({
        selector: 'app-full-layout',
        templateUrl: './full.component.html',
        styleUrls: ['./full.component.scss']
    }),
    __metadata("design:paramtypes", [Router])
], FullComponent);
export { FullComponent };
//# sourceMappingURL=full.component.js.map