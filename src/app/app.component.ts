import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PT15211-WEB';
  name = 'Someone';
  
  products =[
    {
      name: "tivi",
      price: 4000
    },
    {
      name: "tủ lạnh",
      price: 2000
    },
    {
      name: "máy giặt",
      price: 5200
    }
  ];

  updateName(e){
    this.name = e.target.value
  }
}
