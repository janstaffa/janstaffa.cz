import React from 'react';
export const Footer: React.FC = () => {
  return (
    <div className="h-full bg-dark-100 px-8 py-2">
      <p className="text-light-200 italic text-center">
        &copy; janstaffa.cz 2015-{new Date().getFullYear()}
      </p>
    </div>
  );
};
