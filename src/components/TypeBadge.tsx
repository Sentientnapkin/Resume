import React from 'react';

interface TypeBadgeProps {
  type: string;  // e.g., "Enterprise AI • Technical PM"
}

const TypeBadge: React.FC<TypeBadgeProps> = ({ type }) => {
  // Determine badge styling based on type keywords
  const getTypeStyle = () => {
    const typeLower = type.toLowerCase();

    if (typeLower.includes('enterprise') || typeLower.includes('professional')) {
      return 'text-accent border-accent/30';
    } else if (typeLower.includes('academic') || typeLower.includes('research')) {
      return 'text-accent-light border-accent-light/30';
    } else if (typeLower.includes('contract')) {
      return 'text-accent-dark border-accent-dark/30';
    } else {
      return 'text-text-secondary border-border';
    }
  };

  return (
    <span className={`inline-block px-3 py-1 border rounded-full text-xs font-mono ${getTypeStyle()}`}>
      {type}
    </span>
  );
};

export default TypeBadge;
