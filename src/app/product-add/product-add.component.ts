import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../product.service';
import { Product } from '../product';
@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  productForm!: FormGroup;

  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _ProductService: ProductService,
    private _Router: Router
  ) { }

  ngOnInit(): void {
    this.productForm = new FormGroup(
      {
        name: new FormControl('', [
          Validators.required,
          Validators.minLength(5)
        ]),
        price: new FormControl('', [
          Validators.required
        ]),

      }
    );
  }
  onSubmit() {
    let formData = this.productForm.value;
    let product: Product = {
      name: formData.name,
      price: formData.price
    }
    this._ProductService.store(product);
    this._Router.navigate(['/products']);
  }

}
