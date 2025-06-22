import React from 'react'
import Card from '../components/Card'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import sppuimage from '../assets/card-img/sppu-logo.jpeg'; // Import image for SPPU
import EngImg from '../assets/card-img/image.png'; // Import image for Engineering Notes
import examimg from '../assets/card-img/exam-preparation-time-11601642-9472186.webp'; // Import image for Exam Prep
import youtubeimg from '../assets/card-img/youtube.png'; // Import image for YouTube
import datascienceimg from '../assets/card-img/data science.jpg'; // Import image for Data Science and Machine Learning
import webdevimg from '../assets/card-img/web-img.png'
import dsaimg from '../assets/card-img/dsa-img.png'
import plasmentimg from '../assets/card-img/placement-img.png'; // Import image for Placement Preparation


const Homecard = ({ mode }) => {
  return (
    <div className="card-container">
      <Card
        mode={mode}
        title="Savitribai Phule Pune University [SPPU]"
        description="University study material, PYQ, syllabus, books for 1st-4th year (CS, AIML, ENTC, etc.)"
        image={sppuimage}  // ✅ Pass the imported image
        
        link="/sppu"
      />

      <Card
        mode={mode}
        title="Engineering Notes"
        description="plasment preparation, interview tips, and resume building."
        image={EngImg} // ✅ Pass the imported image
        link="/Branch" // ✅ Pass the link to the Contact page

      />

      <Card
        mode={mode}
        title="Youtube Playlist Engineering Playlist"
        description="YouTube Playlist for all Branch and All subject years (1st, 2nd, 3rd, 4th) branch (CS, AIML AIDS, ENTC, ELECTRONIC, MACHANICAL, ROBOTICS)."
        image={youtubeimg} // ✅ Pass the imported image
        link="https://www.youtube.com/@IdiotEngineers"
        // newTab={false}
        rel="noopener noreferrer" // ✅ Security best practice
      />
      <Card
        mode={mode}
        title="Resume building"
        description=" Resume building, interview tips, and resume building."
        image={examimg} // ✅ Pass the imported image
        link="/Resume" // ✅ Pass the link to the Resume page
      />

      <Card
        mode={mode}
        title="Plasement Preparation"
        description="plasment preparation, interview tips, and resume building."
        image={plasmentimg} // ✅ Pass the imported image
        link="/Plasement" // ✅ Pass the link to the Plasement Preparation page
      />
       <Card
        mode={mode}
        title=" DSA Preparation"
        description="Data Structures and Algorithms preparation resources."
        image={dsaimg} // ✅ Pass the imported image
        link="https://drive.google.com/drive/folders/1hkoND8Z1rLAY9AsV-7FPzk1IhLOzrVvS?usp=sharing" // ✅ Pass the link to the Plasement Preparation page
      />
       <Card
        mode={mode}
        title="Web Development"
        description="Learn web development with resources and tutorials."
        image={webdevimg} // ✅ Pass the imported image
        link="https://youtube.com/playlist?list=PLu0W_9lII9agq5TrH9XLIKQvv0iaF2X3w&si=wuR7L238TZw74nS2" // ✅ Pass the link to the Plasement Preparation page
      />

       <Card
        mode={mode}
        title="Data Science and Machine Learning"
        description="Data Science and Machine Learning resources and tutorials."
        image={datascienceimg} // ✅ Pass the imported image
        link="https://drive.google.com/drive/folders/1pm6IB69bFoiH5ggCsT0Y_P_TqcSqI8AQ?usp=sharing" // ✅ Pass the link to the Plasement Preparation page
      />




    </div>
  )
}

export default Homecard
