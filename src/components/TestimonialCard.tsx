import React from 'react';

interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
  image: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, name, title, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center">
      <div className="w-20 h-20 rounded-full overflow-hidden mb-4">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      <p className="text-gray-600 italic mb-4">"{quote}"</p>
      <h4 className="font-bold text-lg">{name}</h4>
      <p className="text-gray-500">{title}</p>
    </div>
  );
};

export default TestimonialCard;