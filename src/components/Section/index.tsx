import React, { useState, useEffect } from 'react';
import StatsWidget from '../Widgets/StatsWidget';
import ChartWidget from '../Widgets/ChartWidget';
import '../Widgets/Widget.scss';
import {sortOrder} from "./index.config";

function Section(props: any) {
    const { data } = props.data;
    const [sortData, setSortData] = useState(data);
    const [isExpanded, setExpand] = useState(false);

    useEffect(() => {
        sortTable("label");
    }, [])

    const sortTable = (key: any) => {
        let sortItems = sortData?.dataSet.data;
        if(key === "value") {
            sortItems.sort((a: any, b: any) => {
                const A = a[key];
                const B = b[key];
                return A - B;
            });
        } else {
            sortItems.sort((a: any, b: any) => {
                const A = a[key];
                const B = b[key];
                return sortData?.dataSet.header[0] === "Country" ? A.localeCompare(B.localeCompare) :
                sortOrder[sortData?.dataSet.header[0]].indexOf(A) > sortOrder[sortData?.dataSet.header[0]].indexOf(B) ? 1 : -1;
            });
        }
        setSortData({
            ...sortData,
            dataSet: {
                ...sortData?.dataSet,
                data: sortItems
            }
        })
    };

    const expandWidget = (title: string) => {
        setExpand(!isExpanded);
        props.handleExpandSection(title, !isExpanded)
    }

    return (
        <div className={isExpanded ? "Widget-wrapper max" : "Widget-wrapper"}>
            <header>
                <h3>{props?.title}</h3>
                <select name="sort-option" onChange={(e) => sortTable(e.target.value)} defaultValue="Sort by Label" className="Widget-sort">
                    <option value="label">Sort by Label</option>
                    <option value="value">Sort by Value</option>
                </select>

                <div onClick={() => expandWidget(props?.title)}>
                    <i className={isExpanded ? "fa fa-minus" : "fa fa-arrows-alt"}></i>
                </div>
            </header>
            <div className="Widget-menu">
                <StatsWidget data={sortData?.stats} apiURL={sortData.url} />
                <ChartWidget data={sortData} />
            </div>
        </div>
    );
}

export default Section;