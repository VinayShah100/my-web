import React from 'react';
import ProductCard from '../components/Card';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PYQIMG from '../assets/card-img/pyq-img.jpg'; // Optional image import
import interveimg from '../assets/card-img/interve.png'; // Optional image import
import javaimg from '../assets/card-img/java.png'; // Optional image import
import Pythonimg from '../assets/card-img/Python.png'; // Optional image import
import cplushimg from '../assets/card-img/c++.png';
import sqlimg from '../assets/card-img/sql.png';
import dbmsimg from '../assets/card-img/dbms.webp'; // Optional image import

import { Link } from "react-router-dom";
import { TypeAnimation } from 'react-type-animation';

const Plasement = ({ mode }) => {
  return (
    <div className="card-container">
      <ProductCard
        mode={mode}
        title="TCS(NQT) PYQ & Syllabus"
        description="Tcs [Tata Consultancy Services] previous year question papers and syllabus "
        image={PYQIMG}
        link="https://drive.google.com/drive/folders/0Bz9C0ysJZ7PnMGZKeWcybUpXWGM?resourcekey=0-S2yaWXvAG7ObM_GC8LRNTQ"
      />

      <ProductCard
        mode={mode}
        title="Engineering Notes & interview Questions"
        description="All engineering notes and interview questions for 1st-4th year (CS, AIML, ENTC, etc.)"
        link="https://t.me/+GsQtTekI2rIzYjE9"
        image={interveimg}
      />

      <ProductCard
        mode={mode}
        title="Practical Files codes & Assignments"
        description="All practical files codes and assignments for 1st-4th year (CS, AIML, ENTC, etc.)"
        link="https://t.me/+GsQtTekI2rIzYjE9"
      />

      <ProductCard
        mode={mode}
        title="Java Interview Questions"
        description="Java interview for freshers and experienced candidates with answers"
        link="https://github.com/Devinterview-io/java-interview-questions"
        target="_blank"
        rel="noopener noreferrer"
        image={javaimg}
      />

      <ProductCard
        mode={mode}
        title="Python Interview Questions"
        description="Python interview for freshers and experienced candidates with answers"
        link="https://t.me/+GsQtTekI2rIzYjE9"
        image={Pythonimg}
      />

      <ProductCard
        mode={mode}
        title="C++ Interview Questions"
        description="C++ interview for freshers and experienced candidates with answers"
        link="https://t.me/+GsQtTekI2rIzYjE9"
        image={cplushimg}
      />

       <ProductCard
        mode={mode}
        title="SQL Interview Questions"
        description="SQL interview for freshers and experienced candidates with answers"
        link="https://t.me/+GsQtTekI2rIzYjE9"
        image={sqlimg}
      />

      <ProductCard
        mode={mode}
        title="DBMS Interview Questions"
        description="JavaScript interview for freshers and experienced candidates with answers"
        link="https://t.me/+GsQtTekI2rIzYjE9"
        image={dbmsimg}
      />


      
    </div>

    
  );
};

export default Plasement;
