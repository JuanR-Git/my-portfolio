import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  imports: [CommonModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss',
})
export class AboutMeComponent {
  skillsPath = [
    { name: 'Angular', img: '../img/angular.gif' },
    { name: 'C++', img: '../img/cPlusPlus.png' },
    { name: 'Google GO', img: '../img/googleGo.png' },
    { name: 'Linux', img: '../img/linux.png' },
    { name: 'Matlab', img: '../img/matLab.png' },
    { name: 'PostgreSQL', img: '../img/postgreSQL.png' },
    { name: 'Python', img: '../img/python.png' },
    { name: 'RaspberryPi', img: '../img/raspberryPi.png' },
    { name: 'Simulink', img: '../img/simulink.png' },
    { name: 'SOLIDWORKS', img: '../img/solidWorks.png' },
    { name: 'JavaScript', img: '../img/javaScript.png' },
    // Add more skills as needed
  ];
}
