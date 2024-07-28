import { Gif } from './../../interfaces/gif.interface';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SearchBoxComponent } from '../../components/search-box/search-box.component';
import { CardListComponent } from '../../components/card-list/card-list.component';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-home',
  standalone: true,
  imports: [
    CommonModule,
    SearchBoxComponent,
    CardListComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {

  constructor(private gifService: GifsService) {
  }

  get gifs(): Gif[] {
    return this.gifService.gifsList;
  }
}
