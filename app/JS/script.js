// App.jsx
import React, { useEffect } from 'react';
import gsap from 'gsap';

const App = () => {
  useEffect(() => {
    // GSAP animations
    gsap.from('.intro-text', { opacity: 0, y: 50, duration: 1, delay: 0.5 });
    gsap.from('.info-card', { opacity: 0, x: -50, duration: 1, delay: 1 });
  }, []);

  return (
    <div className="bg-gray-100 h-screen flex justify-center items-center">
      <div className="max-w-md p-8 bg-white rounded-lg shadow-lg info-card">
        <h1 className="text-2xl font-bold mb-4 intro-text">Hello, I'm [Your Name]</h1>
        <p className="text-gray-700 mb-4 intro-text">
          I'm a [Your Profession] with experience in [Your Expertise].
        </p>
        <p className="text-gray-700 mb-4 intro-text">
          I enjoy [Your Interests] and I'm passionate about [Your Passion].
        </p>
        <p className="text-gray-700 intro-text">
          Feel free to reach out at [Your Email] or connect with me on [Your Social Media].
        </p>
      </div>
    </div>
  );
}

export default App;
