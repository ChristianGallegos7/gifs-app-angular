import { Gif } from '../interfaces/gif.interface';
import { GiphyItem } from '../interfaces/giphy.interface';

export class GifMapper {
  static mapGipthyItemToGif(item: GiphyItem): Gif {
    return {
      id: item.id,
      title: item.title,
      url: item.images.original.url,
    };
  }

  static mapGiphyItemsToGifsArray(items: GiphyItem[]): Gif[] {
    return items.map((item) => this.mapGipthyItemToGif(item));
  }
}
