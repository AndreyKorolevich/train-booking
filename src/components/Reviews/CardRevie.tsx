import React from 'react';
import avatar from '../../img/avatar.png';

const CardReview: React.FC = () => {
  return (
    <div className='card mb-3'>
      <div className='row g-0'>
        <div className='col-md-4'>
          <img src={avatar} alt='avatar' />
        </div>
        <div className='col-md-8'>
          <div className='card-body'>
            <h5 className='card-title'>Card title</h5>
            <p className='card-text'>
              This is a wider card with supporting text below as a natural lead-in to additional content. This
              content is a little bit longer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardReview;
