import React from "react";

const ResumeCard = ({ mode, title, description, image, link }) => {
  return (
    <div
      className={`relative w-full sm:w-[48%] md:w-[30%] lg:w-[23%] p-5 rounded-lg text-center shadow-lg flex flex-col 
        transition-transform mx-auto overflow-visible ${
          mode === "dark"
            ? "bg-gray-800 text-white shadow-gray-600"
            : "bg-white text-black"
        }`}
      style={{ height: "400px" }}
    >
      {/* 👇 Image container with its own group */}
      <div className="relative mb-4 group">
        <img
          src={image}
          alt="card-img"
          className="w-50 h-40 object-cover mx-auto rounded-lg"
        />

        {/* 👇 Hover preview activates ONLY when hovering over the image */}
        <img
          src={image}
          alt={`${title} preview`}
          className="hidden group-hover:block absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-[110%]
            w-auto max-w-[600px] max-h-[500px] rounded-lg shadow-lg z-50 border border-white bg-white"
        />
      </div>

      <div className="flex-grow flex flex-col">
        <h4 className="text-lg font-semibold mb-2 line-clamp-2">{title}</h4>
        <p className="text-sm mb-4 flex-grow line-clamp-3">{description}</p>
      </div>

      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 py-2 rounded-full bg-gray-600 text-white hover:bg-black transition"
      >
        📄 Click Here
      </a>
    </div>
  );
};

export default ResumeCard;
