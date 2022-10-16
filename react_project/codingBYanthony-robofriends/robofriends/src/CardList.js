// CardList to be drawn from parent Card to render the card list without using hard coding values to keep DRY formula
import React from "react";
import Card from "./Card";

const CardList = ({robots}) => {
  return (
    <div>
      {robots.map((user, i) => {
        return(
          <Card
            key={i}
            id={robots[i].id}
            name ={robots[i].name}
            username={robots[i].username}
            email={robots[i].email}
            />
        );
      })            
  }
    </div>
  );  
}

export default CardList;