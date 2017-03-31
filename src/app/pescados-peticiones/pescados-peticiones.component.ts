import { Component, OnInit } from '@angular/core';
import { Peticion } from "../../model/peticion";
import { Pescado } from "../../model/pescado";
import { PeticionService } from "../../providers/peticion.service";
import { Router } from '@angular/router';
import { FirebaseListObservable } from "angularfire2";


@Component({
  moduleId: module.id,
  selector: 'app-pescados-peticiones',
  templateUrl: './pescados-peticiones.component.html',
  styleUrls: [ './pescados-peticiones.component.css' ]
})
export class PescadosPeticionesComponent implements OnInit {

  public pescadosDash: FirebaseListObservable<Pescado[]>;

  constructor(public peticionService: PeticionService, private router: Router) {

  }

  ngOnInit(): void {
    this.pescadosDash = this.peticionService.getPescados();
      
  }

  onSelectProducto(producto: Pescado): void {

    var categoria = 'PESCADO';
    this.peticionService.addPeticion(producto.name, categoria);
    
  }
}


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/