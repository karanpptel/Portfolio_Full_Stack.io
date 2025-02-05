import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "Food Order WebApp",
    description: "I built a dynamic and user-friendly food ordering platform using React.js, MongoDB, Express, and Node.js, designed to deliver a seamless online ordering experience. The app features a secure authentication system, allowing users to register and log in effortlessly. With an intuitive shopping cart, users can add their favorite dishes and place orders with ease. Integrated with Stripe payment gateway, the platform ensures fast and secure transactions. Additionally, a real-time order status tracking system keeps users informed at every step, enhancing engagement and satisfaction.",
    image: "https://images.pexels.com/photos/6613047/pexels-photo-6613047.jpeg?auto=compress&cs=tinysrgb&w=600",
    tags: ["React", "Node.js", "MongoDB", "Express.js", "Stripe"],
    github: "https://github.com/karanpptel/food-dell",
    live: "https://example.com"
  },
  {
    title: "Real-Time Chat Based App",
    description: "Developed a real-time chat web application using the MERN stack, featuring instant messaging with WebSocket and Socket.IO for seamless communication. Integrated JWT-based authentication for secure access and implemented multiple chat rooms for group interactions. The app is fully responsive across devices and scalable to support multiple concurrent users efficiently.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
    tags: ["React", "Node.js", "MongoDB", "Express.js", "WebSocket", "Socket.IO"],
    github: "https://github.com/karanpptel/real-time-chat-app.github.io",
    live: "https://github.com/karanpptel/real-time-chat-app.github.io"
  },
  {
    title: "Notes App",
    description: "The Notes App is a full-stack application built using the MERN stack. It provides users with a seamless platform to create, manage, and organize their notes effectively.",
    image: "https://images.pexels.com/photos/6894103/pexels-photo-6894103.jpeg?auto=compress&cs=tinysrgb&w=600",
    tags: ["React", "Node.js", "MongoDB", "Express.js"],
    github: "https://github.com/karanpptel/note-App",
    live: "https://note-app-sn2b.vercel.app/"
  },
  {
    title: "Weather App",
    description: "A weather web application created using HTML, CSS, JAVASCRIPT, integrating OpenWeatherMap API to fetch real time weather data.",
    image: "https://images.pexels.com/photos/6473738/pexels-photo-6473738.jpeg?auto=compress&cs=tinysrgb&w=600",
    tags: ["React", "Node.js", "MongoDB", "Express.js"],
    github: "https://github.com/karanpptel/weather.github.io",
    live: "https://karanpptel.github.io/weather.github.io/"
  },
  {
    title: "Anonymous Feedback Generator WebApp",
    description: "Created a Next.js-based app for sending and receiving anonymous messages, featuring AI-powered enhancements like message suggestions. The project includes a secure authentication system with OTP verification, a Resend email setup, and a user-friendly dashboard. Built with modern tools like shadcn, React Hook Form, and MongoDB, the app is designed for scalability and performance.[Coming soon...]",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600",
    tags: ["React", "Next.js", "MongoDB", "Express.js", "Typescript", "AI", "OpenAi"],
    github: "/",
    live: "https://example.com"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 sm:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-12 sm:mb-16">Featured Projects</h2>
        <div className="space-y-24">
          {projects.map((project, index) => (
            <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}>
              {/* Laptop Mockup */}
              <div className="w-full lg:w-1/2">
                <div className="relative max-w-2xl mx-auto">
                  <div className="relative w-full bg-gray-800 rounded-t-lg pt-4 pb-3 px-4">
                    <div className="flex space-x-2 absolute left-4 top-4">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                  </div>
                  <div className="relative bg-gray-800 p-2">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover rounded max-h-[400px]"
                    />
                  </div>
                </div>
              </div>
              
              {/* Project Info */}
              <div className="w-full lg:w-1/2 space-y-4">
                <h3 className="text-2xl font-bold text-gray-800">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="bg-indigo-100 text-indigo-800 text-sm px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 pt-4">
                  <a 
                    href={project.github}
                    className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
                  >
                    <Github size={20} />
                    Code
                  </a>
                  <a 
                    href={project.live}
                    className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
                  >
                    <ExternalLink size={20} />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;