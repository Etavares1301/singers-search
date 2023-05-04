import { Component, DoCheck } from '@angular/core';
import { SingersService } from 'src/app/service/singers.service';
import { FormGroup, FormControl } from '@angular/forms';
import { ListHistory } from 'src/app/core/model/list-history';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements DoCheck {
 
  artists: any[] = [];
  albums: any[] = [];
  toggleImg: boolean = true;
  resultSearch: boolean = false;
  addItemListHistory: string = '';
  listHistory: Array<ListHistory> = JSON.parse(localStorage.getItem('list') || '[]');

  constructor(private singersService: SingersService) {}

  ngDoCheck() {
    this.setLocalStorage();
  }

  public form = new FormGroup({
    search: new FormControl(''),
  });

  search(search: string) {
    this.getSearchArtists(search);
    this.getSearchAlbums(search);
    this.submitItemListHistory(search);
    this.toggleImg = false;
    this.resultSearch = true;
    this.form.controls['search'].setValue('');
  }

  getSearchArtists(artistName: string) {
    this.singersService.getSearchArtists(artistName).subscribe((res) => {
      this.artists = res.results.artistmatches.artist;
    });
  }

  getSearchAlbums(albumsName: string) {
    this.singersService.getSearchAlbums(albumsName).subscribe((res) => {
      this.albums = res.results.albummatches.album;
    });
  }

  setLocalStorage() {
    if (this.listHistory)
      localStorage.setItem('list', JSON.stringify(this.listHistory));
  }

  submitItemListHistory(valueInput: string) {
    this.addItemListHistory = valueInput.trim();

    if (this.addItemListHistory) {
      this.listHistory.push({ listItem: this.addItemListHistory });
      this.addItemListHistory = '';
    }
  }

  deleteItemListHistory(event: number) {
    this.listHistory.splice(event, 1);
  }

  deleteAllListHistory() {
    const confirm = window.confirm('Você realmente deseja deletar tudo?');
    if (confirm) this.listHistory = [];
  }
}
