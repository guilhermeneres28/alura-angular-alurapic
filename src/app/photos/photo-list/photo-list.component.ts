import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../photo/photo.service';
import { ActivatedRoute } from '@angular/router';
import { IPhoto } from '../photo/photo';

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


  constructor(
    private photoService: PhotoService,
    private activatedRoute: ActivatedRoute
  ){}

  ngOnInit(): void {

    const userName = this.activatedRoute.snapshot.params.userName;

    this.photoService
    .listarDeDeterminadoUsuario(userName)
    .subscribe(photos =>  this.photos = photos);

  }

}
