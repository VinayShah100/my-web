import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import computerimg from '../assets/card-img/computer-eng.png';
import AIDSimg from '../assets/card-img/data science.jpg';
import AIMLimg from '../assets/card-img/ML-img.jpg';
import ENTCimg from '../assets/card-img/ENTC-Engineering.png';
import { Link } from "react-router-dom";
import Card from '../components/Card';
const Branch = ({ mode }) => {
  return (
    <div className="card-container">
      <Card
        mode={mode}
        title="computer Engineering"
        description=" computer engineering study material, PYQ, syllabus, books for 2st-4th year"
        image={computerimg}
        link="https://t.me/+GsQtTekI2rIzYjE9"
        target="_blank" // ✅ Open in a new tab
        rel="noopener noreferrer" // ✅ Security best practice
      />

      <Card
        mode={mode}
        title="AIML Engineering"
        description=" AIML engineering study material, PYQ, syllabus, books for 2st-4th year"
        link="https://t.me/+GsQtTekI2rIzYjE9"
        target="_blank" // ✅ Open in a new tab
        rel="noopener noreferrer" // ✅ Security best practice
        image={AIMLimg}
      />

      <Card
        mode={mode}
        title="AIDS Engineering"
        description="AIDS engineering study material, PYQ, syllabus, books for 2st-4th year"
        image={AIDSimg}
        link="https://t.me/+GsQtTekI2rIzYjE9"
        target="_blank" // ✅ Open in a new tab
        rel="noopener noreferrer" // ✅ Security best practice
      />
      <Card
        mode={mode}
        title="ENTC Engineering"
        description="ENTC engineering study material, PYQ, syllabus, books for 2st-4th year"
        image={ENTCimg}
        link="https://t.me/+GsQtTekI2rIzYjE9"
        target="_blank" // ✅ Open in a new tab
        rel="noopener noreferrer" // ✅ Security best practice
      />

    </div>
  )
}

export default Branch
