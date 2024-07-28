import {Component, Input, OnInit} from '@angular/core';
import {Gif} from "../../interfaces/gif.interface";
import {LazyImageComponent} from "../../../shared/components/lazy-image/lazy-image.component";

@Component({
  selector: 'gifs-card',
  standalone: true,
  imports: [LazyImageComponent],
  templateUrl: './gifs-card.component.html',
  styleUrl: './gifs-card.component.scss'
})
export class GifsCardComponent implements OnInit{
  @Input()
  public gif!:Gif;

  ngOnInit() {
    if(!this.gif) throw new Error('Gif is required');
  }
}
