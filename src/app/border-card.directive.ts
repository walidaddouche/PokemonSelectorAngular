import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
    selector: '[pokemonBorderCard]'
})
// DIRECTIVE
export class BorderCardDirective {

    constructor(private el: ElementRef) {
        this.setBorder("#f5f5f5")
        this.setHeight(180);

    }

    @HostListener("mouseenter") onMouseEnter() {
        this.setBorder("#009688");
    }

    @HostListener("mouseleave") onMouseLeave() {
        this.setBorder("#f5f5f5");
    }

    setBorder(color: String) {
        this.el.nativeElement.style.border = `solid 4px  ${color}`;
    }

    setHeight(height: number) {
        this.el.nativeElement.style.height = `${height}px`;
    }

}
