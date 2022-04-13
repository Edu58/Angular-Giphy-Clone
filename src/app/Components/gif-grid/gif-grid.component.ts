import { Component, OnInit } from '@angular/core';
import { GetGifsService } from 'src/app/Services/get-gifs.service';

@Component({
  selector: 'app-gif-grid',
  templateUrl: './gif-grid.component.html',
  styleUrls: ['./gif-grid.component.css']
})
export class GifGridComponent implements OnInit {

  Gifs!: any

  constructor(private api: GetGifsService) { }

  ngOnInit (): void {
    this.api.getGifs().subscribe( ( data: any ) => {
      this.Gifs = data.data
    }
    )}

  // getGifs () {
  //    )
  // }

}
