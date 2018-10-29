import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IPhoto } from "./photo";

const API = 'http://localhost:3000';


@Injectable({ providedIn: 'root'})
export class PhotoService {

    constructor(private http: HttpClient){}

    listarDeDeterminadoUsuario(nomeUsuario: string){
       return this.http.get<IPhoto[]>(API + '/flavio/photos');
    }


}