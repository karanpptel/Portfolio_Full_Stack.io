import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-600 leading-relaxed text-justify">
            I am a passionate and detail-oriented Full Stack Web Developer with hands-on experience in MERN Stack 
            (MongoDB, Express.js, React.js, Node.js) and a strong foundation in both frontend and backend development. 
            Currently pursuing a B.Tech in Computer Science & Engineering at Parul University, I have a proven track record of 
            building scalable and user-friendly web applications, including a food-ordering platform, a real-time chat application, and a Spotify-inspired music streaming app.
             My technical expertise includes React.js, JavaScript, RESTful APIs, WebSockets, and database management using MongoDB. 
             I am also skilled in responsive design, API integration, and user authentication systems, with certifications in Postman API Fundamentals and Generative AI from Microsoft and LinkedIn. With a proactive approach to learning and problem-solving, I am eager to contribute to innovative projects and grow as a developer in a dynamic tech environment.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed text-justify">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
              or sharing my knowledge through technical writing and mentoring.
            </p>
          </div>
          <div className="relative">
            <img 
              src="https://i.ibb.co/JqhW3zG/IMG-20250110-WA0007.jpg" 
              alt="Professional headshot" 
              className="rounded-lg shadow-xl w-full " 
            />
            <div className="absolute inset-0 bg-indigo-600 rounded-lg -z-10 transform translate-x-4 translate-y-4"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;