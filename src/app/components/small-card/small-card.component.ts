import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {

  @Input()
  photoCover:string = "https://miro.medium.com/v2/resize:fit:1358/1*moJeTvW97yShLB7URRj5Kg.png"
  @Input()
  cardTitle:string = "Typescript gonna dies!?"
  @Input()
  Id:string ="0"

  constructor() { }

  ngOnInit(): void {
  }

}
