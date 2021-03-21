import React from 'react';
import Progressbar from '../ProgressBar/Progressbar';

function StatsWidget(props: any) {
    return (
        <div className="StatsWidget-wrapper">
            <h3>Stats</h3>
            <Progressbar title={props?.data?.ATTRIBUTE_1?.label} completed={props?.data?.ATTRIBUTE_1?.value} />
            <Progressbar title={props?.data?.ATTRIBUTE_2?.label} completed={props?.data?.ATTRIBUTE_2?.value} />
            <Progressbar title={props?.data?.ATTRIBUTE_3?.label} completed={props?.data?.ATTRIBUTE_3?.value} />
            <div className="StatsWidget-viewURL">
            <a href={props.apiURL} target="_blank" rel="noreferrer"><span>View API</span><span className="fa fa-arrow-right fa-lg"></span></a>
        </div>

        </div>
    );
}

export default StatsWidget;