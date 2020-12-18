import React from "react";
import { Row, Col, Badge } from "react-bootstrap";
import "./ShowDetails.css";

class ShowDetails extends React.Component {
  state = {
    movie: {},
  };

  componentDidMount = async () => {
    try {
      let response = await fetch(
        `http://www.omdbapi.com/?apikey=1846c79&i=${this.props.match.params.id}`
      );
      let parsedResponse = await response.json();
      console.log(parsedResponse);
      this.setState({ movie: parsedResponse });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <>
        <Row className="my-5">
          <Col md={4} className="poster text-center">
            <img src={this.state.movie.Poster} alt="movie poster" />
          </Col>
          <Col md={8}>
            <Row>
              <Col className="d-flex align-items-center">
                <h1 className="mb-0">{this.state.movie.Title}</h1>
                <Badge
                  variant="info"
                  className="metascore mx-2 d-flex align-items-center"
                >
                  {this.state.movie.Metascore}/100
                </Badge>
                <Badge variant="secondary" className="rating ">
                  {this.state.movie.Rated}
                </Badge>
              </Col>
            </Row>
            <Row>
              <Col className="d-flex align-items-center mb-3">
                <span className="text-muted">
                  {this.state.movie.Type} •{" "}
                  {this.state.movie.totalSeasons
                    ? this.state.movie.totalSeasons + " Seasons"
                    : this.state.movie.Runtime}{" "}
                  • {this.state.movie.Released} • {this.state.movie.Genre}
                </span>
              </Col>
            </Row>
            <Row>
              <Col>
                <p>{this.state.movie.Plot}</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p className="mb-0">Directed by: {this.state.movie.Director}</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p className="mb-0">Cast: {this.state.movie.Actors}</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p className="mb-5">
                  Produced by: {this.state.movie.Production}
                </p>
              </Col>
            </Row>
            <Row>
              {this.state.movie.Ratings &&
                this.state.movie.Ratings.map((award) => (
                  <Col className="d-flex flex-column align-items-center">
                    <Badge className="award mb-1 d-flex justify-content-center align-items-center">
                      {award.Value}
                    </Badge>
                    <span className="awardText">{award.Source}</span>
                  </Col>
                ))}
            </Row>
          </Col>
        </Row>
      </>
    );
  }
}

export default ShowDetails;
