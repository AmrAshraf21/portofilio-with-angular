import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './about.component.html', // Path file html
  styleUrl: './about.component.scss' // path of styling 
})
export class AboutComponent {
  color = "Red";
  isDisabled:boolean = false
  imgSrc:string = "../../favicosn.ico";
  val:string = "test";
  altText = "ASfassafas";

print(){
  console.log("Print");
  
}



updateColor(){
  
  if(this.color ==="Blue") this.color = "Navy";
  else this.color = "Blue";
}




}
