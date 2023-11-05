import React from 'react';
import { Icon } from '@iconify/react';
import '../css/reviews.css';

const Review = () => (
  <div id="my-reviews" className="recommendation">
    <div className="d-flex flex-column justify-content-center align-items-center m-4">
      <p className="headline">Recommendations</p>
      <h3 className="testimonials">
        Read Testimonials from Those I&apos;ve
        <span className="text-success"> Worked With</span>
      </h3>
    </div>
    <div className="reviews">
      <div className="review-container">
        <div className="d-flex align-items-center flex-row-reverse stars">
          <Icon icon="bi:star-fill" color="#fe8b75" />
          <Icon icon="bi:star-fill" color="#fe8b75" />
          <Icon icon="bi:star-fill" color="#fe8b75" />
          <Icon icon="bi:star-fill" color="#fe8b75" />
          <Icon icon="bi:star-fill" color="#fe8b75" />
        </div>
        <img className="reivew-imgs" src="./images/review1.PNG" alt="review1" />
      </div>
      <div className="review-container">
        <div className="d-flex align-items-center flex-row-reverse stars">
          <Icon icon="bi:star-fill" color="#fe8b75" />
          <Icon icon="bi:star-fill" color="#fe8b75" />
          <Icon icon="bi:star-fill" color="#fe8b75" />
          <Icon icon="bi:star-fill" color="#fe8b75" />
          <Icon icon="bi:star-fill" color="#fe8b75" />
        </div>
        <img className="reivew-imgs" src="./images/review2.PNG" alt="review2" />
      </div>
    </div>
  </div>
);

export default Review;
