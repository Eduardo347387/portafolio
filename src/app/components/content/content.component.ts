import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { project, skills } from 'src/app/interfaces/data';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: []
})
export class ContentComponent {
  private router = inject(Router)

  listSkills: skills[] = [
    {
      name: 'HTML5',
      path: 'M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z',
      color:'#f23434'
    },
    {
      name: 'CSS3',
      path: 'M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z',
      color:'#1d5bf8'
    },
    {
      name: 'Sass',
      path: 'M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0zM9.615 15.998c.175.645.156 1.248-.024 1.792l-.065.18c-.024.061-.052.12-.078.176-.14.29-.326.56-.555.81-.698.759-1.672 1.047-2.09.805-.45-.262-.226-1.335.584-2.19.871-.918 2.12-1.509 2.12-1.509v-.003l.108-.061zm9.911-10.861c-.542-2.133-4.077-2.834-7.422-1.645-1.989.707-4.144 1.818-5.693 3.267C4.568 8.48 4.275 9.98 4.396 10.607c.427 2.211 3.457 3.657 4.703 4.73v.006c-.367.18-3.056 1.529-3.686 2.925-.675 1.47.105 2.521.615 2.655 1.575.436 3.195-.36 4.065-1.649.84-1.261.766-2.881.404-3.676.496-.135 1.08-.195 1.83-.104 2.101.24 2.521 1.56 2.43 2.1-.09.539-.523.854-.674.944-.15.091-.195.12-.181.181.015.09.091.09.21.075.165-.03 1.096-.45 1.141-1.471.045-1.29-1.186-2.729-3.375-2.7-.9.016-1.471.091-1.875.256-.03-.045-.061-.075-.105-.105-1.35-1.455-3.855-2.475-3.75-4.41.03-.705.285-2.564 4.8-4.814 3.705-1.846 6.661-1.335 7.171-.21.733 1.604-1.576 4.59-5.431 5.024-1.47.165-2.235-.404-2.431-.615-.209-.225-.239-.24-.314-.194-.12.06-.045.255 0 .375.12.3.585.825 1.396 1.095.704.225 2.43.359 4.5-.45 2.324-.899 4.139-3.405 3.614-5.505l.073.067z',
      color:'#CC6699'
    },
    {
      name: 'Tailwind CSS',
      path: 'M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z',
      color:'#06B6D4'
    },
    {
      name: 'Bootstrap',
      path: 'M11.77 11.24H9.956V8.202h2.152c1.17 0 1.834.522 1.834 1.466 0 1.008-.773 1.572-2.174 1.572zm.324 1.206H9.957v3.348h2.231c1.459 0 2.232-.585 2.232-1.685s-.795-1.663-2.326-1.663zM24 11.39v1.218c-1.128.108-1.817.944-2.226 2.268-.407 1.319-.463 2.937-.42 4.186.045 1.3-.968 2.5-2.337 2.5H4.985c-1.37 0-2.383-1.2-2.337-2.5.043-1.249-.013-2.867-.42-4.186-.41-1.324-1.1-2.16-2.228-2.268V11.39c1.128-.108 1.819-.944 2.227-2.268.408-1.319.464-2.937.42-4.186-.045-1.3.968-2.5 2.338-2.5h14.032c1.37 0 2.382 1.2 2.337 2.5-.043 1.249.013 2.867.42 4.186.409 1.324 1.098 2.16 2.226 2.268zm-7.927 2.817c0-1.354-.953-2.333-2.368-2.488v-.057c1.04-.169 1.856-1.135 1.856-2.213 0-1.537-1.213-2.538-3.062-2.538h-4.16v10.172h4.181c2.218 0 3.553-1.086 3.553-2.876z',
      color:'#985ef0'
    },
    {
      name: 'JavaScript',
      path: 'M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z',
      color:'#F7DF1E'
    },
    {
      name: 'Angular',
      path: 'M16.712 17.711H7.288l-1.204 2.916L12 24l5.916-3.373-1.204-2.916ZM14.692 0l7.832 16.855.814-12.856L14.692 0ZM9.308 0 .662 3.999l.814 12.856L9.308 0Zm-.405 13.93h6.198L12 6.396 8.903 13.93Z',
      color: '#e8153f'
    },
    {
      name: 'TypeScript',
      path: 'M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z',
      color:'#007bff'
    },
   
    

  ]

  listProjects: project[] = [
    {
      img: '../../../assets/img/project.png',
      name: 'Page Countrys API',
      description: `Listado de paises utilizando una API Implementando
      funcionalidades como buscador, clasificador, filtro y paginador.`,
      skills: [this.listSkills[6], this.listSkills[7], this.listSkills[2]],
      gitHub: 'https://github.com/Eduardo347387/pageCountries',
      liveSite: 'https://page-countries.netlify.app/'
    },
    {
      img: '../../../assets/img/project1.png',
      name: 'Multi-step form',
      description: 'Formulario que se divide en multiples pasos.',
      skills: [this.listSkills[6], this.listSkills[7], this.listSkills[2]],
      gitHub: 'https://github.com/Eduardo347387/multi-form',
      liveSite: 'https://multiform49201212.netlify.app/'
    },
     {
      img: '../../../assets/img/project8.png',
      name: 'Tip calculator app',
      description: 'Calculadora que indica cuanto debe pagar cada persona incluyecto propina.',
      skills: [this.listSkills[0], this.listSkills[2], this.listSkills[5]],
      gitHub: 'https://github.com/Eduardo347387/Tip-calculator-app',
      liveSite: 'https://golden-mochi-8f4c71.netlify.app/'
    },
    {
      img: '../../../assets/img/project7.png',
      name: 'Interactive pricing component',
      description: 'Componente interactivo que indica precios basandose en el trafico',
      skills: [this.listSkills[0], this.listSkills[2], this.listSkills[5]],
      gitHub: 'https://github.com/Eduardo347387/Interactive-pricing-component',
      liveSite: 'https://ubiquitous-dieffenbachia-1bc068.netlify.app/'
    },
    {
      img: '../../../assets/img/project2.png',
      name: 'Fylo dark theme landing page',
      description: 'Landing page modo oscuro',
      skills: [this.listSkills[0], this.listSkills[2]],
      gitHub: 'https://github.com/Eduardo347387/Fylo-dark-theme-landing-page',
      liveSite: 'https://capable-heliotrope-a8852e.netlify.app/'
    },
    {
      img: '../../../assets/img/project3.png',
      name: 'Adminitrador de citas',
      description: 'Administrador de citas de una veterinaria.',
      skills: [this.listSkills[0], this.listSkills[1], this.listSkills[5], this.listSkills[4]],
      gitHub: 'https://github.com/Eduardo347387/administrador-citas',
      liveSite: 'https://tranquil-sprinkles-704001.netlify.app/'
    },
    {
      img: '../../../assets/img/project5.png',
      name: 'Chat app CSS illustration',
      description: 'Ilustracion de una aplicacion de chat creado con CSS3.',
      skills: [this.listSkills[0], this.listSkills[1]],
      gitHub: 'https://github.com/Eduardo347387/Chat-app-CSS-illustration',
      liveSite: 'https://harmonious-faloodeh-7252d1.netlify.app/'
    },
    {
      img: '../../../assets/img/project6.png',
      name: 'Insure landing page',
      description: 'Pagina que ofrece servicios de seguro de vida.',
      skills: [this.listSkills[0], this.listSkills[2], this.listSkills[5]],
      gitHub: 'https://github.com/Eduardo347387/Insure-landing-page',
      liveSite: 'https://jolly-nougat-a84c17.netlify.app/'
    },
    {
      img: '../../../assets/img/project4.png',
      name: 'Adminitrador de gastos',
      description: 'Adminitrador de gastos semanales',
      skills: [this.listSkills[0], this.listSkills[1], this.listSkills[5], this.listSkills[4]],
      gitHub: 'https://github.com/Eduardo347387/administrador-gasto',
      liveSite: 'https://admin-gasto.netlify.app/'
    } 
  ]

  reloadPage(url: string) {
    window.location.reload();
    window.location.href = url // true para forzar la recarga desde el servidor
  }
}
