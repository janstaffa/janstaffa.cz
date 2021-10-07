import React from 'react';
export const Footer: React.FC = () => {
  return (
    <div className="w-full bg-dark-100 px-8 pt-1 pb-4">
      <p className="text-light-200 italic text-center">
        &copy; janstaffa.cz 2015-{new Date().getFullYear()}
      </p>
    </div>
  );
};
