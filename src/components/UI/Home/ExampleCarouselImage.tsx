import React from "react";
import styles from '../../../scss/Carousel.module.scss';

interface ExampleCarouselImageProps {
  text: string;
  img: string;
}

const ExampleCarouselImage: React.FC<ExampleCarouselImageProps> = (props) => {
  return (
    <div className={styles.carouselImgContainer}>
      <h2>{props.text}</h2>
      <img src={props.img} alt={props.text} />
    </div>
  );
};

export default ExampleCarouselImage;
