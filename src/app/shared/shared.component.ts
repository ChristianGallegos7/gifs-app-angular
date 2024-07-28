import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-shared',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>shared works!</p>`,
  styleUrl: './shared.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SharedComponent { }
