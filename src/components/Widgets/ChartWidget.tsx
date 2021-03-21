import React from 'react';
function ChartWidget(props: any) {
    return (
        <div className="ChartWidget-wrapper">
            <div className="ChartWidget-header">
                <p className="ChartWidget-header-title blue">{props?.data?.filter?.label} </p>
                <p className="ChartWidget-header-title green">{props?.data?.filter?.value}%</p>
            </div>
            <div className="ChartWidget-table">
                <table>

                    <thead>
                        <tr>
                            {props?.data?.dataSet.header.map((item: any ,index: number)=> {
                                return (<th key={"header"+item}> {item}</th>)
                            })}

                        </tr>
                    </thead>
                    <tbody>

                        {props?.data?.dataSet.data.map((item: any) => {
                            return (<tr style={{ color: item.color }} key={"tbody"+item.label}><td> {item.label}</td><td > {item.value}</td></tr>)
                        })}
                    </tbody>

                </table>
            </div>


        </div>
    );
}

export default ChartWidget;