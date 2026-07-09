import { Link } from "lucide-astro";
import barberapi from "../assets/projects/barberapi.webp";
import biblioteca from "../assets/projects/biblioteca.webp";
import portfolio from "../assets/projects/portfolio.webp";
import apiconsumer from "../assets/projects/getpostman.webp";

export const projects = [
  {
    title: "Biblioteca API",
    description:
      "API de biblioteca desarrolada en java que permite consultar, gestionar y visualizar informacion de libros, trabajando la persistencia de datos.",
    tags: ["Java", "JAVA FX"],
    image: biblioteca,
    github: "https://github.com/juancamilo99-prog/BibliotecaAPI",
    demo: "#",
  },
  {
    title: "Portfolio Web",
    description:
      "Más que un portfolio, este proyecto representa mi evolución como desarrollador. Un espacio donde comparto los proyectos, tecnologías y aprendizajes que forman parte de mi camino hacia el desarrollo de software.",
    tags: ["JavaScript", "Astro", "GSAP", "Tailwind"],
    image: portfolio,
    github: "https://github.com/juancamilo99-prog/portfolio-astro-tailwind",
    demo: "https://portfolio-astro-tailwind.vercel.app/",
  },
  {
    title: "Barber API",
    description:
      "Sistema de reservas para barberia.",
    tags: ["HTML", "JavaScript", "CSS", "Java", "Spring Boot"],
    image: barberapi,
    github: "https://github.com/juancamilo99-prog/BarberAPI-Intermodular",
    demo: "#",
  },
  {
    title: 'Practica Backend API',
      description:
        'Creando una api y practicando CRUD con bases de datos no relacional.',
      tags: ['Express', 'MongoDB', 'Postman'],
      image: apiconsumer,
      github: 'https://github.com/juancamilo99-prog/Proyecto-5-NoSQL---Juan-Camilo-Montero',
      demo: '#',
  }
];
