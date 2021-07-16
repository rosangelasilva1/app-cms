import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  constructor( private router:Router) { }

  ngOnInit() {}

  home(){
    this.router.navigateByUrl("/home")
  }


  abrirPaginas(){
    this.router.navigateByUrl("/paginas")
  }

  abrirAdministradores(){

  }

  sair(){

  }


}


