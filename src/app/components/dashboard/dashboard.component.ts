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

  constructor(
    private modalService: NzModalService,
    private formBuilder: FormBuilder,
    private route:ActivatedRoute,
    private navigator:Router,
    private dataService:DataService
  ) {}

  ngOnInit(): void {
    
  }
}
