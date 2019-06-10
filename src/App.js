import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron";
import Container from "./components/Container";
import FriendCard from "./components/FriendCard";
import friends from "./friends.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends
  };


  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
      <Nav />
      <Jumbotron />
      <Container>
        {this.state.friends.map(friend => (
          <FriendCard
            id={friend.id}
            key={friend.id}
            image={friend.image}
          />
        ))}
         </Container>
      </Wrapper>
    );
  }
}

export default App;