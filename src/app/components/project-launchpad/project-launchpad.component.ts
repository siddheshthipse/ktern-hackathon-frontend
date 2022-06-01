import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-launchpad',
  templateUrl: './project-launchpad.component.html',
  styleUrls: ['./project-launchpad.component.css']
})
export class ProjectLaunchpadComponent implements OnInit {

  sampleString:string = '5 Bugs'
  constructor() { }

  ngOnInit(): void {
  }

}
