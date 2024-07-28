import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Gif } from '../../interfaces/gif.interface';
import {GifsCardComponent} from "../gifs-card/gifs-card.component";

@Component({
  selector: 'gifs-card-list',
  standalone: true,
  imports: [
    CommonModule,
    GifsCardComponent
  ],
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.css',
})
export class CardListComponent {

  @Input() gifs: Gif[] = [];
}
