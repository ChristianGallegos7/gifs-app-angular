import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { environment } from '@environments/environment';
import type { GiphyResponse } from '../interfaces/giphy.interface';
import { Gif } from '../interfaces/gif.interface';
import { GifMapper } from '../mapper/gif.mapper';

@Injectable({ providedIn: 'root' })
export class GifsService {
  http = inject(HttpClient);
  env = environment;

  trendingGifs = signal<Gif[]>([]);
  searchGifsResults = signal<Gif[]>([]);

  constructor() {
    this.loadTrendingGifs();
  }

  loadTrendingGifs() {
    this.http
      .get<GiphyResponse>(`${this.env.giphyUrl}/gifs/trending`, {
        params: {
          api_key: this.env.giphyApiKey,
          limit: '20',
        },
      })
      .subscribe((res) => {
        const gifs = GifMapper.mapGiphyItemsToGifsArray(res.data);
        this.trendingGifs.set(gifs);
      });
  }

  searchGifs(query: string) {
    this.http
      .get<GiphyResponse>(`${this.env.giphyUrl}/gifs/search`, {
        params: {
          api_key: this.env.giphyApiKey,
          q: query,
          limit: '20',
        },
      })
      .subscribe((res) => {
        const gifs = GifMapper.mapGiphyItemsToGifsArray(res.data);
        this.searchGifsResults.set(gifs);
      });
  }
}
