import React from "react";
import { IServices } from "./index.types";

const Overview = React.lazy(() => import("./index"));

const overview_CONFIG = {
    pathname: "/",
    component: <Overview data={""}/>,
};

export const servicesArr: IServices[] = [
    {
        uri: '/get_highlight',
        requestID: 'Highlights'
    },
    {
        uri: '/get_buyer',
        requestID: 'Buyers'
    },
    {
        uri: '/get_country',
        requestID: 'Countries'
    },
    {
        uri: '/get_income',
        requestID: 'Income'
    }
]

export default overview_CONFIG;