import React from 'react';

interface TeamMemberCardProps {
  image: string;
  name: string;
  position: string;
  bio: string;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ image, name, position, bio }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="h-64 overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-1">{name}</h3>
        <p className="text-red-600 font-medium mb-3">{position}</p>
        <p className="text-gray-600">{bio}</p>
      </div>
    </div>
  );
};

export default TeamMemberCard;