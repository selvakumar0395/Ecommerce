var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewEncapsulation } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
let NgbdModalBasicComponent = class NgbdModalBasicComponent {
    constructor(modalService, modalService2) {
        this.modalService = modalService;
        this.modalService2 = modalService2;
    }
    open2(content) {
        this.modalService.open(content).result.then(result => {
            this.closeResult = `Closed with: ${result}`;
        }, reason => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }
    open(content) {
        this.modalService2.open(content, { windowClass: 'dark-modal' });
    }
    getDismissReason(reason) {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        }
        else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return `with: ${reason}`;
        }
    }
    openBackDropCustomClass(content) {
        this.modalService.open(content, { backdropClass: 'light-blue-backdrop' });
    }
    openWindowCustomClass(content) {
        this.modalService.open(content, { windowClass: 'dark-modal' });
    }
    openSm(content) {
        this.modalService.open(content, { size: 'sm' });
    }
    openLg(content) {
        this.modalService.open(content, { size: 'lg' });
    }
    openVerticallyCentered(content) {
        this.modalService.open(content, { centered: true });
    }
};
NgbdModalBasicComponent = __decorate([
    Component({
        selector: 'app-ngbd-modal',
        templateUrl: './modal.component.html',
        encapsulation: ViewEncapsulation.None,
        styles: [
            `
      .dark-modal .modal-content {
        background-color: #009efb;
        color: white;
      }
      .dark-modal .close {
        color: white;
      }
      .light-blue-backdrop {
        background-color: #5cb3fd;
      }
    `
        ]
    }),
    __metadata("design:paramtypes", [NgbModal, NgbModal])
], NgbdModalBasicComponent);
export { NgbdModalBasicComponent };
//# sourceMappingURL=modal.component.js.map