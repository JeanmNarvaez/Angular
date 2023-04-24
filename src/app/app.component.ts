import { Component, OnInit } from '@angular/core';

interface Tarjeta{
  titulo: string;
  subtitulo:string;
  nro?:number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-primer-proyecto-web';
  public ArregloTarjeta: Tarjeta[]=[]
  ngOnInit(): void{

this.ArregloTarjeta =[
  {titulo: "Video 1", subtitulo: "Subtitulo Video 1",nro:5},
  {titulo: "Video 2", subtitulo: "Subtitulo Video 2",nro:5},
  {titulo: "Video 3", subtitulo: "Subtitulo Video 3",nro:5},
  //
]


  }
}
