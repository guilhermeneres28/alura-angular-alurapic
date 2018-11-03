import { Component, OnInit, Input } from '@angular/core';
import { IPhoto } from '../../photo/photo';

@Component({
  selector: 'ap-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  @Input() sphotos: IPhoto[] = [];

  constructor() { }

  ngOnInit() {
  }

}
