import { Component, OnInit } from "@angular/core";
import { Product } from "./product.component";
import { ProductService } from "./product.service";

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
  pageTitle: string = "Product List";
  imageWidth: number = 30;
  imageMargin: number = 2;
  showImage: boolean = true;
  filteredList: Product[];
  _filterText: string;
  teste: any;
  products: Product[];
  errorMessage: string;
  
  constructor(private productService: ProductService) {
    this.filterText = "";
  }

  get filterText(): string {
    return this._filterText;
  }
  
  set filterText(value: string) {
    this._filterText = value;
    this.filteredList = this.filterText ? this.performFilter(this._filterText) : this.products;
  }
  
  toggleImage(): void {
    this.showImage = !this.showImage;
  }
  
  clearFilterText(): void {
    this.filterText = '';
  }
  
  showX(): boolean {
    return this.filterText !== '';
  }
  
  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      products => {
        this.products = products;
        this.filteredList = this.products;
    },
      error => this.errorMessage = <any>error
    );
  }

  performFilter(filterBy: string): Product[] {
    filterBy = filterBy.toLocaleLowerCase();
    this.filteredList = this.products.filter((product: Product) => 
      product.name.toLocaleLowerCase().indexOf(filterBy) !== -1
    );
    
    return this.filteredList;
  }

  onRatingClicked(message: string): void {
    this.pageTitle = 'Product List ' + message;
  }
    
}