import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
    selector: '[pokemonBorderCard]'
})
// DIRECTIVE
export class BorderCardDirective {

    constructor(private el: ElementRef) {
        this.setBorder("#f5f5f5")
        this.setHeight();
    }

    @Input("pokemonBorderCard") borderColor : string ; // Avec ALIAS

    private initialColor : string = "#f5f5f5"
    private defaultColor : string = "#009688"
    private defaultHeight : number = 180;

    @HostListener("mouseenter") onMouseEnter() {
        this.setBorder(this.borderColor || this.defaultColor);
    }

    @HostListener("mouseleave") onMouseLeave() {
        this.setBorder(this.initialColor);
    }

    setBorder(color: String) {
        this.el.nativeElement.style.border = `solid 4px  ${color}`;
    }

    setHeight() {
        this.el.nativeElement.style.height = `${this.defaultHeight}px`;
    }

}
