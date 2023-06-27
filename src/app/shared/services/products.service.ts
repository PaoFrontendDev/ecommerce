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


  getAllProductsByCategories(categoryID: string): Observable<Product[]>{
     return this.afs.collection<any>('products', ref => ref.where('categories' , 'array-contains', categoryID)).snapshotChanges().pipe(
      map(changes => changes.map(c => ({ id: c.payload.doc.id, ...c.payload.doc.data(), })
      ))
    );
  }

  getFeaturesProducts(): Observable<Product[]>{
    return this.afs.collection<any>('products', ref => ref.where('isFeatures' , '==', true)).snapshotChanges().pipe(
     map(changes => changes.map(c => ({ id: c.payload.doc.id, ...c.payload.doc.data(), })
     ))
   );
 }

  getProduct(productId: string): Observable<Product>{
    return this.afs.doc<any>(`products/${productId}`)
    .snapshotChanges().pipe(
      map(changes => {
        const data = changes.payload.data();
        const id = changes.payload.id;
        return { id, ...data};
      }));
  }

}
