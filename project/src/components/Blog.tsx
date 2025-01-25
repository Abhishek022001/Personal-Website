import React from 'react';

export function Blog() {
  return (
    <section id="blog" className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
          Blog
        </h2>
        <div className="text-center text-gray-400">
          <p>Coming soon! Stay tuned for my upcoming blog posts about technology, development, and more.</p>
        </div>
      </div>
    </section>
  );
}