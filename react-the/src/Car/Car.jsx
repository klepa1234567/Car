import React from 'react'

function Car(props) {
    return(
        <div>
            <h2>Car name:{props.name}</h2>
            <p>Year:<strong>{props.year}</strong></p>

        </div>

    )
};

export default Car