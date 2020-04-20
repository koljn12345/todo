
const SET_CHANGE_IN_SEARCH= 'SET_CHANGE_IN_SEARCH';
const SET_FIELD_FOR_FILTER= 'SET_FIELD_FOR_FILTER';

const initialState = {
    searchInputValue : '',
    searchActiveFilter : {
        'id': false, 
        'name': true,
        'product':true,
        'company':false, 
        'country':false,
        'date':false,
        'price':false,
        'inStock':false
    },
};

const setingReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_CHANGE_IN_SEARCH: {
            return {
                ...state,
                searchInputValue: action.value
            }
        }
        case SET_FIELD_FOR_FILTER: {
            return {
                ...state,
                searchActiveFilter: action.value
            }
        }
        default: 
                return state
    }
}

export const setChangeInput = (value) => ({type: SET_CHANGE_IN_SEARCH, value});
export const selectFieldForFilter = (value) => ({type: SET_FIELD_FOR_FILTER, value});



export default setingReducer;