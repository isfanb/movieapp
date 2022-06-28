import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _service: MovieService) { }

  topDisplay: any = [];
  name = '';
  resName: any;

  ngOnInit(): void {
    this._service.topHead().subscribe(res => {
      console.log(res.Search)
      this.topDisplay = res.Search;
    });
  }

  getByTitle() {
    this._service.getMovieByName(this.name).subscribe(res => {
      this.resName = res.Search;
      this.name = '';
    })
  }
}
