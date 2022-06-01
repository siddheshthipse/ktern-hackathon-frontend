import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzModalService } from 'ng-zorro-antd/modal';

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

  constructor(
    private modalService: NzModalService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
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
}
