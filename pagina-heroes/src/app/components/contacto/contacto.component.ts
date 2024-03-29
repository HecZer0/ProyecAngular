import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

interface ContactForm{
  name: string,
  checkAdult: boolean,
  department: string,
  comment: string;
}

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})

export class ContactComponent {

  id!:string;

  model = {
    name : '',
    checkAdult: false,
    department: 'Departamentos',
    comment:''
  }

  constructor(private readonly route: ActivatedRoute) { } 

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
    })
  }

  onSubmit(values:any): void{
  console.log('Form Values', values )
  }
}
