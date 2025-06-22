// src/components/HeroSection.jsx
import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const HeroSection = ({ mode }) => {
  return (
    <div
      className={`flex items-center justify-center h-screen px-4 text-center transition-all ${
        mode === 'light'
          ? 'bg-gradient-to-br from-gray-100 via-white to-gray-200 text-black'
          : 'bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white'
      }`}
    >
      <div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Idiot-Engineers 👋
        </h1>

        <TypeAnimation
          sequence={[
            'Engineering Study Notes 📘',
            2000,
            'Web Dev, Cybersecurity & AI Resources 💻',
            2000,
            'Free Tools & Projects for Students 🛠️',
            2000,
            'Simplifying Pune University Syllabus 🎯',
            2000,
            'Built by Engineers, for Engineers ⚙️',
            2000,
          ]}
          wrapper="span"
          speed={50}
          className="text-xl md:text-3xl text-cyan-400 font-semibold"
          repeat={Infinity}
        />

        <p className={`mt-6 max-w-xl mx-auto ${mode === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
          Your one-stop hub for clean notes, practical projects, and student-tested resources — made by engineers, for engineers.
        </p>

        <div className="mt-8">
          <a
            href="/products"
            className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 rounded-full text-white font-medium transition duration-300"
          >
            Explore
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
