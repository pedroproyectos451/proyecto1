import { Component, OnInit } from '@angular/core';
import { Peticion } from "../../model/peticion";
import { Carne } from "../../model/carne";
import { PeticionService } from "../../providers/peticion.service";
import { Router } from '@angular/router';
import { FirebaseListObservable } from "angularfire2";


@Component({
  moduleId: module.id,
  selector: 'app-carnes-peticiones',
  templateUrl: './carnes-peticiones.component.html',
  styleUrls: [ './carnes-peticiones.component.css' ]
})
export class CarnesPeticionesComponent implements OnInit {

  public carnesDash: FirebaseListObservable<Carne[]>;

  constructor(public peticionService: PeticionService, private router: Router) {

  }

  ngOnInit(): void {
    this.carnesDash = this.peticionService.getCarnes();
      
  }

  onSelectProducto(producto: Carne): void {

    var categoria = 'CARNE';
    this.peticionService.addPeticion(producto.name, categoria);
    
  }
}


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/