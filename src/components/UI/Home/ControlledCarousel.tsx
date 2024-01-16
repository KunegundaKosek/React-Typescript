import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import ExampleCarouselImage from "./ExampleCarouselImage";
import todoImg from "../../../images/todoApp.jpg";
import calculatorImg from "../../../images/calculator.jpg";
import weatherImg from "../../../images/weather.jpg";
import reactArt from "../../../images/reactArt.jpg";

import styles from "../../../scss/ControlledCarousel.module.scss";

function ControlledCarousel() {
  const [index, setIndex] = useState<number>(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      className={styles.carousel}
    >
      <Carousel.Item>
        <ExampleCarouselImage
          img={todoImg}
          text="Zdjęcie przedstawiające todo list."
          href="/todo"
        />
        <Carousel.Caption>
          <h3>Todo App</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage
          img={calculatorImg}
          text="Zdjęcie przedstawiające kalkulator"
          href="/calculator"
        />
        <Carousel.Caption>
          <h3>Kalkulator Inwestycyjny</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage
          img={weatherImg}
          text="Zdjęcie przedstawiające warunki atmosferyczne"
          href="/weather"
        />
        <Carousel.Caption>
          <h3>Pogoda</h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <ExampleCarouselImage
          img={reactArt}
          text="Zdjęcie przedstawiające artystyczny obraz z kobietą."
          href="/reactart"
        />
        <Carousel.Caption>
          <h3>ReactArt</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;
