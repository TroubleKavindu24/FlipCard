import React from 'react';
import './FlipCard.css';

const FlipCard = () => {
  return (
    <div className="container">
      <div className="flip">
        <div
          className="front"
          style={{
            backgroundImage: 'url(https://media.arcadis.com/-/media/project/arcadiscom/com/blogs/global/nick-hutchinson/2023/making-airports-fit-for-the-future/making-airports-fit-for-the-future-header.jpg?rev=9de0584ad7554290abdddd2b6e11c45e)',
          }}
        >
          <h2>Kavindu</h2>
        </div>
        <div className="back">
          <h2>This is a sample header</h2>
          <p>This is a sample paragraph.</p>
        </div>
      </div>
      
     
    </div>
  );
};

export default FlipCard;
