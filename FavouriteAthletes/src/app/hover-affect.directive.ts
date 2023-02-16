import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHoverAffect]'
})
export class HoverAffectDirective {
  @Input('hoverAffect')hoverAffect:string="";

  constructor(private EL:ElementRef) { }
  
  @HostListener('mouseenter') onMouseEnter(){
    debugger
    if (this.hoverAffect === 'underline') {
      this.EL.nativeElement.style.textDecoration = 'underline';
    } else if (this.hoverAffect === 'bold') {
      this.EL.nativeElement.style.fontWeight = 'bold';
    }
  }
      @HostListener('mouseleave') onMouseLeave(){
        if (this.hoverAffect === 'underline') {
          this.EL.nativeElement.style.textDecoration = 'none';
        } else if (this.hoverAffect === 'bold') {
          this.EL.nativeElement.style.fontWeight = 'normal';
        }
        
    
}}



