import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
    selector: '[appDroppable]'
})
export class DropDirective {

    @Input() dragEnterClass: string;

    constructor(private el: ElementRef, private render: Renderer2) {
    }

    @HostListener('dragenter', ['$event'])
    onDragEnter(ev: Event) {
        if (this.el.nativeElement === ev.target) {
            this.render.addClass(this.el.nativeElement, this.dragEnterClass);
        }
    }

    @HostListener('dragover', ['$event'])
    onDragOver(ev: Event) {
        if (this.el.nativeElement === ev.target) {
        }
    }

    @HostListener('dragleave', ['$event'])
    onDragLeave(ev: Event) {
        if (this.el.nativeElement === ev.target) {
            this.render.removeClass(this.el.nativeElement, this.dragEnterClass);
        }
    }

    @HostListener('drop', ['$event'])
    onDrop(ev: Event) {
        if (this.el.nativeElement === ev.target) {
            this.render.removeClass(this.el.nativeElement, this.dragEnterClass);
        }
    }

}
