import React, { Component } from "react";
import socketIOClient from "socket.io-client";
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
                    callArray.push(fetch(`${apiURL}${request.uri}`, { mode: 'cors' }).then((res) => res.json()));
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
            });


            const socket = socketIOClient("wss://13.232.99.42", {path: "/js/socket.io.min.js", transports: ['polling']});

            socket.on("ALL", (data: any) => this.setResponse(data));
        }

        /**Since WSS is not connecting as expected data retrieval from Web socket is still pending. */
        setResponse(data: any) {
            console.log(data);
        }

        handleData(data: any) {
            let result = JSON.parse(data); console.log(result)
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