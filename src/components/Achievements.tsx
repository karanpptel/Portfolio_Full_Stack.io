import React from 'react';
import { Award, BookOpen, Trophy } from 'lucide-react';

const achievements = [
  {
    icon: <Trophy className="text-yellow-500" size={24} />,
    title: "Accenture UK - Developer & Technology Job Simulation ",
    description: "Completed Accenture Developer and Technology Job Simulation, enhancing skills in software development methodologies."
  },
  {
    icon: <BookOpen className="text-blue-500" size={24} />,
    title: "Career Essentials in Generative AI by Microsoft and LinkedIn",
    description: "Certified in Career Essentials in Generative AI by Microsoft and LinkedIn, with expertise in Generative AI, Artificial Intelligence, and Computer Ethics"
  },
  {
    icon: <BookOpen className="text-blue-500" size={24} />,
    title: "TCS iON Career Edge - Young Professional",
    description: "Certified in TCS iON Career Edge - Young Professional program, showcasing expertise in communication, soft skills, career development, and foundational IT knowledge."
  },
  {
    icon: <Award className="text-green-500" size={24} />,
    title: "Postman API testing Student Expert Program",
    description: "Completed the POSTMAN API Fundamentals Student Expert Program, gaining hands-on skills in API development and testing. Proficient in making GET, POST, PATCH, and DELETE requests, managing query parameters, headers, and response codes, and implementing API Key Authorization. Experienced in basic scripting and integrating APIs into applications for seamless functionality."
  }
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Achievements</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-gray-50 rounded-full mb-4">
                {achievement.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{achievement.title}</h3>
              <p className="text-gray-600">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;