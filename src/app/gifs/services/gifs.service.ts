import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Gif, SearchResponse } from '../interfaces/gif.interface';
// const GIPHY_API_KEY = 'MNKPfuuXHwv8hLUsWByjAG8juzyToank'


@Injectable({
  providedIn: 'root'
})

export class GifsService {

  public gifsList: Gif[] = [];

  private _tagHistory: string[] = [];

  private apiKey: string = 'MNKPfuuXHwv8hLUsWByjAG8juzyToank';
  private url = 'https://api.giphy.com/v1/gifs';

  constructor(private http: HttpClient) {
    this.loadLocalStorage();

  }

  // Método getter para obtener el historial de tags
  get tagHistory(): string[] {
    return [...this._tagHistory];
  }

  // Método para organizar el historial de tags
  private organizeHistory(tag: string): void {
    tag = tag.toLowerCase();

    // Si el tag ya existe, se elimina
    this._tagHistory = this._tagHistory.filter(t => t !== tag);

    // Se agrega el tag al inicio del historial
    this._tagHistory.unshift(tag);

    // Se asegura que el historial no tenga más de 10 tags
    if (this._tagHistory.length > 10) {
      this._tagHistory.pop();
    }
    this.saveLocalStorage()
  }
  //guardar los tags de busquedas en el local storage
  private saveLocalStorage():void {
    localStorage.setItem('history', JSON.stringify(this._tagHistory) )
  }
  //obtener los tags del localStorage
  private loadLocalStorage(){
    if(!localStorage.getItem('history')) return;
    this._tagHistory = JSON.parse(localStorage.getItem('history')!)
    this.searchTag(this._tagHistory[0]);
  }

  // Método para buscar un tag y organizar el historial
  searchTag(tag: string): void {
    if (tag.trim().length === 0) return;
    this.organizeHistory(tag);

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', 10)
      .set('q', tag)

    this.http.get<SearchResponse>(`${this.url}/search`, { params }).subscribe(resp => {
      this.gifsList = resp.data;
    })


  }
}
