import {NgModule} from '@angular/core';
import {MdButtonModule, MdIconModule, MdToolbarModule, MdCardModule, MdSlideToggleModule, MdSidenavModule, MdInputModule} from '@angular/material';

@NgModule({
    imports: [
        MdToolbarModule,
        MdIconModule,
        MdButtonModule,
        MdCardModule,
        MdSidenavModule,
        MdSlideToggleModule,
        MdInputModule
    ],
    exports: [
        MdToolbarModule,
        MdIconModule,
        MdButtonModule,
        MdCardModule,
        MdSidenavModule,
        MdSlideToggleModule,
        MdInputModule
    ],
    declarations: []
})
export class SharedModule {
}
