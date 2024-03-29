import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { __param } from 'tslib';

@Component({
  selector: 'app-contact-reactive',
  templateUrl: './contact-reactive.component.html',
  styleUrls: ['./contact-reactive.component.scss']
})
export class ContactReactiveComponent implements OnInit {
  contactForm!: FormGroup;
  name!: string;
  departments:string[] = [];

  constructor(
    private readonly fb: FormBuilder, 
    private readonly route: ActivatedRoute){ }
  //myField = new FormControl();

  ngOnInit(): void{
    this.departments = this.route.snapshot.data['departments']

    this.route.queryParams.subscribe(
      (params: Params) => {
        this.name = params['name']
      });
    this.contactForm = this.initForm();
  }


  onSubmit(): void{
    console.log('Form ->', this.contactForm.value);
  }

  initForm(): FormGroup{
    return this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      gen: ['', [Validators.required]],
      age: ['', [Validators.required, Validators.maxLength(2)]],
      email: ['', [Validators.required]]
    })

  }
}
