import React from "react";

// using destructuring to just add the prop titles directly
const Card = ({id, name, username, email}) => {
    return(
        <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <img alt ="robot" src={`https://robohash.org/${id}?200x200`} />
            <React.Fragment>
                <h2>{name}</h2>
                <p>{username}</p>
                <p>{email}</p>
            </React.Fragment>            
        </div>
    );
}
export default Card;