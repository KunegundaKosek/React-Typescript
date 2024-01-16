import React from "react";
import styles from "../../../scss/Carousel.module.scss";

interface ExampleCarouselImageProps {
  text: string;
  img: string;
  href: string;
}

const ExampleCarouselImage: React.FC<ExampleCarouselImageProps> = (props) => {
  return (
    <a href={props.href}>
      <div className={styles.carouselImgContainer}>
        <img src={props.img} alt={props.text} />
      </div>
    </a>
  );
};

export default ExampleCarouselImage;
