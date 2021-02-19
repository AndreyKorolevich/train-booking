import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import styles from './Reviews.module.scss';
import CardReview from './CardRevie';

const Reviews: React.FC = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number, e: Record<string, unknown> | null) => {
    setIndex(selectedIndex);
  };
  return (
    <div className={styles.reviews}>
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
  );
};

export default Reviews;
