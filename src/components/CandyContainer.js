import React from 'react';
import CandyCard from './CandyCard';

function CandyContainer({ candies }) {
  return (
    <div className="candy-container">
      {candies.map((candy) => (
        <CandyCard key={candy.id} candy={candy} />
      ))}
    </div>
  );
}

export default CandyContainer;
