import '../styles/dashboard.css';
import BBQ from "../images/3.png"
import Din from "../images/1.png"
import Takeaway from "../images/8.png"
import { useState } from 'react';
import { Link} from "react-router-dom";
import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"


function Dashboard() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="Dasnboad mt-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-2 cursore-point" role="button" onClick={handleShow}>
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
                        <div class="card cardshadow" role="button" onClick={handleShow} data-bs-toggle="modal" data-bs-target="#exampleModalLabel">
                            <div class="card-body">
                                <div align="center">
                                    <img src={BBQ} alt="" />
                                </div>
                                <h6 class="card-title mt-4">Door Delivery</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 ">
                        <Link to="order">
                        <div class="card cardshadow" data-bs-toggle="modal" data-bs-target="#exampleModalLabel">
                            <div class="card-body">
                                <div align="center">
                                    <img src={BBQ} alt="" />
                                </div>
                                <h6 class="card-title mt-4">Order</h6>
                            </div>
                        </div>
                        </Link>
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
            <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Add Customer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div class="">
                      
                        
                      <form class="row g-1">
                      
                             
                        <div class="col-md-12">
                      
                      
                          <label for="inputEmail4" class="form-label "><span className='text-danger'>*</span>&nbsp;Name</label>
                      
                      
                          <input type="text" class="form-control" id="inputEmail4" />
                      
                      
                        </div>
                        <div class="col-md-12">
                      
                      
                          <label for="inputPassword4" class="form-label"><span className='text-danger' >*</span>&nbsp;Phone</label>
                      
                      
                          <input type="number" class="form-control" id="inputPassword4" />
                      
                      
                        </div>
                       
                    
                        
                        <div class="col-md-6">
                      
                      
                          <label for="inputState" class="form-label"><span className='text-danger' >*</span>&nbsp;Customer</label>
                      
                      
                          <select id="inputState" class="form-select">
                      
                      
                            <option selected="">Choose...</option>
                      
                      
                            <option>Regular</option>
                            <option>Regular</option>
      
                      
                      
                          </select>
                      
                      
                        </div>
                      
                        <div class="col-md-6">
                      
                      
                          <label for="inputState" class="form-label"><span className='text-danger' >*</span>&nbsp;Customer Type</label>
                      
                      
                          <select id="inputState" class="form-select">
                      
                      
                            <option selected="">Choose...</option>
                      
                      
                            <option>...</option>
                      
                      
                          </select>
                      
                      
                        </div>
                    
                        <div class="col-md-4">
                      
                      
                            <label for="inputState" class="form-label">Adults</label>
                        
                        
                            <select id="inputState" class="form-select">
                        
                        
                              <option selected="">Choose...</option>
                        
                        
                              <option>...</option>
                        
                        
                            </select>
                        
                        
                          </div>
                      
                      
                        <div class="col-md-4">
                      
                      
                          <label for="inputState" class="form-label">Childs</label>
                      
                      
                          <select id="inputState" class="form-select">
                      
                      
                            <option selected="">Choose...</option>
                      
                      
                            <option>...</option>
                      
                      
                          </select>
                      
                      
                        </div>
                      
                        <div class="col-md-4">
                      
                      
                            <label for="inputState" class="form-label">Kids</label>
                        
                        
                            <select id="inputState" class="form-select">
                        
                        
                              <option selected="">Choose...</option>
                        
                        
                              <option>...</option>
                        
                        
                            </select>
                        
                        
                          </div>
                          <div class="col-md-4">
                            <label for="inputEmail4" class="form-label">Price</label>
                      
                      
                            <input type="text" class="form-control" id="inputEmail4" />
                        
                        
                          </div>
                          <div class="col-md-4">
                            <label for="inputEmail4" class="form-label">Price</label>
                      
                      
                            <input type="text" class="form-control" id="inputEmail4" />
                        
                        
                          </div>
                          <div class="col-md-4">
                            <label for="inputEmail4" class="form-label">Price</label>
                      
                      
                            <input type="text" class="form-control" id="inputEmail4" />
                        
                        
                          </div>
                      
                      
                      
                      </form>
            
              </div>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
        </div>
    );
}

export default Dashboard;
