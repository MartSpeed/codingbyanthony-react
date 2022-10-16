// CardList to be drawn from parent Card to render the card list without using hard coding values to keep DRY formula
import React from "react";
import Card from "./Card";

const CardList = ({robots}) => {
  const cardsArray = robots.map((user, i) => {
    return <Card id={robots[i].id} name ={robots[i].name} username={robots[i].username} email={robots[i].email}/>
  })
    return(
        <div>
          {cardsArray}
        </div>
    );
}

export default CardList;