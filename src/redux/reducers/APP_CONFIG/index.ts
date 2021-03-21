import overview_CONFIG from "../../../components/pages/Overview/index.config";

export const initialState: any = {
  ACTIVE: {
    ROUTE: overview_CONFIG.pathname,
    EXPANDED_PAGE: {}
  }
};

interface IAppConfigActive {
  ROUTE: string;
  EXPANDED_PAGE: any
}

export interface IAppConfigReducer {
  ACTIVE: IAppConfigActive;
}

export enum APP_CONFIG_ACTION_TYPE {
  CHANGE_ACTIVE_ROUTE = "CHANGE_ACTIVE_ROUTE"
}

const APP_CONFIG_REDUCER = (
  state: IAppConfigReducer = initialState,
  action: any
): IAppConfigReducer => {
  switch (action.type) {
    case APP_CONFIG_ACTION_TYPE.CHANGE_ACTIVE_ROUTE: {
      return { ...state, ...action.payload };
    }

    default:
      return state;
  }
};

export default APP_CONFIG_REDUCER;