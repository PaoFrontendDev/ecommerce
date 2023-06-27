import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Category } from './shared/models/category.model';
import { Product } from './shared/models/product.model';
import { CategoryService } from './shared/services/category.service';
import { ProductService } from './shared/services/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'nate-ecommerce';
  categories: Category[] = []
  products: Product[] = []

  constructor(private productService: ProductService, private categoryService: CategoryService){

  }


  ngOnInit(): void {

      this.categoryService.getAllCategories().subscribe(categories => {
        this.categories = categories
      })

      
      this.productService.getProduct('tduaGozOnC1ZYcBFDrIa').subscribe(data => {
        console.log(data)
      });
  }


getProducts(category: Category){
  this.productService.getAllProductsByCategories(category.id).subscribe(products => {
    this.products = products
  });
}


}
