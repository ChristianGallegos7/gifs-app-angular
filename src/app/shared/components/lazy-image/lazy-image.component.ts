import {Component, Input, OnInit} from '@angular/core';
import {NgStyle} from "@angular/common";

@Component({
  selector: 'shared-lazy-image',
  standalone: true,
  imports: [
    NgStyle
  ],
  templateUrl: './lazy-image.component.html',
  styleUrl: './lazy-image.component.scss'
})
export class LazyImageComponent implements OnInit {
  @Input()
  public url!: string;

  @Input() alt: string = '';

  public hasLoaded: boolean = false;

  ngOnInit() {
    if (!this.url) throw new Error('Url is required');
  }

  onLoad() {
    console.log('Image loaded')
    this.hasLoaded = true;
  }
}
