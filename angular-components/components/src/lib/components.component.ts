import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-components',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      components works!
    </p>
  `,
  styles: ``
})
export class ComponentsComponent {

}
