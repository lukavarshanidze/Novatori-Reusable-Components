import React from 'react';

type HeadingProps = {
  type: "h1" | "h2" | "h3" | "h4" | "h5";
  children: 'react';
};

const Heading: React.FC<HeadingProps> = ({ type, children }) => {
  const HeadingTag = type;

  return (
    <HeadingTag style={{ fontFamily: 'Lato' }}>
      {children}
    </HeadingTag>
  );
};

export default Heading;
