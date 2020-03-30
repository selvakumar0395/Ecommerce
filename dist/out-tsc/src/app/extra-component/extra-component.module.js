var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { QuillModule } from 'ngx-quill';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFileUploaderModule } from 'angular-file-uploader';
import { DragulaModule } from 'ng2-dragula';
import { ExtraComponentsRoutes } from './extra-component.routing';
import { ToastrComponent } from './toastr/toastr.component';
import { UploadComponent } from './file-upload/upload.component';
import { EditorComponent } from './editor/editor.component';
import { DragComponent } from './drag-n-drop/drag.component';
let ExtraComponentModule = class ExtraComponentModule {
};
ExtraComponentModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            RouterModule.forChild(ExtraComponentsRoutes),
            FormsModule,
            ReactiveFormsModule,
            ToastrModule.forRoot(),
            QuillModule.forRoot(),
            NgbModule,
            DragulaModule.forRoot(),
            AngularFileUploaderModule
        ],
        declarations: [
            ToastrComponent,
            UploadComponent,
            EditorComponent,
            DragComponent
        ]
    })
], ExtraComponentModule);
export { ExtraComponentModule };
//# sourceMappingURL=extra-component.module.js.map