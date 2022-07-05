import { Comentario } from './Entidad/Comentario';
import { Municipios } from './Entidad/Municipios';
import { ServicioService } from './Service/servicio.service';
import { Estados } from './Entidad/Estados';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title= 'Estados_Municipios';

  estados:Estados[];
  municipio:Municipios[];
  comentarios:Comentario[];
  comentario:Comentario = new Comentario();

  constructor (private servicio:ServicioService) {}

  ngOnInit():void {
      this.servicio.listarEstados().subscribe(data =>{
        this.estados = data;
      });

      this.servicio.listarMunicipios().subscribe(data=>{
        this.municipio = data;
      })

      this.listarComentario();
  }

  saveComentario(){
    this.comentario.fecha = new Date();
    this.servicio.GuardarComentario(this.comentario).subscribe(data =>{
      alert("Se guardo exitosamente");
      this.listarComentario();
    })

  }

  listarComentario(){
    this.servicio.listarComentario().subscribe(data =>{
      this.comentarios = data;
    })
  }


}
