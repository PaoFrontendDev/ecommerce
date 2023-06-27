import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  constructor(private afs: AngularFirestore,) { }

  getAllCategories(): Observable<Category[]>{
    return this.afs.collection<any>('categories').snapshotChanges().pipe(
     map(changes => changes.map(c => ({ id: c.payload.doc.id, ...c.payload.doc.data(), })
     ))
   );
 }
}
