import { Component } from "@angular/core";

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html'
})

export class ProductListComponent {
  pageTitle: string = "Product List";
  imageWidth: number = 40;
  imageMargin: number = 2;
  filterText: string = "";
  private showImage: boolean = true;
    products = [
        {
            "productId": 1,
            "productName": "Leaf Rake",
            "productCode": "GDN-0011",
            "releaseDate": "March 19, 2016",
            "description": "Leaf rake with 48-inch wooden handle.",
            "price": 19.95,
            "starRating": 3.2,
            "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4t7qeNBlt37H86le-PQDXek9Fa7HSr1SreeNwnL5j58h-uBSf"
          },
          {
            "productId": 2,
            "productName": "Garden Cart",
            "productCode": "GDN-0023",
            "releaseDate": "March 18, 2016",
            "description": "15 gallon capacity rolling garden cart",
            "price": 32.99,
            "starRating": 4.2,
            "imageUrl": "data:image/png;base64,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"
          }
    ];

    toggleImage(): void {
      this.showImage = !this.showImage;
    }

    clearFilterText(): void {
      this.filterText = '';
    }

    showX(): boolean {
      return this.filterText !== '';
    }
}