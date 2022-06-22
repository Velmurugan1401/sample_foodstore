import '../styles/dashboard.css';
import BBQ from "../images/3.png"
import Din from "../images/1.png"
import { useState } from 'react';
import { Link} from "react-router-dom";




function Dashboard() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(false);

    return (
        <div className="Dasnboad mt-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-2 ">
                        <div class="card cardshadow" data-bs-toggle="modal" data-bs-target="#exampleModalLabel">
                            <div class="card-body">
                                <div align="center">
                                    <img src={BBQ} alt="" />
                                </div>
                                <h6 class="card-title mt-4">BBQ</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 ">
                        <Link to="dinein">
                        <div class="card cardshadow" data-bs-toggle="modal" data-bs-target="#exampleModalLabel">
                            <div class="card-body">
                                <div align="center">
                                    <img src={Din} alt="" />
                                </div>
                                <h6 class="card-title mt-4">Dine In</h6>
                            </div>
                        </div>
                        </Link>
                      
                    </div>
                    <div className="col-lg-2 ">
                        <Link to="menu">
                        <div class="card cardshadow" data-bs-toggle="modal" data-bs-target="#exampleModalLabel">
                            <div class="card-body">
                                <div align="center">
                                    <img src={BBQ} alt="" />
                                </div>
                                <h6 class="card-title mt-4">Take Away</h6>
                            </div>
                        </div>
                        </Link>
                    </div>
                    <div className="col-lg-2 ">
                        <div class="card cardshadow" data-bs-toggle="modal" data-bs-target="#exampleModalLabel">
                            <div class="card-body">
                                <div align="center">
                                    <img src={BBQ} alt="" />
                                </div>
                                <h6 class="card-title mt-4">Door Delivery</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 ">
                        <div class="card cardshadow" data-bs-toggle="modal" data-bs-target="#exampleModalLabel">
                            <div class="card-body">
                                <div align="center">
                                    <img src={BBQ} alt="" />
                                </div>
                                <h6 class="card-title mt-4">Order</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 ">
                        <Link to="kitchen">
                        <div class="card cardshadow" data-bs-toggle="modal" data-bs-target="#exampleModalLabel">
                            <div class="card-body">
                                <div align="center">
                                    <img src={BBQ} alt="" />
                                </div>
                                <h6 class="card-title mt-4">Kitchen</h6>
                            </div>
                        </div>
                        </Link>
                    </div>
                    <div className="col-lg-2 mt-4">
                        <div class="card cardshadow" data-bs-toggle="modal" data-bs-target="#exampleModalLabel">
                            <div class="card-body">
                                <div align="center">
                                    <img src={BBQ} alt="" />
                                </div>
                                <h6 class="card-title mt-4">Billing</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 mt-4">
                        <div class="card cardshadow" data-bs-toggle="modal" data-bs-target="#exampleModalLabel">
                            <div class="card-body">
                                <div align="center">
                                    <img src={BBQ} alt="" />
                                </div>
                                <h6 class="card-title mt-4">Reports</h6>
                            </div>
                        </div>
                    </div>


                </div>

            </div>
            {/* <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal> */}
        </div>
    );
}

export default Dashboard;
