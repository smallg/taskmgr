import {Component, OnInit} from '@angular/core';

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
                    owner: {
                        id: 1,
                        name: '张三',
                        avatar: 'avatars:svg-11'
                    },
                    dueDate: new Date()
                },
                {
                    id: 2,
                    desc: '任务二：BBB',
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
                    owner: {
                        id: 1,
                        name: '张三',
                        avatar: 'avatars:svg-11'
                    },
                    dueDate: new Date()
                },
                {
                    id: 4,
                    desc: '任务四：DDD',
                    owner: {
                        id: 2,
                        name: '李四',
                        avatar: 'avatars:svg-12'
                    },
                    dueDate: new Date()
                }
            ]
        }
    ];

    constructor() {
    }

    ngOnInit() {
    }

    add() {

    }

}
