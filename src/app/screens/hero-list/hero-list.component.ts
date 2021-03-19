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
    let index = this.heroes.findIndex(el => el.id == this.formObject.id);
    debugger;
    if( index == -1){
      this.heroes.push({ ...this.formObject});
    }else{
      this.heroes[index] = { ...this.formObject};
    }
    
    this.resetForm();
  }

  updateHero(hero: Hero){
    this.formObject = { ...hero};
  }

  addSkill2FormObject(item: Skill, event){
    let index = this.formObject.skills.findIndex(el => el.id == item.id);

    if(event.target.checked == true){
      if(index == -1){
        this.formObject.skills.push(item);
      }
    }else{
      this.formObject.skills = [...this.formObject.skills].filter(el => el.id != item.id);
    }
  }

  setCheckedCheckbox(item: Skill){
    
    if(this.formObject.skills == undefined){
      this.formObject.skills = [];
    }
    
    let index = this.formObject.skills.findIndex(el => el.id == item.id );
    return index != -1;
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
