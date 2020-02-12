import React from 'react';


const UserComp = props => {

    return (
        
        <div>

            <img src={props.user.avatar_url}/>
            <p>{props.user.name}</p>
            <p>{props.user.bio}</p>
            <span>{props.user.followers}</span>
            <span>{props.user.following}</span>


        </div>
      

    )
}

export default UserComp;