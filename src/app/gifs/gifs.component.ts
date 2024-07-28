import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-gifs',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>gifs works!</p>`,
  styleUrl: './gifs.component.css',
})
export class GifsComponent { }
