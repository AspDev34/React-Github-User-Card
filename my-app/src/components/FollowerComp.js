import React from 'react';
import axios from 'axios';
import FollowerCard from './FollowerCard';

class FollowerComp extends React.Component {
    state = {
        followers: [],
      };
    
      componentDidMount(){
        axios.get("https://api.github.com/users/AspDev34/followers")
        .then(response => {
          console.log("USER FOLLOWER DATA", response.data)
          this.setState({
            followers: response.data
          })  
        })
          .catch(error => {
            console.log("An error has occurred", error);
          })
      };
    
render() {

return (

        <div>
    
            {this.state.followers.map(person => (
                <FollowerCard key={person.id} followers={person}/>
            ))}

        </div>


);

}


}

export default FollowerComp;