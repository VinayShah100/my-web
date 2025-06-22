import React from 'react';
import ResumeCard from '../components/ResumeCard';
import Faang from '../assets/Resume-img/resume Faang.jpeg';
import { TypeAnimation } from 'react-type-animation';
import resume2 from '../assets/Resume-img/resume-2.jpeg';
import resume3 from '../assets/Resume-img/resume3.jpeg';
import resume4 from '../assets/Resume-img/resume4.jpeg';
const Resume = ({ mode }) => {
    return (
        <>
         <div className={`flex items-center justify-center h-80 mt-30 text-center px-4 ${mode === 'light' ? 'bg-gradient-to-br from-gray-100 via-white to-gray-200 text-black' : 'bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white'}`}>
                        <div>
                            <h1 className="text-4xl md:text-6xl font-bold mb-6">
                                Crack the Interview with the Right Resume  
                            </h1>
        
                            <TypeAnimation
                                sequence={[
                                    'ATS-Friendly Resume Templates 💼',
                                    2000,
                                    'Final Year Resume Examples 📄',
                                    2000,
                                    'Resume Tips That Actually Work 🚀',
                                    2000,
                                    'Get Hired Faster with Our Resources! 🏆',
                                    2000,
                                    'Built for Engineers, by Engineers ⚙️',
                                    2000,
                                    'Get Started Today! 🚀',
                                ]}
                                wrapper="span"
                                speed={50}
                                className="text-xl md:text-3xl text-cyan-400 font-semibold"
                                repeat={Infinity}
                            />
        
                            <p className={`mt-6 max-w-xl mx-auto ${mode === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
                                🧠  No more boring CVs. Explore engineering-specific resume templates, interview-friendly formats, and real student samples — built to help you land that dream job or internship, even if you’re just starting out.

                            </p>
                        </div>
                    </div>


        <div className="card-container p-6">
            <ResumeCard
                mode={mode}
                title="FAANGPath Resume"
                description="A simple, ATS-friendly resume template designed for FAANG applications"
                image={Faang}
                link="https://www.overleaf.com/latex/templates/faangpath-simple-template/npsfpdqnxmbc"
            />
            <ResumeCard
                mode={mode}
                title="Recreating Marissa Mayer's CV"
                description="A detailed recreation of Marissa Mayer's CV, perfect for inspiration"
                image={resume2}
                link="https://www.overleaf.com/latex/templates/recreating-business-insiders-cv-of-marissa-mayer/gtqfpbwncfvp"
            />
            <ResumeCard
                mode={mode}
                title="SB2Nov Resume Template"
                description="A modern resume template with a clean design, suitable for various applications"
                image={resume3}
                link="https://www.overleaf.com/latex/templates/rendercv-sb2nov-theme/gdspgtsnfncm"
            />
            <ResumeCard
                mode={mode}
                title="ATS Friendly Resume Template"
                description="An ATS-friendly resume template that ensures your resume passes through automated systems"
                image={resume4}
                link="https://drive.google.com/file/d/1lCnCnhkjgAQBblRhBFIDqzpiTH6357UF/view?usp=sharing"
            />
            
        </div>
        </>
        
    );
};

export default Resume;
