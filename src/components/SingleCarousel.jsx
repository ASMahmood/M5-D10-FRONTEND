import React from "react";

import "owl.carousel/dist/assets/owl.carousel.css";

class SingleCarousel extends React.Component {
  render() {
    return <img src={this.props.movie.Poster} alt="" />;
  }
}

export default SingleCarousel;
