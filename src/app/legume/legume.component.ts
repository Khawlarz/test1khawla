import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-legume',
  templateUrl: './legume.component.html',
  styleUrls: ['./legume.component.css']
})
export class LegumeComponent implements OnInit {

  constructor() { }
  qte:number;
onCalcule()
{ "tabLegumes.prix *qte"}
  ngOnInit() {
  }

}
