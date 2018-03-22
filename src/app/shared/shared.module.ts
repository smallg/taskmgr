import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
    MdButtonModule,
    MdIconModule,
    MdToolbarModule,
    MdCardModule,
    MdSlideToggleModule,
    MdSidenavModule,
    MdInputModule,
    MdListModule,
    MdGridListModule,
} from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        MdToolbarModule,
        MdIconModule,
        MdButtonModule,
        MdCardModule,
        MdSidenavModule,
        MdSlideToggleModule,
        MdInputModule,
        MdListModule,
        MdGridListModule
    ],
    exports: [
        CommonModule,
        MdToolbarModule,
        MdIconModule,
        MdButtonModule,
        MdCardModule,
        MdSidenavModule,
        MdSlideToggleModule,
        MdInputModule,
        MdListModule,
        MdGridListModule
    ],
    declarations: []
})
export class SharedModule {
}
