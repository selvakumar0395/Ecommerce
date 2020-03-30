var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component, ViewChild } from '@angular/core';
let UploadComponent = class UploadComponent {
    constructor() {
        this.token = 'lkdjlfjld';
        this.afuConfig1 = {
            multiple: true,
            uploadAPI: {
                url: 'https://slack.com/api/files.upload'
            }
        };
        this.afuConfig2 = {
            theme: 'attachPin',
            hideProgressBar: 'true',
            hideResetBtn: 'true',
            maxSize: '1',
            uploadAPI: {
                url: 'https://slack.com/api/files.upload',
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            },
            formatsAllowed: '.jpg,.png',
            multiple: 'true'
        };
        this.afuConfig3 = {
            theme: 'dragNDrop',
            hideProgressBar: true,
            hideResetBtn: true,
            hideSelectBtn: true,
            maxSize: '1',
            uploadAPI: {
                url: 'https://slack.com/api/files.upload'
            },
            formatsAllowed: '.jpg,.png',
            multiple: true
        };
    }
    DocUpload(env) {
        console.log(env);
    }
    resetfu(id) {
        // this.rfu.resetFileUpload(id);
        // id == 1 ? this.afuref1.resetFileUpload() : this.afuref2.resetFileUpload();
        this[`afuref${id}`].resetFileUpload();
        // this.resetUpload1 = true;
    }
};
UploadComponent = __decorate([
    ViewChild('fileUpload1', { static: true }),
    Component({
        templateUrl: './upload.component.html',
        styleUrls: ['./upload.scss']
    })
], UploadComponent);
export { UploadComponent };
//# sourceMappingURL=upload.component.js.map