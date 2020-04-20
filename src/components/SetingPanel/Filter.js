import React from 'react';
import {Field, reduxForm} from "redux-form";

function Filter ({activeColumns, columns, handleSubmit}) {
    return(
        <form onSubmit={handleSubmit}>
                <div>
                    {columns.map((el,indx)=>  (
                        <React.Fragment>
                            <Field key={indx} component={"input"} name={el.type} type="checkbox"/> 
                            {el.label}
                        </React.Fragment>                          
                    ))} 
                                    
                </div>
                <div>
                    <button>Refresh</button>
                </div>
        </form>
    )
}

export default reduxForm({form: 'select-active-columns', enableReinitialize: true})(Filter) 