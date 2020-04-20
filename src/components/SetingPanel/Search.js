import React from 'react';
import SearchFilter from './SearchFilter';

function Search (props) {
    return(
        <div>
            <input onChange={(e)=>props.handleChangeSearch(e)} value={props.searchInputValue}></input>
            <SearchFilter initialValues={props.searchActiveFilter} columns={props.columns}  onSubmit={props.selectFieldForFilter} />
        </div>
    )
}

export default Search;