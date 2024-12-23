import React from 'react';

export default function Hero() {
  return (
    <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen">
      <div className="absolute top-0 w-full h-full bg-center bg-cover"
           style={{
             backgroundImage: "url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80')"
           }}>
        <span className="w-full h-full absolute opacity-50 bg-black"></span>
      </div>
      <div className="container relative mx-auto">
        <div className="items-center flex flex-wrap">
          <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
            <div className="text-white">
              <h1 className="text-5xl font-semibold leading-tight mb-4">
                Groupe IGISEM
              </h1>
              <h2 className="text-2xl mb-8">
                Excellence en Formation Professionnelle
              </h2>
              <button className="bg-blue-600 text-white font-bold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Découvrir nos formations
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}