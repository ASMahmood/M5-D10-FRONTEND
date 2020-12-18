import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import "./App.css";

import { BrowserRouter, Route } from "react-router-dom";

import DynamicGallery from "./components/DynamicGallery";
import NavBar from "./components/NavBar";
import CommentArea from "./components/CommentArea";
import Footer from "./components/Footer";
import FixedGallery from "./components/FixedGallery";
import ShowDetails from "./components/ShowDetails";
import TvShows from "./components/TvShows";
import Registration from "./components/Registration";

class App extends React.Component {
  state = {
    query: "marvel",
    loading: true,
    selected: {},
  };
  onSearch = (searchQuery) => {
    this.setState({ query: searchQuery });
    console.log("QUERY IN APP.JS", this.state.query);
  };

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar onSearch={this.onSearch} />

          <Route
            path="/"
            exact
            render={(props) => (
              <Container fluid className="px-5 mt-5">
                <DynamicGallery
                  onSelect={this.onSelect}
                  searchQuery={this.state.query}
                  titlePart1="First "
                  titlePart2=" results for: "
                  {...props}
                />
                <FixedGallery
                  loadingstate={this.state.loading}
                  searchQuery="harry potter"
                  title="Search for: "
                  {...props}
                />
              </Container>
            )}
          />

          <Route
            path="/details/:id"
            render={(props) => (
              <Container className="px-5 mt-5">
                <ShowDetails {...props} />
                <CommentArea {...props} />
              </Container>
            )}
          />

          <Route
            path="/tvshows"
            exact
            render={(props) => (
              <TvShows searchQuery={this.state.query} {...props} />
            )}
          />

          <Route path="/register" exact component={Registration} />

          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
