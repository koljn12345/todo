import { dataAPI } from "../api/api";

const SET_INITIAL_DATA= 'SET_INITIAL_DATA';
const SET_UPDATE_DATA='SET_UPDATE_DATA';
const TOOGLE_IS_UPDATE_DATA= 'TOOGLE_IS_UPDATE_DATA';
const SET_RESULT_SEARCH_DATA= 'SET_RESULT_SEARCH_DATA';
const RESET_INITIAL_DATA= 'RESET_INITIAL_DATA';

const initialState = {
    isInit: false,
    searchData: {},
    isSearchResult: false,
};

const listReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_INITIAL_DATA: {
            return {
                ...state,
                data: action.data,
                initialData: action.data,
                isInit: true
            }
        }
        case SET_UPDATE_DATA: {
            return {
                ...state,
                data: {
                    data: action.data
                },
                isInit: true
            }
        }
        case TOOGLE_IS_UPDATE_DATA: {
            return {
                ...state,
                isInit: false
            }
        }
        case SET_RESULT_SEARCH_DATA: {
            return {
                ...state,
                data: {
                    data: action.data
                },
                isSearchResult: true
            }
        }
        case RESET_INITIAL_DATA: {
            return {
                ...state,
                data: state.initialData
            }
        }
        default: 
                return state
    }
}

export const setInitialData = (data) => ({type: SET_INITIAL_DATA, data});
export const updateSortData = (data) => ({type: SET_UPDATE_DATA, data});
export const toggleIsUpdateData = () => ({type: TOOGLE_IS_UPDATE_DATA});
export const resetInitialData = () => ({type: RESET_INITIAL_DATA});
export const updateSearchData = (data) =>({type: SET_RESULT_SEARCH_DATA, data})

export const refreshData = (number) => (dispatch) => {
    dispatch((toggleIsUpdateData()));
    dataAPI.getNumberData(number)
    .then((data)=> dispatch(setInitialData(data)));
}

export default listReducer;