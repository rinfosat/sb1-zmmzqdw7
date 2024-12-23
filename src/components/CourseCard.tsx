import React from 'react';

interface CourseCardProps {
  title: string;
  description: string;
  image: string;
}

export default function CourseCard({ title, description, image }: CourseCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 w-full">
          En savoir plus
        </button>
      </div>
    </div>
  );
}