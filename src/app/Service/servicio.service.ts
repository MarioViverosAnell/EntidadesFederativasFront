import { Comentario } from './../Entidad/Comentario';
import { Municipios } from './../Entidad/Municipios';
import { Estados } from './../Entidad/Estados';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor( private http:HttpClient) { }

  urlListarEstados = 'http://localhost:9000/WServiceEstados/listar';
  urlListarMunicipios = 'http://localhost:9000/WserviceMunicipios/listar';
  urlGuardarComentario = 'http://localhost:9000/WserviceComentarios/guardar';
  urlListarComentarios = 'http://localhost:9000/WserviceComentarios/listar';
listarEstados(){
  return this.http.get<Estados[]>(this.urlListarEstados);
}

listarMunicipios(){
  return this.http.get<Municipios[]>(this.urlListarMunicipios);
}

GuardarComentario(comentario:Comentario){
  return this.http.post(this.urlGuardarComentario , comentario);
}

listarComentario(){
  return this.http.get<Comentario[]>(this.urlListarComentarios);
}

}
