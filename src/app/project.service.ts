import { Injectable } from '@angular/core';
import { Project } from './project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private projects: Project[] = [
    {
      name: 'Project 1',
      description: 'This is the first project.',
      url: 'https://example.com/project1'
    },
    {
      name: 'Project 2',
      description: 'This is the second project.',
      url: 'https://example.com/project2'
    }
  ];

  constructor() { }

  getProjects(): Project[] {
    return this.projects;
  }
}
