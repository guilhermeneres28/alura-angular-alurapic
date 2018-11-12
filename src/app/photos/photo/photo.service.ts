import {HttpClient, HttpParams} from '@angular/common/http';
import { Injectable } from "@angular/core";
import { IPhoto } from "./photo";

const API = 'http://localhost:3000';


@Injectable({ providedIn: 'root'})
export class PhotoService {

    constructor(private http: HttpClient){}

    listarDeDeterminadoUsuario(userName: string){
       return this.http.get<IPhoto[]>(API + '/' + userName + '/photos');
    }

    listarDeDeterminadoUsuarioPaginado(userName: string, page: number){

      const params = new HttpParams()
        .append('page', page.toString());

      return this.http.get<IPhoto[]>(API + '/' + userName + '/photos', {params: params});
    }
}
