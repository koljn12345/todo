import React from 'react';
import Filter from './Filter';
import Search from './Search';
import { connect } from 'react-redux'
import { hiddenColumns } from './../../reducer/headerTableReducer';
import { refreshData} from '../../reducer/listReducer';
import { setChangeInput, selectFieldForFilter } from '../../reducer/setingReducer';

function SetingPanel(props) {

    const handleChangeSearch = (e) => {
         props.setChangeInput(e.currentTarget.value);
    }

    return (
        <div className="setingPanel">
            <Filter initialValues={props.activeColumns} columns={props.columns} onSubmit={props.hiddenColumns} />
            <Search handleChangeSearch={handleChangeSearch}
                searchInputValue={props.searchInputValue}
                columns={props.columns}
                searchActiveFilter={props.searchActiveFilter}
                selectFieldForFilter= {props.selectFieldForFilter}
            />
            <button onClick={() => { props.refreshData(1000) }}>refreshData</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return ({
        columns: state.headerTable.columns,
        activeColumns: state.headerTable.activeColumns,
        searchInputValue: state.seting.searchInputValue,
        searchActiveFilter: state.seting.searchActiveFilter
    })
}

const mapDispatchToProps = (dispatch) => {
    return {
        hiddenColumns: (formData) => {
            dispatch(hiddenColumns(formData));
        },
        refreshData: (number) => {
            dispatch(refreshData(number));
        },
        setChangeInput: (value) => {
            dispatch(setChangeInput(value));
        },
        selectFieldForFilter: (formData) => {
            dispatch(selectFieldForFilter(formData));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SetingPanel)