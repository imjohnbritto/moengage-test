import React, { Component } from "react";
import { IServices } from "../../components/pages/Overview/index.types";

const apiURL = "http://13.232.99.42";

const withAppDataContainerHOC = ({ services }: any) => (WrappedComponent: any) => {

    class withAppDataContainerHOC extends Component<any, {}> {

        state = {
            data: []
        }
        result: any = []

        componentDidMount() {
            let callArray: any = []
            if (Array.isArray(services)) {
                services.map((request: IServices) => {
                    callArray.push(fetch(`${apiURL}${request.uri}`).then((res) => res.json()));
                })
            }

            Promise.all(callArray).then((dataResponse) => {
                dataResponse.forEach((response: any, index: number) => {
                    this.result.push({
                        data: response,
                        requestID: services[index].requestID
                    });
                    this.setState({data: this.result})
                })
            })
        }

        render() {
            return (
                <WrappedComponent {...this.state} />
            )
        }
    }

    return withAppDataContainerHOC;
};

export default withAppDataContainerHOC as any;