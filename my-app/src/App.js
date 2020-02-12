import React from 'react';
import axios from 'axios';
import UserComp from './components/UserComp';
import FollowerComp from './components/FollowerComp';

class App extends React.Component {
  state = {
    user: [],
  };

  componentDidMount(){
    axios.get("https://api.github.com/users/AspDev34")
    .then(response => {
      console.log("USER API DATA", response.data)
      this.setState({
        user: response.data
      })  
    })
      .catch(error => {
        console.log("An error has occurred", error);
      })
  };

  render(){

    return(
      <div className="App">
        <header>
          <UserComp user={this.state.user}/>
        </header>
        <section className="followers">
          <FollowerComp />
        </section>

      </div>
    );
  }
}

export default App;
