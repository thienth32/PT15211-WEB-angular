import { Component, OnInit } from '@angular/core';
import {Hero} from '../../models/hero';
import {HEROES} from '../../mock-data/HEROES';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {

  heroes: Array<Hero> = HEROES;

  /**
   * BTVN
   * trong màn hình hero-list tạo dữ liệu MONSTER gồm các thông tin
   * id, name, image, detail, spells (phép thuật)
   * hiển thị danh sách thông tin của các quái vật ở bên dưới thông tin của các heroes
   */

  constructor() { }

  ngOnInit(): void {
  }

}
