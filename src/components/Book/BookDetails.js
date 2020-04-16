import React from 'react';
import styled from 'styled-components';

import EmptyStar from '../../images/Empty star.png';
import FullStar from '../../images/Icon Path.png';

const BookDetails = ({
  book: {
    image,
    name,
    year,
    rating,
    writer,
    artist,
    publication,
    owner,
    summary,
  },
}) => (
  <BookDetailsWrapper className='d-flex flex-column flex-md-row mt-4 p-0'>
    <img src={image} width='340px' height='520px' alt='book' />
    <div className='details pl-md-4 mt-4 mt-md-0'>
      <h2 className='name'>
        {name && name.split('#')[0]} ({year})
      </h2>
      {rating && (
        <div className='stars d-block d-md-inline-block ml-md-5 outer p-0'>
          {[...Array(rating)].map((_, i) => (
            <img key={i} src={FullStar} alt='full-star' className='px-1' />
          ))}
          {[...Array(5 - rating)].map((_, i) => (
            <img
              key={i + rating}
              src={EmptyStar}
              alt='empty-star'
              className='px-1 pb-1'
            />
          ))}
        </div>
      )}
      <div className='info mt-2'>
        <p>
          Writer: <span className='ml-2 '>{writer}</span>
        </p>
        <p>
          Artist: <span className='ml-2 '>{artist}</span>
        </p>
        <p>
          Publication: <span className='ml-2 '>{publication}</span>
        </p>
        <p>
          Owner: <span className='ml-2 '>{owner}</span>
        </p>
      </div>
      <div className='description mt-4'>
        <p>{summary}</p>
      </div>
    </div>
  </BookDetailsWrapper>
);

const BookDetailsWrapper = styled.div`
  .name {
    color: #ccc;
  }

  .name,
  .stars {
    display: inline-block;
  }

  .info p {
    font-weight: bold;
    color: #999;
    margin-bottom: 8px;
  }

  .info span {
    color: #ccc;
  }

  .description {
    max-width: 960px;
    color: #ccc;
  }

  .outer {
    position: relative;
    max-height: 30px;
  }

  .inner {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
`;

export default BookDetails;
