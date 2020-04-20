import React from 'react';

function Thead({ columns, activeColumns, handleClickSort, sort, sortBy }) {
    const classN = sortBy === 'asc' ? 'sortByAsc' : sortBy === 'desc' ? 'sortByDesc' : '';
    return (
        <thead>
            <tr>
                {columns.map((el, indx) => (
                    activeColumns[el.type] ?
                        <th onClick={(e) => handleClickSort(el.type)}
                            key={el.type}
                            className={el.type === sort ? classN : ''}>
                                {el.label}
                        </th> : null
                ))}
            </tr>
        </thead>
    )
}

export default Thead;