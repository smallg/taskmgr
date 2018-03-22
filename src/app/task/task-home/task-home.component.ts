import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {NewTaskComponent} from '../new-task/new-task.component';
import {CopyTaskComponent} from '../copy-task/copy-task.component';
import {ConfirmDialogComponent} from '../../shared/confirm-dialog/confirm-dialog.component';
import {NewTaskListComponent} from "../new-task-list/new-task-list.component";

@Component({
    selector: 'app-task-home',
    templateUrl: './task-home.component.html',
    styleUrls: ['./task-home.component.scss']
})
export class TaskHomeComponent implements OnInit {

    lists = [
        {
            id: 1,
            name: '待办',
            tasks: [
                {
                    id: 1,
                    desc: '任务一：AAA',
                    completed: false,
                    priority: 3,
                    owner: {
                        id: 1,
                        name: '张三',
                        avatar: 'avatars:svg-11'
                    },
                    dueDate: new Date(),
                    reminder: new Date()
                },
                {
                    id: 2,
                    desc: '任务二：BBB',
                    completed: true,
                    priority: 2,
                    owner: {
                        id: 2,
                        name: '李四',
                        avatar: 'avatars:svg-12'
                    },
                    dueDate: new Date()
                }
            ]
        },
        {
            id: 2,
            name: '进行中',
            tasks: [
                {
                    id: 3,
                    desc: '任务三：CCC',
                    completed: true,
                    priority: 1,
                    owner: {
                        id: 1,
                        name: '张三',
                        avatar: 'avatars:svg-11'
                    },
                    dueDate: new Date()
                },
                {
                    id: 4,
                    desc: '任务四：建立新的登录页面，并完成所有登录逻辑',
                    completed: false,
                    priority: 2,
                    owner: {
                        id: 2,
                        name: '李四',
                        avatar: 'avatars:svg-12'
                    },
                    dueDate: new Date(),
                    reminder: new Date()
                }
            ]
        }
    ];

    constructor(private dialog: MatDialog) {
    }

    ngOnInit() {
    }

    launchNewTaskDialog() {
        this.dialog.open(NewTaskComponent, {data: {title: '新建任务'}});
    }

    launchCopyTaskDialog() {
        const dialogRef = this.dialog.open(CopyTaskComponent, {data: {lists: this.lists}});
    }

    launchUpdateTaskDialog(task) {
        const dialogRef = this.dialog.open(NewTaskComponent, {data: {title: '修改任务', task: task}});
    }

    launchDeleteDialog() {
        const dialogRef = this.dialog.open(ConfirmDialogComponent, {data: {title: '删除任务', content: '确认删除任务？'}});
        dialogRef.afterClosed().subscribe(result => console.log(result));
    }

    launchEditListDialog() {
        const dialogRef = this.dialog.open(NewTaskListComponent, {data: {title: '修改列表名称'}});
        dialogRef.afterClosed().subscribe(result => console.log(result));
    }

    add() {
        const dialogRef = this.dialog.open(NewTaskListComponent, {data: {title: '添加新列表'}});
        dialogRef.afterClosed().subscribe(result => console.log(result));
    }

}
