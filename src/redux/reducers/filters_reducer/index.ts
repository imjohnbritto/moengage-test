import { IFiltersReducer } from "./index.types";

export enum FILTERS_ACTION {
    CHANGE_FILTERS = "CHANGE_FILTERS",
    CHANGE_PAGE_FILTERS = "CHANGE_PAGE_FILTERS",
    CLEAR_PAGE_FILTERS = "CLEAR_PAGE_FILTERS",
    FETCH_CURRENCY_RATE_REQUESTED = "FETCH_CURRENCY_RATE_REQUESTED",
    FETCH_CURRENCY_RATE_SUCCESS = "FETCH_CURRENCY_RATE_SUCCESS"
  }

export const initialState: IFiltersReducer = {
  activeExpandedPage: {},
  activeSortBy: [],
};

const filtersReducer = (state: IFiltersReducer = initialState, action: any): IFiltersReducer => {
  switch (action.type) {
    case FILTERS_ACTION.CHANGE_FILTERS: {
      return { ...state, ...action.payload };
    }

    case FILTERS_ACTION.CHANGE_PAGE_FILTERS: {
      return { ...state };
    }

    case FILTERS_ACTION.CLEAR_PAGE_FILTERS: {

      return {
        ...state
      };
    }

    default:
      return state;
  }
};

export default filtersReducer;
