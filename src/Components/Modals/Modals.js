import React,{useState} from "react";
import { Modal } from "react-bootstrap";

function Modals (props) {
    const [modalDisplay, setmModalDisplay] = useState(true);    
    const handleClose = () => {
        setmModalDisplay(false);    
    }    
    return (
        <React.Fragment>
            <Modal size="md" show={modalDisplay} onHide={handleClose}>
                <div className="row">
                    <div className="col-12 text-end ">
                        <button
                        type="button"
                        onClick={handleClose}
                        className="text-secondary btn_close pe-4"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                        >
                        <i className="fa-solid fa-xmark"></i>
                        </button>
                    </div>
                </div>
                        <div className="pb-5">
                            <div>
                                <div className="row">
                                    <div className="col-12 text-center">
                                    <p className="get-apk-free">We will send estimate via email </p>
                                    <p className="input-text-mod">
                                        
                                    </p>
                                    </div>
                                </div>
                                <hr />
                                <div className="row pt-4 px-5 form-ts-mod">
                                    <div className="col-12 text-center">                                
                                        hii
                                    </div>
                                </div>
                                <div className="row pt-5">
                                <div className="col-12 text-center">
                                </div>
                                </div>
                            </div>
                        </div>    
            </Modal>
        </React.Fragment>    
    )
}

export default Modals;