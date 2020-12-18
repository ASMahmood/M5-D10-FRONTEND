import React from "react";

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import OwlCarousel from "react-owl-carousel";
import { Spinner } from "react-bootstrap";

class DynamicGallery extends React.Component {
  state = {
    loading: true,
    movieArray: [],
    show: false,
    comment: {
      comment: "",
      rate: 3,
      elementId: "",
    },
  };

  componentDidMount() {
    console.log("QUERY IN GALLERY ON MOUNT", this.props.searchQuery);
    this.fetchMovie();
  }

  componentDidUpdate = (previousProps, previousState) => {
    console.log("QUERY RECIEVED BY GALLERY", this.props.searchQuery);

    if (previousProps.searchQuery !== this.props.searchQuery) {
      console.log("QUERY IN GALLERY ON UPDATE", this.props.searchQuery);
      this.setState({ loading: true });
      this.fetchMovie();
    }
  };

  handleSubmit = async (id) => {
    try {
      let fakecomment = { ...this.state.comment };
      fakecomment.elementId = id;
      await this.setState({ comment: fakecomment });
      console.log(this.state.comment);
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/",
        {
          method: "POST",
          body: JSON.stringify(this.state.comment),
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmI2N2UzZjk4MzViMDAwMTc1ODRlZmUiLCJpYXQiOjE2MDU3OTUzOTIsImV4cCI6MTYwNzAwNDk5Mn0.DfmIOMUkFDOn23K1S3KRRfRDXdq3PuQ85LIP5I7piVI",
          },
        }
      );
      if (response.ok) {
        alert("Comment Saved");
        this.setState({
          comment: {
            comment: "",
            rate: 3,
            elementId: "",
          },
        });
      } else {
        console.log("uh oh stinky");
        let error = await response.json();
        console.log(error);
      }
    } catch (e) {
      console.log(e);
    }
  };

  updateCommentField = (e) => {
    let comment = { ...this.state.comment };
    let currentId = e.currentTarget.id;
    comment[currentId] = e.currentTarget.value;
    this.setState({ comment: comment });
  };

  fetchMovie = async () => {
    try {
      let response = await fetch(
        `http://www.omdbapi.com/?apikey=1846c79&s=${this.props.searchQuery}`
      );
      let paresdResponse = await response.json();
      setTimeout(() => {
        this.setState({ movieArray: paresdResponse.Search });
        this.setState({ loading: false });
      }, 1000);
      console.log(this.state.movieArray);
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    if (this.state.movieArray) {
      if (this.state.loading === true) {
        return (
          <div className="d-flex">
            <h3>Loading...</h3>
            <Spinner animation="border" role="status">
              <span className="sr-only">Loading...</span>
            </Spinner>
          </div>
        );
      } else {
        return (
          <>
            <h1 className="align-self-start">
              {this.props.titlePart1 +
                this.state.movieArray.length +
                this.props.titlePart2 +
                this.props.searchQuery}
            </h1>
            {this.state.movieArray.length > 0 && (
              <OwlCarousel margin={10}>
                {this.state.movieArray.map((movie, index) => (
                  <div
                    className="item"
                    key={index}
                    onClick={() =>
                      this.props.history.push("/details/" + movie.imdbID)
                    }
                  >
                    <img src={movie.Poster} alt="" />
                  </div>
                ))}
              </OwlCarousel>
            )}
          </>
        );
      }
    } else {
      return <h1 className="mb-5">No search results found :(</h1>;
    }
  }
}

export default DynamicGallery;
