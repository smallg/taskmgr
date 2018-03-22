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
    MdDialogModule
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
        MdGridListModule,
        MdDialogModule,
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
        MdGridListModule,
        MdDialogModule
    ],
    declarations: []
})
export class SharedModule {
}
