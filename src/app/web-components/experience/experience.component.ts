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
      title: 'Systems Engineer - Accipiter Radar',
      summary:
        'Developed internal web tools and customer-facing portals using Angular, Go/Python, and PostgreSQL for next-gen radar and deterrent systems. Led hardware validation and field testing, and improved customer data management efficiency by 30%.',
      points: [
        'Redesigned customer portal and integrated new sensor modules.',
        'Enhanced real-time data throughput and system efficiency.',
      ],
      image: '../img/accipiterCoops.jpg',
      link: '',
    },
    {
      title: 'Quality Engineer - Accipiter Radar',
      summary:
        'Maintained ISO 9001 QMS documentation and coordinated cross-functional teams to ensure compliance and process improvement. Delivered company-wide quality training and contributed to successful certification audits.',
      points: [
        'Wrote and managed QMS documents and workflows.',
        'Led quality training and supported ISO 9001 audit success.',
      ],
      image: '../img/accipiterGroup.jpg',
      link: '',
    },
    {
      title: 'Control Systems Lead - McMaster Exoskeleton',
      summary:
        'Led a team of engineers in designing and implementing a lower-limb exoskeleton, focusing on controls integration and simulation. Managed project planning, task delegation, and hands-on mentorship for competition success.',
      points: [
        'Developed and deployed C++/Python controls on embedded hardware.',
        'Led team to 1st place at ACE competition.',
      ],
      image: '../img/exoSuits.jpg',
      link: '',
    },
    {
      title: 'Embedded Lead - McMaster Exoskeleton',
      summary:
        'Oversaw embedded system design and programming for a student-built exoskeleton, integrating IMU and motor APIs. Improved code efficiency and reliability for real-world testing and competition.',
      points: [
        'Designed embedded firmware and sensor integration.',
        'Improved system reliability and code efficiency.',
      ],
      image: '../img/exoWiring.JPG',
      link: '',
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
      link: '',
    },
  ];

  isEven(n: number) {
    return n % 2 === 0;
  }
}
