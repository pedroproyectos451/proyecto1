import {Injectable} from "@angular/core";
import {AngularFire, AuthProviders, AuthMethods, FirebaseListObservable,FirebaseObjectObservable} from 'angularfire2';
import {Peticion} from "../model/peticion" ;
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';



@Injectable()
export class PeticionService {
  
  public productos: FirebaseListObservable<any[]>;

  public carnes: FirebaseListObservable<any[]>;

  public pescados: FirebaseListObservable<any[]>;

  public limpiezas: FirebaseListObservable<any[]>;

  public lacteos: FirebaseListObservable<any[]>;

  public frutas: FirebaseListObservable<any[]>;

  public peticiones: FirebaseListObservable<any[]>;

  public peticionesHistorico: FirebaseListObservable<any[]>;
  
  public seleccionado:Peticion;
 

  constructor(public af: AngularFire) {
    
    this.peticiones = this.af.database.list('peticiones', {
      query: {
        orderByChild: 'name'
      }
    });

    this.productos = this.af.database.list('productos', {
      query: {
        orderByChild: 'name'
      }
    });

     this.carnes = this.af.database.list('carnes', {
      query: {
        orderByChild: 'name'
      }
    });

     this.pescados = this.af.database.list('pescados', {
      query: {
        orderByChild: 'name'
      }
    });

     this.lacteos = this.af.database.list('lacteos', {
      query: {
        orderByChild: 'name'
      }
    });

     this.frutas = this.af.database.list('frutas', {
      query: {
        orderByChild: 'name'
      }
    });

     this.limpiezas = this.af.database.list('limpiezas', {
      query: {
        orderByChild: 'name'
      }
    });


    this.peticionesHistorico = this.af.database.list('peticionesHistorico', {
      query: {
        orderByChild: 'name'
      }
    });
  }
  
  addPeticion(nombre,categoria) {
    var peticion = {
      name:nombre,
      precio:'',
      centro:'',
      fecha:'',
      categoria:categoria

    }
    this.peticiones.push(peticion);
  }

  deletePeticion(peticion){
    this.peticiones.remove(peticion.$key);
  }

  /*savePeticion(peticion) {
    if (peticion.$key) {
         this.af.database.object('/peticiones/' +peticion.$key).update({ name: peticion.name, precio: peticion.precio, centro:peticion.centro });
    }
 
  }*/

  savePeticion(peticion) {
    var peticionHistorico = {
        name:peticion.name,
        precio:peticion.precio,
        centro:peticion.centro,
        fecha:Date.now(),
        categoria:peticion.categoria
    };
    this.peticionesHistorico.push(peticionHistorico);
    this.peticiones.remove(peticion.$key);
 
  }

  getProductos(){

    return this.productos;
   
  }

  getCarnes(){

    return this.carnes;
   
  }

  getPescados(){

    return this.pescados;
   
  }

   getLacteos(){

    return this.lacteos;
   
  }

   getFrutas(){

    return this.frutas;
   
  }

   getLimpiezas(){

    return this.limpiezas;
   
  }


  /*getItem(name:string): Observable<any> {        
        return this.af.database.object('/productos/' +name).map((profile) => {
                console.log('inside success');
                console.log(profile);
                this.seleccionado = <Producto>profile;                    
                console.log(this.seleccionado);        
                return profile; 
            },
            error => {
                console.log(error)
            });
  }*/
}
