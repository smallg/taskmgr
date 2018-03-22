import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    MatSlideToggleModule,
    MatSidenavModule,
    MatInputModule,
    MatListModule,
    MatGridListModule,
    MatDialogModule,
    MatAutocompleteModule, MatFormFieldModule, MatMenuModule
} from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        MatFormFieldModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatCardModule,
        MatSidenavModule,
        MatSlideToggleModule,
        MatInputModule,
        MatListModule,
        MatGridListModule,
        MatDialogModule,
        MatAutocompleteModule,
        MatMenuModule
    ],
    exports: [
        CommonModule,
        MatFormFieldModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatCardModule,
        MatSidenavModule,
        MatSlideToggleModule,
        MatInputModule,
        MatListModule,
        MatGridListModule,
        MatDialogModule,
        MatAutocompleteModule,
        MatMenuModule
    ],
    declarations: []
})
export class SharedModule {
}
