import { Component, OnInit } from '@angular/core';
import {Hero} from '../../models/hero';
import {HEROES} from '../../mock-data/HEROES';
import { Skill } from 'src/app/models/skill';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {

  heroes: Array<Hero> = HEROES;
  formObject: Hero = {
    id: 0,
    name: "",
    image: "",
    skills: []
  };

  lstSkills: Array<Skill> = [
    {
      id: 1,
      name: "PHP"
    },
    {
      id: 2,
      name: "javascript"
    },
    {
      id: 3,
      name: "HTML"
    },
    {
      id: 4,
      name: "CSS"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  submitHeroForm(event){
    event.preventDefault();
    this.formObject.id = Number(this.formObject.id);
    this.heroes.push(this.formObject);
    this.resetForm();
  }

  addSkill2FormObject(item: Skill){
    let index = this.formObject.skills.indexOf(item);
    if(index == -1){
      this.formObject.skills.push(item);
    }else{
      this.formObject.skills = this.formObject.skills.filter(el => el != item);
    }
  }
  resetForm(){
    this.formObject = {
      id: 0,
      name: "",
      image: "",
      skills: []
    };
  }
}
