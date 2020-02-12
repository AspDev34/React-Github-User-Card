import React from 'react';


const FollowerCard = props => {

    return (
        
        <div>

            <img src={props.followers.avatar_url}/>
            <p>{props.followers.name}</p>
            <p>{props.followers.bio}</p>


        </div>
      

    )
}

export default FollowerCard;