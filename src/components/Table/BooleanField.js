import React from 'react';


function BooleanField ({value}) {
    return(
        value ? <span className="field--true"></span> :
        <span className="field--false">&#10006;</span>
    )
}

export default BooleanField;