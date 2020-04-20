import React from 'react';
import { connect } from "react-redux";
import Thead from './Thead';
import Tbody from './Tbody';
import { dataAPI } from './../../api/api'
import { setInitialData, updateSortData, toggleIsUpdateData, updateSearchData, resetInitialData } from './../../reducer/listReducer'
import { setSort } from './../../reducer/headerTableReducer'
import { sortList, searchFunction } from '../../util/helper';
import './Table.css';

class Table extends React.Component {
    componentDidMount() {
        dataAPI.getData().then((data)=>{
            this.props.setInitialData(data);
        })
        
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.searchInputValue !== prevProps.searchInputValue) {
            const arrayType = Object.keys(this.props.searchActiveFilter).filter((el) => this.props.searchActiveFilter[el]);
            let newList;
            if(this.props.searchInputValue.length < prevProps.searchInputValue.length) {                
                const NoSortNewList= searchFunction(this.props.initialData.data, this.props.searchInputValue, arrayType);
                newList=sortList(NoSortNewList, this.props.sort, this.props.sortBy);
            }
            else newList= searchFunction(this.props.data.data, this.props.searchInputValue, arrayType);
            this.props.updateSearchData(newList);
        }
    }

    handleClickSort = (type) => {
        let sortBy;
        if (this.props.sortBy === 'default' || this.props.sortBy === 'desc' || type !== this.props.sort)
            sortBy = 'asc';
        else sortBy = 'desc';
        this.props.setSort(type, sortBy);
        this.props.toggleIsUpdateData();
        const newList = sortList(this.props.data.data, type, sortBy);
        this.props.updateSortData(newList);
    }


    render() {
        const data =  this.props.data;
        return (
            this.props.isInit ?
                <table>
                    {Object.keys(this.props.activeColumns).length ?
                        <React.Fragment>
                            <Thead columns={this.props.columns} activeColumns={this.props.activeColumns}
                                handleClickSort={this.handleClickSort} 
                                sortBy={this.props.sortBy} sort={this.props.sort} />
                            <Tbody data={data} activeColumns={this.props.activeColumns} />
                        </React.Fragment>
                        : null}
                </table>
                : <div>Loading</div>
        );
    }
}

const mapStateToProps = (state) => {
    return ({
        columns: state.headerTable.columns,
        activeColumns: state.headerTable.activeColumns,
        data: state.list.data,
        isInit: state.list.isInit,
        sort: state.headerTable.sort,
        sortBy: state.headerTable.sortBy,
        searchInputValue: state.seting.searchInputValue,
        searchData: state.list.searchData,
        isSearchResult: state.list.isSearchResult,
        searchActiveFilter: state.seting.searchActiveFilter,
        initialData: state.list.initialData
    })
}

const mapDispatchToProps = (dispatch) => {
    return {
        setInitialData: (data) => {
            dispatch(setInitialData(data));
        },
        setSort: (sort, sortBy) => {
            dispatch(setSort(sort, sortBy))
        },
        updateSortData: (data) => {
            dispatch(updateSortData(data))
        },
        toggleIsUpdateData: () => {
            dispatch(toggleIsUpdateData())
        },
        updateSearchData: (data) => {
            dispatch(updateSearchData(data))
        },        
        resetInitialData: () => {
            dispatch(resetInitialData());
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Table);