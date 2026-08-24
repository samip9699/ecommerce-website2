import React, { useContext , useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'


const PlaceOrder = () => {

    const { getCartAmount } = useContext(CartContext);
    const navigate = useNavigate();
      const [orderPlaced, setOrderPlaced] = useState(false);



    return (
        <div className='container my-5'>
            <h2 className='text-center mb-5'>
                PLACE ORDER
            </h2>
            <div className='row'>
                <div className='col-lg-7'>
                    <h3 className='mb-4'>
                        delivery Information
                    </h3>
                    <div className='row'>
                        <div className='col-md-6 mb-3'>
                            <input type='text' placeholder='first name' className='form-control' />
                        </div>

                    </div>
                    <div className='row'>
                        <div className='col-md-6 mb-3'>
                            <input type='text' placeholder='last  name' className='form-control' />
                        </div>

                    </div>
                    <div className='row'>
                        <div className='col-md-6 mb-3'>
                            <input type='email' placeholder='email address' className='form-control' />
                        </div>

                    </div>
                    <div className='row'>
                        <div className='col-md-6 mb-3'>
                            <input type='text' placeholder='street' className='form-control' />
                        </div>

                    </div>
                    <div className='row'>
                        <div className='col-md-6 mb-3'>
                            <input type='text' placeholder='city' className='form-control' />
                        </div>

                    </div>
                    <div className='row'>
                        <div className='col-md-6 mb-3'>
                            <input type='text' placeholder='state' className='form-control' />
                        </div>

                    </div>
                    <div className='row'>
                        <div className='col-md-6 mb-3'>
                            <input type='text' placeholder='zip code' className='form-control' />
                        </div>

                    </div>
                    <div className='row'>
                        <div className='col-md-6 mb-3'>
                            <input type='text' placeholder='country' className='form-control' />
                        </div>

                    </div>
                    <div className='row'>
                        <div className='col-md-6 mb-3'>
                            <input type='number' placeholder='phone number' className='form-control' />
                        </div>

                    </div>
                </div>
                <div className='col-lg-5 mt-4 mt-lg-0'>
                    <div className='card shadow p-4'>
                        <h3 className='mb-4'> card total</h3>

                        <div className='d-flex justify-content-between'>
                            <span> subtotal </span>
                            <span>
                                ₹{getCartAmount()}
                            </span>
                        </div>
                        <hr />
                        <div className=' d-flex justify-content-between '>
                            <span>delivery  charge </span>
                            <span> free  </span>
                        </div>
                        <hr />
                        <div className='d-flex justify-content-between fw-bold fs-5  '>
                            <span> total</span>
                            <span> ₹{getCartAmount()}  </span>
                        </div>
                        <h4 className=' mt-5 mb-4'> payment method </h4>
                        <div className='form-check mb-3'>
                            <input
                                className="form-check-input"
                                type="radio"
                                name="payment"
                                id="cod"
                                defaultChecked />

                            <label className="form-check-label ms-2"
                                htmlFor="cod"
                            >
                                Cash On Delivery
                            </label>

                        </div>
                        <div className='form-check mb-3'>
                            <input
                                className="form-check-input"
                                type="radio"
                                name="payment"
                                id="online"
                                defaultChecked />

                            <label className="form-check-label ms-2"
                                htmlFor="online"
                            >
                                online payment
                            </label>

                        </div>
                        <button
                            className="btn btn-dark w-100 mt-3"
                          onClick={() => setOrderPlaced(true)}>
                            PLACE ORDER
                        </button>
                         {orderPlaced && (
              <div className="alert alert-success mt-3 text-center">

                <h5>
                  ✅ Your order has been successfully placed!
                </h5>

                <p className="mb-0">
                  Thank you for shopping with us.
                </p>

              </div>
            )}

                    </div>

                </div>
                
            </div>
        </div>


    )
}

export default PlaceOrder
