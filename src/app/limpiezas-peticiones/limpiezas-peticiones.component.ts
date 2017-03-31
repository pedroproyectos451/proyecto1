import { Component, OnInit } from '@angular/core';
import { Peticion } from "../../model/peticion";
import { Limpieza } from "../../model/limpieza";
import { PeticionService } from "../../providers/peticion.service";
import { Router } from '@angular/router';
import { FirebaseListObservable } from "angularfire2";


@Component({
  moduleId: module.id,
  selector: 'app-limpiezas-peticiones',
  templateUrl: './limpiezas-peticiones.component.html',
  styleUrls: [ './limpiezas-peticiones.component.css' ]
})
export class LimpiezasPeticionesComponent implements OnInit {

  public limpiezasDash: FirebaseListObservable<Limpieza[]>;

  constructor(public peticionService: PeticionService, private router: Router) {

  }

  ngOnInit(): void {
    this.limpiezasDash = this.peticionService.getLimpiezas();
      
  }

  onSelectProducto(producto: Limpieza): void {

    var categoria = 'LIMPIEZA';
    this.peticionService.addPeticion(producto.name, categoria);
    
  }
}


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/