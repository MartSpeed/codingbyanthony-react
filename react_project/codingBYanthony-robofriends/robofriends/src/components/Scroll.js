import React from 'react';

// learned props
// learned state
// children: scroll can use children as a way to render the children
// children: an element or component inisde a parent element of component

const Scroll = (props) => {
    // return props.children
    return (
        <div style={{overflowY: 'scroll', border:'1px solid black', height:'500px'}}>
            {props.children}
        </div>
    );
};

export default Scroll;