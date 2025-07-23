import { Component, inject } from '@angular/core';

// tsparticles
import {
  MoveDirection,
  OutMode,
  Container
} from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
import { NgParticlesService, NgxParticlesModule } from "@tsparticles/angular";
import { ThemeService } from '../../services/theme.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-particles',
  imports: [NgxParticlesModule, CommonModule],
  templateUrl: './particles.component.html',
  styleUrl: './particles.component.scss'
})
export class ParticlesComponent {
  themeService: ThemeService = inject(ThemeService);

  id = "tsparticles";

  particlesOptionsDark = {

    // Allows particles background to extend pass window height to the entire page
    fullScreen: {
      enable: true
    },

    background: {
      color: {
        value: "#111111",
      },
    },

    fpsLimit: 180,

    interactivity: {

      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
        onHover: {
          enable: true,
          mode: "repulse",
        },
        resize: {
          enable: true,
        },
      },

      modes: {
        push: {
          quantity: 10,
        },
        repulse: {
          distance: 120,
          duration: 1.2,
          speed: 0.3,
          easing: "ease-out-quad"
        },
      },
    },

    particles: {
      color: {
        value: "#829b5aff",
      },
      links: {
        color: "#37422634",
        distance: 110,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      emitters: {
        direction: "top", // particles rise
        position: {
          x: 50, // center horizontally
          y: 100 // near bottom (y = 100%)
        },
        rate: {
          quantity: 5,   // how many particles per emission
          delay: 0.3     // delay between emissions
        },
        size: {
          width: 100,    // emission width
          height: 0      // flat line
        }
      },
      move: {
        direction: MoveDirection.top,
        enable: true,
        outModes: {
          default: OutMode.out,
        },
        random: true,
        speed: {min: 0.2, max: 0.6},
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 250,
      },
      opacity: {
        value: {min: 0.3, max: 0.4},
        random: {
          enable: true
        }
      },
      shape: {
        type: "circle",
      },
      size: {
        value: {min: 1, max: 1},
        random: {enable: true},
        animation: {enable: false}
      },
    },
    detectRetina: true,
  };

  particlesOptionsLight = {

    // Allows particles background to extend pass window height to the entire page
    fullScreen: {
      enable: true
    },

    background: {
      color: {
        value: "#ffffff",
      },
    },

    fpsLimit: 180,

    interactivity: {

      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
        onHover: {
          enable: true,
          mode: "repulse",
        },
        resize: {
          enable: true,
        },
      },

      modes: {
        push: {
          quantity: 10,
        },
        repulse: {
          distance: 120,
          duration: 1.2,
          speed: 0.3,
          easing: "ease-out-quad"
        },
      },
    },

    particles: {
      color: {
        value: "#5e723dff",
      },
      links: {
        color: "#a5bb81ff",
        distance: 110,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      emitters: {
        direction: "top", // particles rise
        position: {
          x: 50, // center horizontally
          y: 100 // near bottom (y = 100%)
        },
        rate: {
          quantity: 5,   // how many particles per emission
          delay: 0.3     // delay between emissions
        },
        size: {
          width: 100,    // emission width
          height: 0      // flat line
        }
      },
      move: {
        direction: MoveDirection.top,
        enable: true,
        outModes: {
          default: OutMode.out,
        },
        random: true,
        speed: {min: 0.2, max: 0.6},
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 450,
      },
      opacity: {
        value: {min: 0.3, max: 0.3},
        random: {
          enable: true
        }
      },
      shape: {
        type: "circle",
      },
      size: {
        value: {min: 1, max: 1},
        random: {enable: true},
        animation: {enable: false}
      },
    },
    detectRetina: true,
  };

  constructor(private readonly ngParticlesService: NgParticlesService) {}

  ngOnInit(): void {
    this.ngParticlesService.init(async (engine) => {
      console.log(engine);

      await loadSlim(engine);
    });
  }

  particlesLoaded(container: Container): void {
    console.log(container);
  }
}
