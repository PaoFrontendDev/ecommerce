import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/compat/firestore";
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private afs: AngularFirestore,) { }


  // getAllProducts(): AngularFirestoreCollection<Product> {
  //   return this.afs.collection<any>('Products');
  // }


  getAllProducts(): Observable<Product[]>{
     return this.afs.collection<any>('Products').snapshotChanges().pipe(
      map(changes => changes.map(c => ({ id: c.payload.doc.id, ...c.payload.doc.data(), })
      ))
    );
  }

  // getProduct(productId: string): Observable<Product>{
  //   return this.afs.doc<any>(`Products/${productId}`)
  //   .snapshotChanges().pipe(
  //     map(changes => {
  //       const data = changes.payload.data();
  //       const id = changes.payload.id;
  //       return { id, ...data};
  //     }));
  // }

}
