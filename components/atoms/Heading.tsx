import React from 'react';

interface HeadingProps {
  children: React.ReactNode;
}

const Heading: React.FC<HeadingProps> = ({ children }) => {
  return (
    <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
      {children}
    </h1>
  );
};

export default Heading;