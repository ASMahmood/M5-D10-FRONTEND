import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AddComment from "./AddComment";
import CommentList from "./CommentList";

class CommentArea extends React.Component {
  state = {
    comments: [],
  };
  componentDidMount = () => {
    this.fetchComments();
    console.log("fetching comments");
  };
  fetchComments = async () => {
    try {
      let response = await fetch(
        `https://m5-d10-backend-asm.herokuapp.com/media/${this.props.match.params.id}/reviews`
      );
      let comments = await response.json();
      this.setState({ comments: comments });
      console.log(this.state.comments);
    } catch (e) {
      console.log(e);
    }
  };
  render() {
    return (
      <Row>
        {this.state.comments && (
          <CommentList
            comments={this.state.comments}
            movieId={this.props.match.params.id}
            onFetch={this.fetchComments}
          />
        )}

        <AddComment
          movieId={this.props.match.params.id}
          onFetch={this.fetchComments}
        />
      </Row>
    );
  }
}

export default CommentArea;
