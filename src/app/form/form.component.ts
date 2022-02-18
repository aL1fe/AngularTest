import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  constructor() { }

  title: string = `My Form title`;
  text: string = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, esse.";
  obj = {
          name: `Bobby`, 
          obj2: 
          {
            age: 25, 
            job: `Welder` 
          }
        } 

  //imgUrl: string = `https://img.icons8.com/stickers/100/000000/spa-flower.png`;
  imgUrl: string = `/assets/images/icons-spa-100.png`;
  
  getInfo(): string
  {
    return `My info`
  }
}
