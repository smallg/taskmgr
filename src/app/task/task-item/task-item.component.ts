import {Component, Input, OnInit, EventEmitter, Output, HostListener, ChangeDetectionStrategy} from '@angular/core';
import {itemAnimate} from '../../animation/item.anim';

@Component({
    selector: 'app-task-item',
    templateUrl: './task-item.component.html',
    styleUrls: ['./task-item.component.scss'],
    animations: [
        itemAnimate
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskItemComponent implements OnInit {

    @Input() item;
    @Input() avatar;
    @Output() taskClick = new EventEmitter<void>();
    widerPriority = 'in';

    constructor() {
    }

    ngOnInit() {
        this.avatar = this.item.owner.avatar ? this.item.owner.avatar : 'unassigned';
    }

    @HostListener('mouseenter', ['$event.target'])
    onMouseEnter(target) {
        this.widerPriority = 'out';
    }

    @HostListener('mouseleave', ['$event.target'])
    onMouseOut(target) {
        this.widerPriority = 'in';
    }

    onItemClick() {
        this.taskClick.emit();
    }

    onCheckBoxClick(ev: Event) {
        ev.stopPropagation();
    }

}
