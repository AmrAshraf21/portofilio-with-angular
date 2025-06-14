import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
arrOfCards:Card[]=[
{width:"96",height:"96",src:"https://img.icons8.com/external-goofy-color-kerismaker/96/external-Web-Developer-web-development-goofy-color-kerismaker.png",alt:"external-Web-Developer-web-development-goofy-color-kerismaker",title:"Web Design"},
{width:"50",height:"50",src:"https://img.icons8.com/ios/50/developer--v1.png",alt:"developer",title:"Mobile Design"},
{width:"64",height:"64",src:"https://img.icons8.com/external-filled-outline-design-circle/64/external-Web-developer-development-filled-outline-design-circle.png",alt:"external-Web-Developer-web-development-goofy-color-kerismaker",title:"Logo Design"},
{width:"48",height:"48",src:"https://img.icons8.com/color/48/web-scraper.png",alt:"external-Web-Developer-web-development-goofy-color-kerismaker",title:"Web Application Development"},
{width:"64",height:"64",src:"https://img.icons8.com/nolan/64/developer.png",alt:"as",title:"PWA Development"},
{width:"80",height:"80",src:"https://img.icons8.com/dotty/80/developer-mode.png",alt:"external-Web-Developer-web-development-goofy-color-kerismaker",title:"Mobile Application Development"},


]

}
interface Card{
  width:string,
  height:string
  src : string,
  alt:string,
  title:string
}
