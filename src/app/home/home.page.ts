import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  form: FormGroup;

  constructor( private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.buildForm();
  }

  private buildForm() {

    this.form = this.formBuilder.group({
      'inputText': [null, [Validators.required]],
      'checkBox':[null, [Validators.required]],
      'radioButtonGroup':[null, [Validators.required]],
    });
  }


}
