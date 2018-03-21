import {NgModule} from '@angular/core';
import {
    MdButtonModule,
    MdIconModule,
    MdToolbarModule,
    MdCardModule,
    MdSlideToggleModule,
    MdSidenavModule,
    MdInputModule,
    MdListModule,
} from '@angular/material';

@NgModule({
    imports: [
        MdToolbarModule,
        MdIconModule,
        MdButtonModule,
        MdCardModule,
        MdSidenavModule,
        MdSlideToggleModule,
        MdInputModule,
        MdListModule
    ],
    exports: [
        MdToolbarModule,
        MdIconModule,
        MdButtonModule,
        MdCardModule,
        MdSidenavModule,
        MdSlideToggleModule,
        MdInputModule,
        MdListModule
    ],
    declarations: []
})
export class SharedModule {
}
