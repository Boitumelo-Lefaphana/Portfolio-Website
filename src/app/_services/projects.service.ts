import { Injectable } from '@angular/core';
import { Project } from '../models/Projects';
import { Tag } from '../models/tag';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  projects: Project[] = [
    {
      id: 0,
      name: 'Snake Game',
      pictures: [
        '../../assets/snake1.jpg',
        '../../assets/snake2.png',
        '../../assets/snake3.gif',
      ],
      projectLink: 'https://github.com/Boitumelo-Lefaphana/Snake-Game',
      summary: 'Java project that stimulates classical snake game.',
      description:
        'Java Snake: A thrilling game of navigation and growth. Steer your snake, consume food to score and expand. Beware, hitting the boundary or your own tail spells game over. Showcasing Java strength in recreating this classic. Experience the nostalgia, challenge your agility.',
      tags: [Tag.JAVA],
    },
    {
      id: 1,
      name: 'Angular Portfolio Website',
      pictures: [
        '../../assets/folio1.png',
        '../../assets/folio2.png',
        '../../assets/folio3.png',
      ],
      projectLink: 'https://github.com/Boitumelo-Lefaphana/Portolio-Website',
      summary: 'FrondEnd portfolio using Angular and TypeScript',
      description:
        'Angular Portfolio: A showcase of dynamic web projects, built with the powerful Angular framework. Experience interactive designs, seamless user interfaces, and robust functionality. A testament to proficiency in Angular development.',
      tags: [Tag.ANGULAR, Tag.TYPESCRIPT],
    },
    {
      id: 2,
      name: 'Drug Inventory System',
      pictures: [
        '../../assets/drug1.png',
        '../../assets/drug2.png',
        '../../assets/drug3.png',
      ],
      projectLink: 'https://github.com/Boitumelo-Lefaphana',
      summary: 'Fullstack web app developed using React and NodeJS',
      description:
        'Drug Inventory System: A comprehensive solution for managing patient databases across hospitals and clinics. Facilitates real-time tracking of drug inventory, ensuring efficient healthcare delivery. Built with a focus on patient safety and seamless healthcare experience.',
      tags: [Tag.REACT, Tag.JAVASCRIPT, Tag.NODEJS],
    },
    {
      id: 3,
      name: 'Cost Effective Campus Instant Messenger',
      pictures: [
        '../../assets/chat1.png',
        '../../assets/chat2.png',
        '../../assets/chat3.png',
      ],
      projectLink:
        'https://github.com/Boitumelo-Lefaphana/Campus-Effective-Instant-Campus-Messenger',
      summary: 'Messenger that allows students to communicate with each other.',
      description:
        'The Cost-Effective Campus Instant Messenger is a software application available at no or minimal cost. It facilitates real-time text conversations, ensuring that messages are instantly received by the intended recipient upon sending.',
      tags: [Tag.JAVA],
    },
    {
      id: 4,
      name: 'Distributed Unix-based Kernel',
      pictures: [
        '../../assets/kernel1.png',
        '../../assets/kernel2.png',
        '../../assets/kernel3.png',
      ],
      projectLink: 'https://github.com/Boitumelo-Lefaphana',
      summary: 'Developed a kernel module for HPC systems',
      description:
        'High Performance Computing (HPC) systems consist of multiple compute nodes connected by a high-speed network to solve complex computing problems in parallel. To facilitate communication between nodes, a software layer is often used. In most HPC systems, each compute node has its own operating system, and workload managers such as Simple Linux Utility for Resource Management (SLURM) are used to optimise resource utilisation (coordinate tasks)',
      tags: [Tag.CSHARP],
    },
  ];

  constructor() {}

  GetProjects() {
    return this.projects;
  }

  GetProjectById(id: number): Project {
    let project = this.projects.find((project) => project.id === id);

    if (project === undefined) {
      throw new TypeError('There is no project that matches the id:' + id);
    }
    return project;
  }
}
