import { Directive,ElementRef, Renderer, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {
  
  @HostListener('mouseenter') me(){
  	this.color = 'green';
  }

  @HostListener('mouseleave') ml(){
  	this.color = 'black';
  }

  @HostBinding('style.color') get Color(){
  	return this.color;
  }

  private color = 'black';

  constructor(private elementRef: ElementRef, private renderer: Renderer) { 
  	
//Case 1
  	//this.elementRef.nativeElement.style.color = 'green';
  	
//Case 2
  	//this.renderer.setElementStyle(this.elementRef.nativeElement,'color','green');
  }
}
