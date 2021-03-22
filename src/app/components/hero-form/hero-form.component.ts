import { Component, OnInit, Input } from '@angular/core';
import { Hero } from 'src/app/models/hero';
import { Skill } from 'src/app/models/skill';

@Component({
  selector: 'hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent implements OnInit {
  @Input() 
  get formObject(): Hero { return this._formObject; }
  set formObject(formObject: Hero) {
    this._formObject = formObject != undefined ? formObject : this.resetForm();
  }
  private _formObject: Hero = {
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
    console.log(this.formObject);
  }

  addSkill2FormObject(item: Skill, event){
    
  }

  setCheckedCheckbox(item: Skill){
    if(this._formObject.skills == undefined){
      this._formObject.skills = [];
    }
    
    let index = this._formObject.skills.findIndex(el => el.id == item.id );
    return index != -1;
  }

  resetForm(): Hero{
    return {
      id: 0,
      name: "",
      image: "",
      skills: []
    };
  }
}
