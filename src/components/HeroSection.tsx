import React from 'react';
import { Link } from 'react-router-dom';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  buttonText?: string;
  buttonLink?: string;
  backgroundImage: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ 
  title, 
  subtitle, 
  buttonText, 
  buttonLink,
  backgroundImage
}) => {
  return (
    <div 
      className="relative bg-cover bg-center h-[600px] flex items-center"
      style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${backgroundImage})` }}
    >
      <div className="container mx-auto px-4 text-center text-white">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">{title}</h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">{subtitle}</p>
        {buttonText && buttonLink && (
          <Link 
            to={buttonLink} 
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-md text-lg transition duration-300"
          >
            {buttonText}
          </Link>
        )}
      </div>
    </div>
  );
};

export default HeroSection;