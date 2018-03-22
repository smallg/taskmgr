import {NgModule} from '@angular/core';
import {TaskHomeComponent} from './task-home/task-home.component';
import {TaskListComponent} from './task-list/task-list.component';
import {TaskItemComponent} from './task-item/task-item.component';
import {TaskHeaderComponent} from './task-header/task-header.component';
import {SharedModule} from '../shared/shared.module';
import {TaskRoutingModule} from './task-routing.module';
import { NewTaskComponent } from './new-task/new-task.component';
import {CommonModule} from '@angular/common';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        TaskRoutingModule
    ],
    declarations: [
        TaskHomeComponent,
        TaskListComponent,
        TaskItemComponent,
        TaskHeaderComponent,
        NewTaskComponent
    ],
    entryComponents: [
        NewTaskComponent
    ]
})
export class TaskModule {
}
