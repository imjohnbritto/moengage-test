import React, { useEffect, useState } from "react";
import { IOverviewProps } from "./index.types";
import { servicesArr } from "./index.config";
import withAppDataContainerHOC from "../../../containers/withAppDataContainerHOC";
import Section from "../../Section";

const Overview: React.FunctionComponent<IOverviewProps> = ({ data }) => {

    const [currentData, setCurrentData] = useState([]);
    const [isExpanded, setExpand] = useState(false);

    useEffect(() => {
        if (servicesArr.length !== currentData.length && !isExpanded) {
            setCurrentData(data);
        }
    });

    const setExpandSection = (title: string, expand: boolean) => {
        if(expand) {
            const expandSection = currentData.filter((sectionData: any) => {
                return sectionData.requestID === title
            })
            setCurrentData(expandSection);
        } else {
            setCurrentData(data);
        }

        setExpand(expand)
    }

    return (
        <>
           {currentData.map((sectionData: any) => {
               return <Section 
                            key={sectionData.requestID} 
                            title={sectionData.requestID} 
                            data={sectionData.data} 
                            handleExpandSection={setExpandSection}
                        />
           })} 
        </>
    )
};

export default withAppDataContainerHOC({ services: servicesArr })(Overview);