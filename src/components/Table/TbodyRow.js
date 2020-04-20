import React from 'react';
import BooleanField from './BooleanField';

function TbodyRow ({data, activeColumns}) {
    return(
        <tr>
            {
                Object.keys(data).map((el)=> (
                    activeColumns[el] ?
                    <td key={el}>
                        { 
                        el !=='date' ? 
                            el === 'inStock' ? <BooleanField  value={data[el]}/> : data[el]
                            : data[el].toLocaleDateString()
                        }
                    </td>   
                    : null             
                ))
            }
        </tr>
    )
}

export default TbodyRow;