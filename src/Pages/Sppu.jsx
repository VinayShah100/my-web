import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductCard from '../components/Card';
import PYQIMG from '../assets/card-img/pyq-img.jpg';
import Noteimg from '../assets/card-img/notesimg.jpg'
import practicalimg from '../assets/card-img/practice.png'
import { TypeAnimation } from 'react-type-animation';

function Sppu({ mode }) {
    return (
        <>
            <div className={`flex items-center justify-center h-80 mt-30 text-center px-4 ${mode === 'light' ? 'bg-gradient-to-br from-gray-100 via-white to-gray-200 text-black' : 'bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white'}`}>
                <div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        Savitribai Phule Pune University  👋
                    </h1>

                    <TypeAnimation
                        sequence={[
                            'Engineering Study Notes 📘',
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
                </div>
            </div>

            <div className="card-container">
                <ProductCard
                    mode={mode}
                    title="Previous Year Question Papers [PYQ]"
                    description="University study material, PYQ, syllabus, books for 1st-4th year (CS, AIML, ENTC, etc.)"
                    image={PYQIMG}
                    link="https://drive.google.com/drive/folders/0Bz9C0ysJZ7PnMGZKeWcybUpXWGM?resourcekey=0-S2yaWXvAG7ObM_GC8LRNTQ"
                    target="_blank"
                    rel="noopener noreferrer"
                />

                <ProductCard
                    mode={mode}
                    title="Engineering Notes & Books"
                    description="University study material, syllabus, books for 1st-4th year (CS, AIML, ENTC, etc.)"
                    image={Noteimg}
                    link="/Branch"
                    
                />
                <ProductCard
                    mode={mode}
                    title="Practical Files codes & Assignments"
                    description="All practical files codes and assignments for 1st-4th year (CS, AIML, ENTC, etc.)"
                    image={practicalimg}
                    link="https://github.com/atharvabhide/SPPU-COMP-2019-PRACTICALS"
                    target="_blank"
                    rel="noopener noreferrer"
                />
            </div>
        </>
    )
}

export default Sppu
