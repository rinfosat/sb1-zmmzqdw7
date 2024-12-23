import React from 'react';
import { GraduationCap } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-8 h-8 text-blue-600" />
            <span className="font-bold text-xl">IGISEM</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-blue-600">Accueil</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">Formations</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">À propos</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">Contact</a>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              S'inscrire
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}