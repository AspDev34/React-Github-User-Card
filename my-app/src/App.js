import React from 'react';
import axios from 'axios';

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
          <UserComp />
        </header>
        <section>
          <FollowerComp />
        </section>

      </div>
    );
  }
}

export default App;
