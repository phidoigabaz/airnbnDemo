import * as types from './Types';

export const categoryAction = () => {
    return {
        type: types.CATEGORY_ACTION,
    };
};

export const categorySuccess = response => {
    return {
        type: types.CATEGORY_SUCCESS,
        response
    };
};

export const categoryFail = () => {
    return{
        type: types.REQUEST_API_INVALID_INPUT,
    };
};