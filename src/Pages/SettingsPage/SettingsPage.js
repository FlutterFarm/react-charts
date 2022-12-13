import React, { useEffect,useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";


const SettingsPage = () => {    
  let [url, setUrl] = useState(localStorage.getItem("url"));
  let [uNmae, setUname] = useState(localStorage.getItem("uname"));  
  let [password, setPassword] = useState(localStorage.getItem("password"));  
  const updateDetails = () => {
    localStorage.setItem("url", url);
    localStorage.setItem("uname", uNmae);
    localStorage.setItem("password", password);
    alert("details updated successfully");
  }
  const onTop = () => {
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    onTop();
  }, []);
  return (
    <React.Fragment>
        <div id="wrapper">
          <Navbar name="SettingsPage"></Navbar>
            <section id="content-wrapper">
              <div className="row">
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                    <div className="row">
                        <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <input type="text" value={url} onChange={e => setUrl(e.target.value)} className="form-control" placeholder="Enter valid url"></input>
                            <br></br>
                        </div>
                        <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <input type="text" value={uNmae} onChange={e => setUname(e.target.value)} className="form-control" placeholder="Username"></input>
                            <br></br>
                        </div>
                        <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="form-control" placeholder="Password"></input>
                            <br></br>
                        </div>   
                        <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 text-center">
                            <button className="btn btn-success" onClick={updateDetails}>Update</button>
                            <br></br>
                        </div>                           
                    </div>
                </div>
              </div>
            </section>                        
        </div>
    </React.Fragment>
  );
};

export default SettingsPage;
