import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../product.service';
import { Product } from '../product';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  id: any = 0;
  productForm!: FormGroup;
  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _ProductService: ProductService,
    private _Router: Router
  ) { }

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      this.id = id;
      let product = this._ProductService.find(id);
      this.productForm = new FormGroup({
        name: new FormControl(product.name, [
          Validators.required,
          Validators.minLength(5)
        ]),
        price: new FormControl(product.price, [
          Validators.required
        ]),
});

  });
}
onSubmit() {
  let formData = this.productForm.value;
  let product: Product = {
    name: formData.name,
    price: formData.price
  }
  this._ProductService.update(this.id, product);
  this._Router.navigate(['/products']);
}
}
