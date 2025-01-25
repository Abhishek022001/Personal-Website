import React from 'react';
import { Code, Coffee, BookOpen } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
          About Me
        </h2>
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-invert prose-lg">
            <p className="text-gray-300 leading-relaxed mb-6">
              I'm a results-driven Software Developer with a passion for crafting efficient solutions and exploring cutting-edge technologies. My journey has taken me from Python and frameworks like Django and Flask to mastering the Java ecosystem with Spring Boot, and now diving into the MERN stack to create robust, scalable applications.
            </p>
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-4 text-white">My portfolio showcases diverse projects, including:</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Online Travel Agency: A hotel booking platform built using Spring Boot.</li>
                <li>• Weather Information App: Delivering real-time weather updates.</li>
                <li>• Currency Converter App: A simple yet impactful utility application.</li>
              </ul>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              Beyond tech, I'm a lifelong learner passionate about finance, investing, and personal growth. When I'm not coding, you can find me sharing insights on these topics or enjoying a good cup of coffee ☕.
            </p>
            <p className="text-gray-300 leading-relaxed">
              My ultimate goal is to deliver value by building impactful solutions and collaborating with like-minded individuals. I'm always open to conversations, so feel free to connect with me to discuss ideas, projects, or anything tech-related!
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <FeatureCard
              icon={<Code className="w-8 h-8 text-purple-400" />}
              title="Development"
              description="Full-stack development with modern technologies"
            />
            <FeatureCard
              icon={<BookOpen className="w-8 h-8 text-purple-400" />}
              title="Learning"
              description="Continuous learning and skill improvement"
            />
            <FeatureCard
              icon={<Coffee className="w-8 h-8 text-purple-400" />}
              title="Collaboration"
              description="Open to exciting project collaborations"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="p-6 rounded-lg bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-purple-500/50 transition-colors duration-300">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}