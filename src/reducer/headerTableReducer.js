const HIDDEN_COLUMNS = 'HIDDEN_COLUMNS';
const SET_SORT = 'SET_SORT';

const initialState = {
    columns: [
        {label: 'id', type: 'id'},
        {label: 'Name',type: 'name'},
        {label: 'Product',type: 'product'},
        {label: 'Company',type: 'company'},
        {label: 'Country',type: 'country'},
        {label: 'Date',type: 'date'},
        {label: 'Price',type: 'price'},
        {label: 'InStock',type: 'inStock'}
    ],
    activeColumns : {
        'id': true, 
        'name': true,
        'product':true,
        'company':true, 
        'country':true,
        'date':true,
        'price':true,
        'inStock':true
    },
    sort: null,
    sortBy: 'default'
};

const headerTableReducer = (state = initialState, action) => {
    switch(action.type) {
        case HIDDEN_COLUMNS: {
            return {
                ...state,
                activeColumns: action.formData
            }
        }
        case SET_SORT: {
            return {
                ...state,
                sort: action.sort,
                sortBy: action.sortBy
            }
        }
        default : 
            return state;
    }
}
export const hiddenColumns = (formData) => ({type: HIDDEN_COLUMNS, formData})
export const setSort = (sort, sortBy) => ({type: SET_SORT, sort, sortBy})



export const setSortByClick = (sort,sortBy) => (dispatch) => {
   dispatch(setSort(sort,sortBy));
}

export default headerTableReducer;