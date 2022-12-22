import React from "react";

function VisitorsBarSection(props) {
    return (
        <div className="col-md-6 col-lg-12 grid-margin stretch-card">
            <div className="card card-rounded">
                <div className="card-body">
                    <div className="row">
                    <div className="col-sm-12">
                        <div className="d-flex justify-content-between align-items-center mb-2 mb-sm-0">
                        <div className="circle-progress-width">
                            <div id="totalVisitorsDark" className="progressbar-js-circle pr-2"><svg viewBox="0 0 100 100" style={{"display": "block", "width": "60%"}}><path d="M 50,50 m 0,-42.5 a 42.5,42.5 0 1 1 0,85 a 42.5,42.5 0 1 1 0,-85" stroke="#4A4C55" strokeWidth="15" fillOpacity="0"></path><path d="M 50,50 m 0,-42.5 a 42.5,42.5 0 1 1 0,85 a 42.5,42.5 0 1 1 0,-85" stroke="rgb(58,97,246)" strokeWidth="15" fillOpacity="0" style={{"strokeDasharray": "267.132, 267.132", "strokeDashoffset": "96.1674"}}></path></svg><div className="progressbar-text" style={{"position": "absolute", "left": "50%", "top": "50%", "padding": "0px", "margin": "0px", "transform": "translate(-50%, -50%)", "color": "rgb(74, 76, 85)", "fontSize": "0rem"}}>64</div></div>
                        </div>
                        <div>
                            <p className="text-small mb-2">Total Visitors</p>
                            <h4 className="mb-0 fw-bold circle-progress-color">{props.data['total_visitors']}</h4>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VisitorsBarSection;