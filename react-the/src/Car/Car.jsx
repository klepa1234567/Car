import React from 'react'

function Car(props) {
    return(
        <button
            style = {{
            border: '1px solid #ccc',
            marginBottom: '10px',
            display: 'block',
            padding: '10px'
        }}>
            <h2>Car name:{props.name}</h2>
            <p>Year:<strong>{props.year}</strong></p>
            <input type='text' onChange={props.onChangeName} value={props.name}/>
            <button onClick={props.onDelete}>Delete</button>
        </button>

    )
};

export default Car