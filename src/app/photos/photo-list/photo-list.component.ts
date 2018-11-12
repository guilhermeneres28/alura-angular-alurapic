import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {IPhoto} from '../photo/photo';
import {Subject} from 'rxjs';
import {debounceTime} from 'rxjs/operators';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit, OnDestroy {

  /*

      EventBiding - (nomeDoEvento)="expressao" -> Fluxo: Template to Component
      dataBiding ou property - [nomeDaProperty]="expressao" -> Fluxo: Component to Template
      Implementando pipe para filtrar pela descricao

   */


  photos: IPhoto[] = [];
  filter = '';

  debounce: Subject<string> = new Subject<string>();


  constructor(private activatedRoute: ActivatedRoute){}

  ngOnInit(): void {
    this.photos = this.activatedRoute.snapshot.data.photos;
    this.debounce
      .pipe(debounceTime(300))
      .subscribe(filter => this.filter = filter);
  }

  ngOnDestroy(): void {
    this.debounce.unsubscribe();
  }

}
