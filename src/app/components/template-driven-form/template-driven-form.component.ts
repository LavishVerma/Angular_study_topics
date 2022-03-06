import { Component, OnInit, ViewChild } from '@angular/core';
import { Signup } from '../../model/SignUp.model';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {
  model:any = {}
  constructor() { }

  ngOnInit() {

  }

  onSubmit() {
    alert(JSON.stringify(this.model))
  }
}
