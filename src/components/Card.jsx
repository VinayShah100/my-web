import React from 'react';

const Card = ({ mode, title, description, image, link }) => {
  const isExternal = link?.startsWith('http');

  return (
    <div
      className={`w-full sm:w-[48%] md:w-[30%] lg:w-[23%] p-5 rounded-lg text-center shadow-lg flex flex-col 
        transition-transform transform hover:scale-105 mx-auto ${
          mode === "dark" ? "bg-gray-800 text-white shadow-gray-600" : "bg-white text-black"
        }`}
      style={{ height: "400px" }}
    >
      <img
        src={image}
        alt="card-img"
        className="w-50 h-40 object-cover mx-auto mb-4 rounded-lg"
      />
      <div className="flex-grow flex flex-col">
        <h4 className="text-lg font-semibold mb-2 line-clamp-2">{title}</h4>
        <p className="text-sm mb-4 flex-grow line-clamp-3">{description}</p>
      </div>

      <a
        href={link}
        target={isExternal ? "_blank" : "_self"}
        rel={isExternal ? "noopener noreferrer" : undefined}
        className="px-4 py-2 rounded-full bg-gray-600 text-white hover:bg-gray-700 transition"
      >
        Click Here
      </a>
    </div>
  );
};

export default Card;
