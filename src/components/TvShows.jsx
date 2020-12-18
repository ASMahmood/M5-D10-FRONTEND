import React from "react";
import { Container, Row, Card } from "react-bootstrap";

class TvShows extends React.Component {
  state = {
    seriesArray: [],
  };
  componentDidMount = async () => {
    let response = await fetch(
      `http://www.omdbapi.com/?apikey=1846c79&s=series&type=series`
    );
    let parsedResponse = await response.json();
    this.setState({ seriesArray: parsedResponse.Search });
    console.log(this.state.seriesArray);
  };
  render() {
    return (
      <Container className="px-5 mt-5">
        <Row>
          <h1>TV Shows</h1>
        </Row>
        <Row>
          {this.state.seriesArray &&
            this.state.seriesArray.map((show) => (
              <Card
                className="mx-auto my-3"
                style={{ width: "14rem" }}
                onClick={() =>
                  this.props.history.push("/details/" + show.imdbID)
                }
              >
                <Card.Img
                  variant="top"
                  className="img-fluid"
                  src={show.Poster}
                />
                <Card.Body>
                  <Card.Title>{show.Title}</Card.Title>
                </Card.Body>
              </Card>
            ))}
        </Row>
      </Container>
    );
  }
}

export default TvShows;
