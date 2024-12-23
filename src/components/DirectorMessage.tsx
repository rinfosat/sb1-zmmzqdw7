import React from 'react';

export default function DirectorMessage() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600"
              alt="M. Charaf eddine AAHDI"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">Mot du Directeur</h2>
            <blockquote className="text-gray-600 mb-6">
              "Chez IGISEM, nous nous engageons à former les leaders de demain. Notre mission est de 
              fournir une éducation de qualité qui combine excellence académique et expérience pratique. 
              Nous préparons nos étudiants à relever les défis du monde professionnel avec confiance et 
              compétence."
            </blockquote>
            <div className="border-l-4 border-blue-600 pl-4">
              <p className="font-semibold">M. Charaf eddine AAHDI</p>
              <p className="text-gray-600">Directeur Général</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}