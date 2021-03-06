import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
  private todo: FormGroup;

  constructor(public formBuilder: FormBuilder) {
    this.todo = this.createMyForm();
  }

  ngOnInit() {}

  saveData() {
    console.log(this.todo.value);
  }

  private createMyForm() {
    return this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required]
    });
  }
}
