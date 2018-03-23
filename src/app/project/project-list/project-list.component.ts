import {Component, OnInit, HostBinding} from '@angular/core';
import {MatDialog} from '@angular/material';
import {NewProjectComponent} from '../new-project/new-project.component';
import {InviteComponent} from '../invite/invite.component';
import {ConfirmDialogComponent} from '../../shared/confirm-dialog/confirm-dialog.component';
import {slideToRight} from '../../animation/router.anim';
import {listAnimation} from '../../animation/list.anim';

@Component({
    selector: 'app-project-list',
    templateUrl: './project-list.component.html',
    styleUrls: ['./project-list.component.scss'],
    animations: [
        slideToRight,
        listAnimation
    ]
})
export class ProjectListComponent implements OnInit {
    projects = [
        {'id': 1, 'name': '企业写作平台', 'desc': '这是一个企业内部项目', 'coverImg': '/assets/img/covers/0.jpg'},
        {'id': 2, 'name': '测试平台', 'desc': '这是一个测试平台', 'coverImg': '/assets/img/covers/1.jpg'}
    ];

    @HostBinding('@routeAnim') state;

    constructor(private dialog: MatDialog) {
    }

    ngOnInit() {
    }

    openNewProjectDialog() {
        const dialogRef = this.dialog.open(NewProjectComponent, {data: {title: '新建项目'}});
        dialogRef.afterClosed().subscribe(result => {
            console.log(result);
            this.projects = [...this.projects, {'id': 3, 'name': '新项目', 'desc': '这是一个新项目', 'coverImg': '/assets/img/covers/0.jpg'},
                {'id': 4, 'name': '又一个新项目', 'desc': '这是又一个新项目', 'coverImg': '/assets/img/covers/0.jpg'}];
        });
    }

    launchUpdateDialog() {
        const dialogRef = this.dialog.open(NewProjectComponent, {data: {title: '编辑项目'}});
        dialogRef.afterClosed().subscribe(result => console.log(result));
    }

    launchDeleteDialog(project) {
        const dialogRef = this.dialog.open(ConfirmDialogComponent, {data: {title: '删除项目', content: '确认删除项目？'}});
        dialogRef.afterClosed().subscribe(result => {
            console.log(result);
            this.projects = this.projects.filter(p => p.id !== project.id);
        });
    }

    launchInviteDialog() {
        this.dialog.open(InviteComponent);
    }

}
