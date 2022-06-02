import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  isCollapsed:boolean = false;
  jiraCredentialModalVisible:boolean = false;
  connectionProgress:boolean = false;
  jiraCredentialsForm = new FormGroup({});
  projectRadioValue = 'HAC';
  isLoading:any;
  queryProjectKey:any;

  dashboardEpics:any;
  dashboardStories:any;
  dashboardSubtasks:any;
  dashboardBugs:any;

  currentChartData:any;
  tableDataset:any;

  constructor(
    private modalService: NzModalService,
    private formBuilder: FormBuilder,
    private route:ActivatedRoute,
    private navigator:Router,
    private dataService:DataService
  ) {}

  ngOnInit(): void {
    

    this.route.queryParamMap.subscribe((params:any) => this.dataService.getDashboardData(params.params.key).subscribe((res:any)=>{
      console.log('Dashboard Data looks like');
      console.log(res.epics);
      console.log(res.stories);
      console.log(res.subtasks);
      console.log(res.bugs);
      this.dashboardEpics = res.epics;
      this.dashboardStories = res.stories;
      this.dashboardSubtasks = res.subtasks;
      this.dashboardBugs = res.bugs;

      this.currentChartData = res.epics.epicsData;
      this.tableDataset = res.epics.epicsData;
    }));

    this.jiraCredentialsForm = this.formBuilder.group({
      jiraEmail: ['', Validators.required],
      jiraToken: ['', Validators.required],
    });
  }

  jiraModalOpen(){
    this.jiraCredentialModalVisible = true;
  }

  onCredentialsSubmit(){
    console.log(this.jiraCredentialsForm.value);
  }

  jiraModalCancel(){
    this.jiraCredentialModalVisible = false;
    this.jiraCredentialsForm.reset();
  }

  navigateToLaunchpad(){
    this.navigator.navigate(['/project-launchpad']);
  }

  cardClick(dataType:any){
    console.log(dataType);
    if(dataType == 'Epic'){
      this.currentChartData = this.dashboardEpics.epicsData;
      this.tableDataset = this.dashboardEpics.epicsData;
      console.log('Table data');
      console.log(this.tableDataset);
    }else if(dataType == 'Userstory'){
      this.currentChartData = this.dashboardStories.storyData;
      this.tableDataset = this.dashboardStories.storyData;
      console.log(this.currentChartData);
    }else if(dataType == 'Subtask'){
      this.currentChartData = this.dashboardSubtasks.subtaskData;
      this.tableDataset = this.dashboardSubtasks.subtaskData;
    }else if(dataType == 'Bug'){
      this.currentChartData = this.dashboardBugs.bugsData;
      this.tableDataset = this.dashboardBugs.bugsData;
    }
  }
}
