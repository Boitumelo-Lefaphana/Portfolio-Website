import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectsService } from '../_services/projects.service';
import { Project } from '../models/Projects';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  featuredProject = {} as Project;
  isBrowser: boolean;

  constructor(
    private titleService: Title,
    private projectService: ProjectsService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.titleService.setTitle('Boitumelo Lefaphana - Home');
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit(): void {
    this.featuredProject = this.projectService.GetProjectById(0);
  }
}
