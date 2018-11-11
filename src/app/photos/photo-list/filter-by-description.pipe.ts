import {Pipe, PipeTransform} from '@angular/core';
import {IPhoto} from '../photo/photo';

@Pipe({name: 'filterByDescription'})
export class FilterByDescriptionPipe implements PipeTransform {

  transform(photos: IPhoto[], descriptionQuery: string): any {
    descriptionQuery = descriptionQuery.trim().toLocaleLowerCase();

    if(descriptionQuery) {
      return photos.filter(photo =>
        photo.description.toLocaleLowerCase().includes(descriptionQuery)
      );
    } else {
      return photos;
    }
  }
}
