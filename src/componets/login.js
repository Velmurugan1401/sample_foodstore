import '../styles/login.css';
import { Link} from "react-router-dom";

function Login() {
    return (
        <div class="container login">
            <div class="row h-100">
                <div class="col-md-6 col-sm-12 image">
                </div>
                <div class="col-md-6 col-sm-12 image2" >
                    <div className="login-right">
                        <h2 class="loginform text-center">Enter Your Password</h2>
                        <div class="row">
                            <div className="col-9 text-end mb-3 mt-3">
                            <span id="todate" className=" currdate text-center mb-2" > 06/21/2022 </span>
                            </div>
                            
                        </div>
                        <div className="topmargin1">
                            <input type="keyword" className="form-control selectbox" id="exampleFormControlInput1" placeholder="Password" />
                        </div>
                        <div className="topmargin">
                            <select className="form-select selectbox" aria-label="Default select example">
                                <option selected>Select Group</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                        <div className="topmargin">
                            <select className="form-select selectbox" aria-label="Default select example">
                                <option selected>Select Branch</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                        <div className="d-flex justify-content-between topmargin">

                            <button type="button" className="btn btn-danger">Reset <i class="bi bi-arrow-clockwise resrticon"></i></button>
                            <button type="button" className="btn btn-success"><Link to="/dashboard">login <i class="bi bi-box-arrow-in-right"></i></Link></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
