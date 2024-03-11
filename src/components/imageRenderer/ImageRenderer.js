import React, { useState } from 'react';
import { Shimmer } from 'shimmer';
import './image.css';

const ImageRenderer = ({ data = [], loaded = false }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchtext, setSearchText] = useState('');

  const itemsPerpage = 5 * currentPage;

  const filteredData = data.filter(
    (link) =>
      !link.endsWith('srt') &&
      !link.endsWith('vtt') &&
      link.toLowerCase().includes(searchtext.toLowerCase())
  );

  const shimmerElements = Array.from({ length: 30 }, (_, index) => (
    <Shimmer key={index} width={400} height={200} />
  ));

  return (
    <div className='container'>
      {loaded ? (
        <div className='imageContainer'>
          {filteredData.map((item, index) => (
            <div key={index} className='image'>
              <a href={item} target='_blank' rel='noopener noreferrer'>
                <img src={item} alt='NOT AVAILABLE'></img>
              </a>
            </div>
          ))}
        </div>
      ) : (
        shimmerElements
      )}
    </div>
  );
};

export default ImageRenderer;
