import {Component, OnInit} from '@angular/core';
import {User} from '../../domain/user';

@Component({
    selector: 'app-invite',
    templateUrl: './invite.component.html',
    styleUrls: ['./invite.component.scss']
})
export class InviteComponent implements OnInit {

    items = [
        {id: 1, name: 'zhangsan'},
        {id: 2, name: 'lisi'},
        {id: 3, name: 'wangmazi'}
    ];

    constructor() {
    }

    ngOnInit() {
    }

    save() {

    }

}
