import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/shared/models/category.model';
import { Product } from 'src/app/shared/models/product.model';
import { CategoryService } from 'src/app/shared/services/category.service';
import { ProductService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  featuresProducts: Product[] = []
  categories: Category[] = []

  constructor(private productService: ProductService, private categoryService: CategoryService, private router: Router) { }

  ngOnInit(): void {

    this.categoryService.getAllCategories().subscribe(categories => {
      this.categories = categories
    })


    this.productService.getFeaturesProducts().subscribe(products => {
      this.featuresProducts = products
    })
  }

  goToProductList(category: Category) {
    this.router.navigateByUrl(`products/${category.name.toLowerCase().replace(' ', '-')}/${category.id}`)
  }

}
