import React from "react";
import { Form, Col, Container, Row, Button, ListGroup } from "react-bootstrap";

class Registration extends React.Component {
  state = {
    form: {
      name: "",
      surname: "",
      email: "",
      password: "",
      dob: 2000,
      address: "",
      city: "",
      postcode: "",
    },
  };
  updateRegisterField = (e) => {
    let form = { ...this.state.form };
    let currentId = e.currentTarget.id;
    form[currentId] = e.currentTarget.value;
    this.setState({ form: form });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted", this.state.form);
    document.querySelector("#registerForm").classList.add("d-none");
    document.querySelector("#presentedInfo").classList.remove("d-none");
    if (this.state.form.name.toLowerCase().includes("stefano")) {
      const audio = document.getElementById("audio");
      audio.play();
    }
    if (this.state.form.address.toLowerCase().includes("virginia")) {
      const audio = document.getElementById("audio2");
      audio.play();
    }
  };
  goBackToForm = (e) => {
    e.preventDefault();
    document.querySelector("#registerForm").classList.remove("d-none");
    document.querySelector("#presentedInfo").classList.add("d-none");
  };
  render() {
    return (
      <Container>
        <audio hidden id="audio" controls>
          <source src={"/yeet.mp3"} type="audio/mp3"></source>
        </audio>
        <audio hidden id="audio2" controls>
          <source src={"/stepbro.mp3"} type="audio/mp3"></source>
        </audio>
        <Row>
          <h1 className="my-3">Registration Form:</h1>
        </Row>
        <Form id="registerForm" onSubmit={this.handleSubmit}>
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label htmlFor="name">Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                id="name"
                placeholder="Stefano"
                minLength={2}
                required
                value={this.state.form.name}
                onChange={this.updateRegisterField}
              />
              <Form.Text muted>
                Your name must be longer than 1 character.
              </Form.Text>
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label htmlFor="surname">Surname</Form.Label>
              <Form.Control
                type="text"
                name="surname"
                id="surname"
                placeholder="the Sexy"
                minLength={3}
                required
                value={this.state.form.surname}
                onChange={this.updateRegisterField}
              />
              <Form.Text muted>
                Your surname must be longer than 2 characters.
              </Form.Text>
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label htmlFor="dob">Year of Birth</Form.Label>
              <Form.Control
                type="number"
                name="dob"
                id="dob"
                placeholder="6969"
                min="1910"
                max="2077"
                required
                value={this.state.form.dob}
                onChange={this.updateRegisterField}
              />
              <Form.Text muted>
                Your must be born before 1910. We hate centenarians.
              </Form.Text>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label htmlFor="email">Email Address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                id="email"
                placeholder="xXx360n0sc0p3xXx@aol.com"
                required
                value={this.state.form.email}
                onChange={this.updateRegisterField}
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label htmlFor="password">Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                id="password"
                placeholder="( ͡° ͜ʖ ͡°)"
                minLength={8}
                required
                value={this.state.form.password}
                onChange={this.updateRegisterField}
              />
              <Form.Text muted>
                Your password must contain at least 8 characters.
              </Form.Text>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label htmlFor="address">Street Address</Form.Label>
              <Form.Control
                type="text"
                name="address"
                id="address"
                placeholder="Dark Side of the Moon"
                required
                value={this.state.form.address}
                onChange={this.updateRegisterField}
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label htmlFor="city">City</Form.Label>
              <Form.Control
                type="text"
                name="city"
                id="city"
                placeholder="Boner Town"
                required
                value={this.state.form.city}
                onChange={this.updateRegisterField}
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label htmlFor="postcode">Postal Code</Form.Label>
              <Form.Control
                type="number"
                name="postcode"
                id="postcode"
                placeholder="80085"
                minLength={5}
                maxLength={5}
                required
                value={this.state.form.postcode}
                onChange={this.updateRegisterField}
              />
              <Form.Text muted>Your postal code should be 5 numbers.</Form.Text>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col}>
              <Button
                id="submitRegister"
                variant="danger"
                type="submit"
                className="w-100"
                disabled
              >
                {this.state.form.name.toLowerCase().includes("stefano")
                  ? "SUBMIT TO THE SEXY"
                  : "SUBMIT"}
              </Button>

              {this.state.form.name.length > 1 &&
                this.state.form.surname.length > 2 &&
                this.state.form.email.includes("@") &&
                this.state.form.password.length > 8 &&
                this.state.form.dob > 1910 &&
                this.state.form.address.value !== "" &&
                this.state.form.city.value !== "" &&
                this.state.form.postcode.length === 5 &&
                (document.querySelector("#submitRegister").disabled = false)}
            </Form.Group>
          </Form.Row>
        </Form>
        <Container id="presentedInfo" className="d-none">
          <Row>
            <ListGroup className="w-100 mb-5">
              <ListGroup.Item variant="dark">
                Name: {this.state.form.name}
              </ListGroup.Item>
              <ListGroup.Item variant="danger">
                Surname: {this.state.form.surname}
              </ListGroup.Item>
              <ListGroup.Item variant="dark">
                Email: {this.state.form.email}
              </ListGroup.Item>
              <ListGroup.Item variant="danger">
                password: {this.state.form.password}
              </ListGroup.Item>
              <ListGroup.Item variant="dark">
                Year of Birth: {this.state.form.dob}
              </ListGroup.Item>
              <ListGroup.Item variant="danger">
                Address: {this.state.form.address}, {this.state.form.city},{" "}
                {this.state.form.postcode}
              </ListGroup.Item>
            </ListGroup>
          </Row>
          <Row>
            <Col>
              <Button
                className="w-100"
                variant="danger"
                onClick={(e) => this.goBackToForm(e)}
              >
                {this.state.form.name.toLowerCase().includes("stefano")
                  ? "Would you like to make changes, Stefano?"
                  : "Would you like to make changes?"}
              </Button>
            </Col>
          </Row>
        </Container>
      </Container>
    );
  }
}

export default Registration;
