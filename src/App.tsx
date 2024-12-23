import React from 'react';
import { GraduationCap, Phone, Mail, MapPin, ChevronRight } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CourseCard from './components/CourseCard';
import DirectorMessage from './components/DirectorMessage';
import ContactForm from './components/ContactForm';

function App() {
  const courses = [
    {
      title: "Master en Management",
      description: "Formation approfondie en gestion d'entreprise et leadership stratégique",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=600",
    },
    {
      title: "Licence Professionnelle",
      description: "Programme complet en gestion des organisations et développement professionnel",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=600",
    },
    {
      title: "Formation Continue",
      description: "Modules spécialisés pour le perfectionnement des compétences professionnelles",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=600",
    },
    {
      title: "Certification Professionnelle",
      description: "Programmes courts et intensifs pour une expertise ciblée",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=600",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      
      {/* Formations */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Nos Formations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {courses.map((course, index) => (
              <CourseCard key={index} {...course} />
            ))}
          </div>
        </div>
      </section>

      <DirectorMessage />

      {/* Diplômes */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Master Professionnel</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-6">Points clés de la formation</h3>
              <ul className="space-y-4">
                {[
                  "Formation accréditée par l'État",
                  "Corps professoral hautement qualifié",
                  "Stage pratique en entreprise",
                  "Accompagnement personnalisé",
                  "Réseau d'alumni actif"
                ].map((point, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <ChevronRight className="w-5 h-5 text-blue-600" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-6">Conditions d'admission</h3>
              <ul className="space-y-4">
                {[
                  "Bac+3 ou équivalent",
                  "Dossier académique solide",
                  "Entretien de motivation",
                  "Maîtrise des langues"
                ].map((condition, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <ChevronRight className="w-5 h-5 text-blue-600" />
                    <span>{condition}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Contactez-nous</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <MapPin className="w-6 h-6 text-blue-600" />
                  <p>38 et 45 ALMADINA 1, Deroua</p>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6 text-blue-600" />
                  <p>+212 5XX XX XX XX</p>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6 text-blue-600" />
                  <p>contact@igisem.ma</p>
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;