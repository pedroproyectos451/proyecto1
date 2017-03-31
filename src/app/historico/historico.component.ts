import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Centro } from "../../model/centro";

@Component({
  selector: 'app-historico',
  templateUrl: './historico.component.html',
  styleUrls: ['./historico.component.css']
})
export class HistoricoComponent implements OnInit {

  settings = {
    columns: {
      name: {
        title: 'Producto'
      },
      centro: {
        title: 'Centro'
      },
      precio: {
        title: 'Precio'
      },
      fecha: {
        title: 'Fecha'
      },
      categoria: {
        title: 'Categoría'
      }
    },
    actions:{
      add : false,
      edit: false,
      delete: false
    }
  };

 public peticionesHistorico: FirebaseListObservable<any[]>;

 historico: any[] = [];
  
  constructor(private af: AngularFire) {
    

    this.peticionesHistorico = af.database.list('/peticionesHistorico',{preserveSnapshot:true});
    this.peticionesHistorico.subscribe(snapshots => {
    snapshots.forEach(snapshot => {
        //console.log(snapshot.val());
        this.historico.push(snapshot.val());
        //console.log("Array Length = ",this.historico.length); // See the length of the array growing ;)
    });
    
});
  }

  ngOnInit() {
  }

}
