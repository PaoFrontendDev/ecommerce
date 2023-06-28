import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/shared/models/category.model';
import { Product } from 'src/app/shared/models/product.model';
import { ProductService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  categoryName: string
  products: Product[] = []
  constructor(private route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit(): void {
    this.categoryName = this.route.snapshot.params.category.replace('-', ' ')


    this.productService.getAllProductsByCategories(this.route.snapshot.params.categoryId).subscribe(products => {
      this.products = products
    });
  }

}
