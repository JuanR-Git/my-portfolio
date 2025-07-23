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
        'A personal web portfolio built with Angular 20 and Bootstrap, designed to showcase engineering skills and professional achievements. Deployed using Vercel and integrated with GitHub for continuous delivery.',
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
        'Collaborated with a team of six engineers to develop an advanced heart monitoring and pacing system for cardiac patients. Designed embedded logic in Simulink and implemented a Python application for real-time device control and configuration.',
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
      description: 'Wary is a web application enabling anonymous reporting of community concerns, built for toHacks 2022. Developed a responsive frontend using React, focusing on user privacy and intuitive design.',
      tags: [
        { name: 'React', color: '#709253ff', textColor: '#fff' }, // Green 5
        { name: 'Frontend', color: '#8BC34A', textColor: '#fff' }, // Green 3 (same as above)
        { name: 'Software', color: '#4CAF50', textColor: '#fff' }, // Green 3 (same as above)
      ],
      github: 'https://github.com/JuanR-Git/Wary',
      docs: ''
    },
    {
      title: 'Recycle Bot',
      image: '../img/recycleBot.png',
      description:
        'Recycle Bot is a Python-based automation system integrating a Roomba and robotic arm to detect, classify, and sort recyclable materials.',
      tags: [
        { name: 'Python', color: '#689F38', textColor: '#fff' }, // Green 5
        { name: 'Software', color: '#4CAF50', textColor: '#fff' }, // Green 3 (same as above)
      ],
      github: 'https://github.com/JuanR-Git/Recycle-Bot',
      docs: ''
    },
  ];
}
