import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
  experiences = [
    {
      title: 'Embedded Lead - McMaster Exoskeleton',
      summary:
        'Overseeing embedded system design and programming for exoskeleton, integrating IMU and motor APIs. Improved code efficiency and reliability for real-world testing and competition.',
      points: [
        'Lead embedded firmware, sensor and motor integration.',
        'Improved system reliability and code efficiency.',
      ],
      image: '../img/exoWiring.JPG',
      link: 'https://www.macexo.com/',
    },
    {
      title: 'Systems Engineer - Accipiter Radar',
      summary:
        'Developed internal web tools using Angular, Go/Python, and PostgreSQL for improving and automating processes. These projects were driven by applied research and design reviews with the software department. I also worked on redesigning an existing radar system being involved in the software, hardware, and mechanical improvement cycles ',
      points: [
        'Redesigned customer portal page in angular to match company branding.',
        'Created user management tool improving authentication processes by up to 75%.',
      ],
      image: '../img/accipiterCoops.jpg',
      link: 'https://www.accipiterradar.com/',
    },
    {
      title: 'Control Systems Lead - McMaster Exoskeleton',
      summary:
        'Led a team of engineers in designing and implementing a lower-limb exoskeleton ‘s controls integration and simulation. Managed project planning, task delegation, and hands-on mentorship for competition success.',
      points: [
        'Developed and deployed C++/Python controls on embedded hardware.',
        'Placed 5th overall at at ACE 2025.',
      ],
      image: '../img/exoSuits.jpg',
      link: 'https://www.macexo.com/',
    },
    {
      title: 'Quality Engineer - Accipiter Radar',
      summary:
        'Maintained QMS documentation and coordinated cross-functional teams to ensure compliance and process improvement. Delivered company-wide quality training and created corresponding records.',
      points: [
        'Used microsoft office tools to write and manage QMS documents and workflows.',
        'Led quality training and supported ISO 9001 audit success and certification.',
      ],
      image: '../img/accipiterGroup.jpg',
      link: 'https://www.accipiterradar.com/',
    },
    {
      title: 'Manufacturing Team Member - McMaster Rocketry',
      summary:
        'Contributed to composite layup process improvements and custom tooling design for a student rocketry team. Collaborated with avionics and propulsion teams to refine structural designs for manufacturability.',
      points: [
        'Improved strength-to-weight ratio and assembly consistency.',
        'Designed jigs and collaborated on structural refinement.',
      ],
      image: '../img/rocketry.jpg',
      link: 'https://www.macrocketry.ca/',
    },
  ];

  isEven(n: number) {
    return n % 2 === 0;
  }
}
