import * as types from "../Action/Types";

const INITIAL = {
    success: null,
    error: null,
    loading: false,
    data: [],
  };

export default (state = INITIAL, action) => {
    switch (action.type) {
      case types.CATEGORY_ACTION:
        return {
          loading: true
        };
      case types.CATEGORY_SUCCESS:
        let data = action.response.data;
        return {
          success: data,
          error: null,
          loading: false,
          data: [data],
        };
      case types.REQUEST_API_FAIL:
        let error = action.response.errors.message;
        return {
          ...state,
          loading: false,
          error: error,
          data: null,
        };
      case types.REQUEST_API_INVALID_INPUT:
      let error = action.response.error.message;
        return {
          ...state,
          error: error,
          success: null,
        };
      default:
        return state;
    }
  };
  