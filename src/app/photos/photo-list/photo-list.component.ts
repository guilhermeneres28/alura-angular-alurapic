import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../photo/photo.service';
import { ActivatedRoute } from '@angular/router';
import { IPhoto } from '../photo/photo';
import {activateRoutes} from '@angular/router/src/operators/activate_routes';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  /*

      EventBiding - (nomeDoEvento)="expressao" -> Fluxo: Template to Component
      dataBiding ou property - [nomeDaProperty]="expressao" -> Fluxo: Component to Template
      Implementando pipe para filtrar pela descricao

   */


  photos: IPhoto[] = [];
  filter = '';

  nome = 'flavio';


  constructor(private activatedRoute: ActivatedRoute){}

  ngOnInit(): void {
    this.photos = this.activatedRoute.snapshot.data.photos;

  }

}
