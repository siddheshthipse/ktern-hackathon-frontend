import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-project-launchpad',
  templateUrl: './project-launchpad.component.html',
  styleUrls: ['./project-launchpad.component.css']
})
export class ProjectLaunchpadComponent implements OnInit {

  projectDetails:any;
  constructor(private dataService:DataService, private router:Router) { }

  ngOnInit(): void {
    this.dataService.getProjects().subscribe((res)=>{
      console.log(res);
      this.projectDetails = res;
    })
  }

  navigateToDashboard(projectKey:string){
    this.router.navigate(['/dashboard'], { queryParams: { key: projectKey } });
  }

  navigateToLogin(){
    this.router.navigate(['get-started']);
  }
}
