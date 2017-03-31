import { Component, OnInit } from '@angular/core';
import { Peticion } from "../../model/peticion";
import { FV } from "../../model/fv";
import { PeticionService } from "../../providers/peticion.service";
import { Router } from '@angular/router';
import { FirebaseListObservable } from "angularfire2";


@Component({
  moduleId: module.id,
  selector: 'app-frutas-peticiones',
  templateUrl: './frutas-peticiones.component.html',
  styleUrls: [ './frutas-peticiones.component.css' ]
})
export class FrutasPeticionesComponent implements OnInit {

  public frutasDash: FirebaseListObservable<FV[]>;

  constructor(public peticionService: PeticionService, private router: Router) {

  }

  ngOnInit(): void {
    this.frutasDash = this.peticionService.getFrutas();
      
  }

  onSelectProducto(producto: FV): void {

    var categoria = 'FRU&VER';
    this.peticionService.addPeticion(producto.name, categoria);
    
  }
}


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/