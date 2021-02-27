import React, { useState } from 'react';
import styles from './Reviews.module.scss';
import Carousel from 'react-bootstrap/Carousel';
import CardReview from './CardRevie/CardRevie';

const Reviews: React.FC = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };
  return (
    <div className={styles.reviews}>
      <div className='container'>
        <h5 className={styles.title}>ОТЗЫВЫ</h5>
        <Carousel activeIndex={index} onSelect={handleSelect} controls={false}>
          <Carousel.Item>
            <CardReview />
          </Carousel.Item>
          <Carousel.Item>
            <CardReview />
          </Carousel.Item>
          <Carousel.Item>
            <CardReview />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Reviews;
