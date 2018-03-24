import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
    selector: '[appDraggable][draggedClass]'
})
export class DragDirective {

    @Input() draggedClass: string;
    private _isDraggable = false;

    @Input('appDraggable')
    set Draggable(val) {
        this._isDraggable = val;
        this.render.setAttribute(this.el.nativeElement, 'draggable', `${val}`);
    }

    get isDraggable() {
        return this._isDraggable;
    }

    constructor(private el: ElementRef, private render: Renderer2) {
    }

    @HostListener('dragstart', ['$event'])
    onDragStart(ev: Event) {
        if (this.el.nativeElement === ev.target) {
            this.render.addClass(this.el.nativeElement, this.draggedClass);
        }
    }

    @HostListener('dragend', ['$event'])
    onDragEnd(ev: Event) {
        if (this.el.nativeElement === ev.target) {
            this.render.removeClass(this.el.nativeElement, this.draggedClass);
        }
    }

}
