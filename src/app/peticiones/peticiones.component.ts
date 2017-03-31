import { Component, OnInit } from '@angular/core';
import { Peticion } from "../../model/peticion";
import { Producto } from "../../model/producto";
import { PeticionService } from "../../providers/peticion.service";
import { Router } from '@angular/router';
import { FirebaseListObservable } from "angularfire2";


@Component({
  moduleId: module.id,
  selector: 'app-peticiones',
  templateUrl: './peticiones.component.html',
  styleUrls: [ './peticiones.component.css' ]
})
export class PeticionesComponent implements OnInit {

  public productosDash: FirebaseListObservable<Producto[]>;

  constructor(public peticionService: PeticionService, private router: Router) {

  }

  ngOnInit(): void {
    this.productosDash = this.peticionService.getProductos();
      
  }

  onSelectProducto(producto: Producto): void {

    var categoria = 'FRECUENTE';
    this.peticionService.addPeticion(producto.name, categoria);
    
  }
}


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/