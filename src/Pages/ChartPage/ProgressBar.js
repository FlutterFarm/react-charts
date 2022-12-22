import React from "react";

function ProgressBarSection (props) {
    console.log(props);
    let blogs = props.data;
    for(let i=0; i<blogs.length;i++){
//        document.getElementById("progressBarData").innerHTML += '<h4 className="small">' + blogs[i]['title'] + '<span className="float-end fw-bold">' + blogs[i]['percentage'] + '</span></h4><div className="progress mb-4"><div className="' + blogs[i]['color'] + '" role="progressbar" style="width: ' + blogs[i]['percentage'] + '%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div></div>';
    }    
    return(
        <div className="card card-header-actions">
            <div className="card-header">
                Progress Tracker
            </div>
            <div className="card-body">
                <h4 className="small">
                    Server Migration
                    <span className="float-end fw-bold">20%</span>
                </h4>
                <div className="progress mb-4"><div className="progress-bar bg-danger" role="progressbar" style={{"width": "20%"}} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div></div>
                <h4 className="small">
                    Sales Tracking
                    <span className="float-end fw-bold">40%</span>
                </h4>
                <div className="progress mb-4"><div className="progress-bar bg-warning" role="progressbar" style={{"width": "40%"}} aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div></div>
                <h4 className="small">
                    Customer Database
                    <span className="float-end fw-bold">60%</span>
                </h4>
                <div className="progress mb-4"><div className="progress-bar" role="progressbar" style={{"width": "60%"}} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div></div>
                <h4 className="small">
                    Payout Details
                    <span className="float-end fw-bold">80%</span>
                </h4>
                <div className="progress mb-4"><div className="progress-bar bg-info" role="progressbar" style={{"width": "80%"}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div></div>
                <h4 className="small">
                    Account Setup
                    <span className="float-end fw-bold">Complete!</span>
                </h4>
                <div className="progress"><div className="progress-bar bg-success" role="progressbar" style={{"width": "100%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div></div>
            </div>
      </div>

    )
}
export default ProgressBarSection;