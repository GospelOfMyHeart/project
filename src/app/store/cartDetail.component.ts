import { Component } from "@angular/core";
import { Cart } from "../model/cart.model";
import {Router} from '@angular/router';
@Component({
moduleId: module.id,
templateUrl: "cartDetail.component.html"
})
export class CartDetailComponent {
constructor(public cart: Cart, private router:Router) { }
}
