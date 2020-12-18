import React from "react";
import { Carousel, Card } from "react-bootstrap";

class CarouselSlide extends React.Component {
  state = {
    movieimg: this.props.movieimg,
  };

  render() {
    return (
      <Carousel.Item>
        <Row>
          {this.state &&
            this.state.movieArray &&
            this.state.movieArray.map((movie, index) => (
              <>
                <SingleCarousel movie={movie} key={index} />
              </>
            ))}
        </Row>
      </Carousel.Item>
    );
  }
}

export default CarouselSlide;
