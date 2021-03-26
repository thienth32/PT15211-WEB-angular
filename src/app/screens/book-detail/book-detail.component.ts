import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  bookId: string;
  async ngOnInit() {
    await this.route.params.subscribe(params => {
      this.bookId = params['bookId'];
    });
    
  }

}
