import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor() { }

  title: string = `My Form title`;
  text: string = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, esse.";
 
 
 
  ngOnInit(): void {
  }

}
