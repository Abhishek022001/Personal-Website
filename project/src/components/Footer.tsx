import React from 'react';
import { Github, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-12 bg-black/50 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center">
          <div className="flex space-x-6 mb-8">
            <SocialLink href="https://github.com/Abhishek022001" icon={<Github size={20} />} />
            <SocialLink href="https://linkedin.com/in/abhishek-ganesan-a91036195" icon={<Linkedin size={20} />} />
            <SocialLink 
              href="https://x.com/AbhishekGanesxn" 
              icon={
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.99 0H20.298L13.071 8.26L21.573 19.5H14.916L9.702 12.683L3.736 19.5H0.426L8.156 10.665L0 0H6.826L11.539 6.231L16.99 0ZM15.829 17.52H17.662L5.83 1.876H3.863L15.829 17.52Z" fill="currentColor"/>
                </svg>
              } 
            />
          </div>
          <p className="text-gray-400 text-center max-w-md">
            Building innovative solutions and exploring new technologies. Let's create something amazing together.
          </p>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-400 hover:text-white transition-colors duration-300"
    >
      {icon}
    </a>
  );
}