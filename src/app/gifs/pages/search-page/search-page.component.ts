import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { GifListComponent } from '../../components/gif-list/gif-list.component';
import { GifsService } from '../../services/gifs.service';
import { Gif } from '../../interfaces/gif.interface';

@Component({
  selector: 'app-search-page',
  imports: [GifListComponent],
  templateUrl: './search-page.component.html',
})
export default class SearchPageComponent {
  gifsService = inject(GifsService);

  gifs: any = [];

  onSearch(query: string) {
    console.log({ query });
    this.gifs = this.gifsService.searchGifs(query);
    console.log(this.gifs);
  }
}
