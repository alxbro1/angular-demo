import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  Renderer2,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[appTaskCompleted]',
  standalone: true,
})
export class TaskCompletedDirective implements OnChanges {
  @Input() appChecked!: boolean;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['appChecked']) {
      if (this.appChecked) {
        this.renderer.setStyle(this.el.nativeElement, 'color', 'green');
        this.renderer.setStyle(
          this.el.nativeElement,
          'text-decoration',
          'line-through'
        );
      } else {
        this.renderer.setStyle(this.el.nativeElement, 'color', 'black');
        this.renderer.removeStyle(this.el.nativeElement, 'text-decoration');
      }
    }
  }
}
