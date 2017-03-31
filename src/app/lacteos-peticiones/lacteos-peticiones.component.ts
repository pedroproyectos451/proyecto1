import { Component, OnInit } from '@angular/core';
import { Peticion } from "../../model/peticion";
import { Lacteo } from "../../model/lacteo";
import { PeticionService } from "../../providers/peticion.service";
import { Router } from '@angular/router';
import { FirebaseListObservable } from "angularfire2";


@Component({
  moduleId: module.id,
  selector: 'app-lacteos-peticiones',
  templateUrl: './lacteos-peticiones.component.html',
  styleUrls: [ './lacteos-peticiones.component.css' ]
})
export class LacteosPeticionesComponent implements OnInit {

  public lacteosDash: FirebaseListObservable<Lacteo[]>;

  constructor(public peticionService: PeticionService, private router: Router) {

  }

  ngOnInit(): void {
    this.lacteosDash = this.peticionService.getLacteos();
      
  }

  onSelectProducto(producto: Lacteo): void {

    var categoria = 'LAC&OTROS';
    this.peticionService.addPeticion(producto.name, categoria);
    
  }
}


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/