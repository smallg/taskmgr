import {Component, OnInit, Input, Output, EventEmitter, HostBinding, HostListener} from '@angular/core';
import {cardAnimate} from '../../animation/card.anim';

@Component({
    selector: 'app-project-item',
    templateUrl: './project-item.component.html',
    styleUrls: ['./project-item.component.scss'],
    animations: [
        cardAnimate
    ]
})
export class ProjectItemComponent implements OnInit {

    @Input() item;
    @Output() onInvite = new EventEmitter<void>();
    @Output() onEdit = new EventEmitter<void>();
    @Output() onDelete = new EventEmitter<void>();
    @HostBinding('@card') cardState = 'out';

    constructor() {
    }

    ngOnInit() {
    }

    @HostListener('mouseenter', ['$event.target'])
    onMouseEnter(target) {
        this.cardState = 'hover';
    }

    @HostListener('mouseleave', ['$event.target'])
    onMouseOut(target) {
        this.cardState = 'out';
    }

    onInviteClick() {
        this.onInvite.emit();
    }

    onEditClick() {
        this.onEdit.emit();
    }

    onDeleteClick() {
        this.onDelete.emit();
    }

}
