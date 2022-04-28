import React, { useState } from 'react';
import './css/App.css';
import img1 from './css/img/1.jpeg';
import img2 from './css/img/2.jpg';
import img3 from './css/img/3.jpg';
import img4 from './css/img/4.jpg';
import img5 from './css/img/5.jpg';
import img6 from './css/img/6.jpg';
import img7 from './css/img/7.jpg';
import img8 from './css/img/8.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [slideIndex, setSlideIndex] = useState(1);

  const sliderItems = [img1, img2, img3, img4, img5, img6, img7, img8];

  const prevClickHandler = () => {
    slideIndex === 1
      ? setSlideIndex(sliderItems.length)
      : setSlideIndex(slideIndex - 1);
  };

  const nextClickHandler = () => {
    slideIndex === sliderItems.length
      ? setSlideIndex(1)
      : setSlideIndex(slideIndex + 1);
  };

  return (
    <div className="app">
      <div className="app__slider">
        <button onClick={prevClickHandler}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        {sliderItems.map((item, i) => (
          <div className={slideIndex === i + 1 ? 'slide active' : 'slide'}>
            <img src={item} alt="Slide IMG" />
          </div>
        ))}
        <button onClick={nextClickHandler}>
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
      <em>
        <strong>
          Stand With Ukraine. Stop War. <br />
          &copy; Copyright 2022 - Nuriddin Gulamov, All rights reserved.
        </strong>
      </em>
    </div>
  );
}

export default App;
