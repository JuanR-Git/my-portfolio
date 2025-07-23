import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Portfolio',
      image: '../img/myWebsite.png',
      description:
        'I created a personal web portfolio for displaying my engineering skills. I created this using Angular 20, Bootrap for styling and hosted it with vercel/github',
      tags: [
        { name: 'Angular', color: '#6DBE45', textColor: '#fff' }, // Green 1
        { name: 'Frontend', color: '#8BC34A', textColor: '#fff' }, // Green 2
        { name: 'Software', color: '#4CAF50', textColor: '#fff' }, // Green 3
      ],
      github: 'https://github.com/JuanR-Git/my-portfolio',
      docs: ''
    },
    {
      title: 'Paced',
      image: '../img/paced.png',
      description:
        'I worked within a team of 6 engineers to create a heart monitoring system that would help pace the heart for people with heart disease.',
      tags: [
        { name: 'Simulink', color: '#388E3C', textColor: '#fff' }, // Green 4
        { name: 'Embedded', color: '#4CAF50', textColor: '#fff' }, // Green 3 (same as Software)
      ],
      github: '',
      docs: 'https://drive.google.com/file/d/1ZIhKlqEDUXXbrAUTR-R1dYmR0VYDw45Z/view?usp=sharing'
    },
    {
      title: 'Wary',
      image: '../img/wary.png',
      description: 'Wary is a web application for anonymously reporting any suspicions within a community or area. I created this in toHacks 2022 learning how to use React to create responsive frontends.',
      tags: [
        { name: 'React', color: '#709253ff', textColor: '#fff' }, // Green 5
        { name: 'Frontend', color: '#8BC34A', textColor: '#fff' }, // Green 3 (same as above)
        { name: 'Software', color: '#4CAF50', textColor: '#fff' }, // Green 3 (same as above)
      ],
      github: 'https://github.com/JuanR-Git/Wary',
      docs: ''
    },
    {
      title: 'Recylce Bot',
      image: '../img/recycleBot.png',
      description:
        'Recycle bot is a python program that enables a rumba with a trough attachment to work with a mechanical arm to detect and sort different material containers into specific bins.',
      tags: [
        { name: 'Python', color: '#689F38', textColor: '#fff' }, // Green 5
        { name: 'Software', color: '#4CAF50', textColor: '#fff' }, // Green 3 (same as above)
      ],
      github: 'https://github.com/JuanR-Git/Recycle-Bot',
      docs: ''
    },
  ];
}
