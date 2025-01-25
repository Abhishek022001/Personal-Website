import React from 'react';
import { Github, Linkedin } from 'lucide-react';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-6 py-16 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
          Abhishek Ganesan
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 mb-8">
          Software Developer & Tech Enthusiast
        </p>
        <div className="flex justify-center space-x-6">
          <SocialLink href="https://github.com/Abhishek022001" icon={<Github />} />
          <SocialLink href="https://linkedin.com/in/abhishek-ganesan-a91036195" icon={<Linkedin />} />
          <SocialLink 
            href="https://x.com/AbhishekGanesxn" 
            icon={
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.99 0H20.298L13.071 8.26L21.573 19.5H14.916L9.702 12.683L3.736 19.5H0.426L8.156 10.665L0 0H6.826L11.539 6.231L16.99 0ZM15.829 17.52H17.662L5.83 1.876H3.863L15.829 17.52Z" fill="currentColor"/>
              </svg>
            } 
          />
        </div>
      </div>
    </section>
  );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors duration-300"
    >
      {icon}
    </a>
  );
}