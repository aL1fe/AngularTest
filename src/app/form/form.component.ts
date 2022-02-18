import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit
{

  constructor() { }

  title: string = `My Form title`;
  text: string = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, esse.";
  enableDisable: boolean = false;
  buttonText: string = "Enable";

  /* obj = {
          name: `Bobby`, 
          obj2: 
          {
            age: 25, 
            job: `Welder` 
          }
        }  */

  //imgUrl: string = `https://img.icons8.com/stickers/100/000000/spa-flower.png`;
  imgUrl: string = `/assets/images/icons-spa-100.png`;

  ngOnInit(): void 
  {
    setTimeout(()=>
    {
      this.imgUrl = `https://img.icons8.com/stickers/100/000000/spa-flower.png`;
      this.enableDisable = true;
      this.buttonText = "Disable";
    }, 
    3000)
  }

  getInfo(): string
  {
    return `My info`
  }

  changeTitle(): string
  {
    this.title = "Hello!!!";
    return this.title;
  }

  inputHandler(event: any)
  {
    const val = event.target.value;
    this.title = val;
  }

  changeHandler()
  {
    console.log(this.title);
  }
}
