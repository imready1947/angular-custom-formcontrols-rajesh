import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { JsonInputComponent }   from './json-input.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
    ],
    exports: [
        JsonInputComponent,
    ],
    declarations: [
        JsonInputComponent,
    ],
    providers: [],
})
export class JsonInputModule { }
