import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { ProductService } from './shared/services/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'nate-ecommerce';

  constructor(private productService: ProductService){

  }


  ngOnInit(): void {
      // this.productService.getAllProducts().snapshotChanges().pipe(
      //   map(changes =>
      //     changes.map(c =>
      //       ({ id: c.payload.doc.id, ...c.payload.doc.data() })
      //     )
      //   )
      // ).subscribe(data => {
      //   console.log(data)
      // });

      // this.productService.getAllProducts().subscribe(data => {
      //   console.log(data)
      // });
  }




}
