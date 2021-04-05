import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-cate-list',
  templateUrl: './cate-list.component.html',
  styleUrls: ['./cate-list.component.css']
})
export class CateListComponent implements OnInit {
  cates: Category[] = [];
  
  constructor(private cateService: CategoryService) { }

  ngOnInit(): void {
    this.getCateList();
    
  }

  getCateList(){
    this.cateService.getAll().subscribe(data => {
      this.cates = data;
    })
  }

}
