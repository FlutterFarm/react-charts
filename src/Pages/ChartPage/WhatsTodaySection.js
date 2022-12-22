import React from "react"

function WhatsTodaySection(props) {
    return (
        <div className="row">
        <div className="col-xxl-3 col-md-6 mb-5">
            <div className="card card-raised border-start border-primary border-4">
                <div className="card-body px-4">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                        <div className="me-2">
                            <div className="display-5">{props.data['download_count']}</div>
                            <div className="card-text">{props.data['download_label']}</div>
                        </div>
                        <div className="icon-circle bg-primary text-white"><i className="material-icons">download</i></div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-xxl-3 col-md-6 mb-5">
            <div className="card card-raised border-start border-warning border-4">
                <div className="card-body px-4">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                        <div className="me-2">
                            <div className="display-5">{props.data['purchase_count']}</div>
                            <div className="card-text">{props.data['purchase_label']}</div>
                        </div>
                        <div className="icon-circle bg-warning text-white"><i className="material-icons">storefront</i></div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-xxl-3 col-md-6 mb-5">
            <div className="card card-raised border-start border-secondary border-4">
                <div className="card-body px-4">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                        <div className="me-2">
                            <div className="display-5">{props.data['customer_count']}</div>
                            <div className="card-text">{props.data['customer_label']}</div>
                        </div>
                        <div className="icon-circle bg-secondary text-white"><i className="material-icons">people</i></div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-xxl-3 col-md-6 mb-5">
            <div className="card card-raised border-start border-info border-4">
                <div className="card-body px-4">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                        <div className="me-2">
                            <div className="display-5">{props.data['channel_count']}</div>
                            <div className="card-text">{props.data['channel_label']}</div>
                        </div>
                        <div className="icon-circle bg-info text-white"><i className="material-icons">devices</i></div>
                    </div>
                </div>
            </div>
        </div>
    </div>             
    )
}

export default WhatsTodaySection;