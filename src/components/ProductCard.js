import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Link, useLocation, } from 'react-router-dom';

const ProductCard = (props) => {
    const { grid } = props;
    let location = useLocation();

    return (
        <>
            <div className={`${location.pathname === "/ourstore" ? `gr-${grid}` : "col-3"}`}>
                <Link to="/productdetail" className='product-card position-relative'>
                    <div className='wishlist-icon position-absolute'>
                        <Link><img src='images/wish.svg' alt='wishlist' /></Link>
                    </div>
                    <div className='product-image'>
                        <img className='img-fluid' src='images/watch.jpg' alt='productimage' />
                        <img className='img-fluid' src='images/watch.jpg' alt='productimage' />
                    </div>
                    <div className='product-details'>
                        <h6 className='brand'>Havels</h6>
                        <h5 className='product-title'>Lorem ipsum dolor sit amet</h5>
                        <ReactStars
                            count={5}
                            size={24}
                            value='3'
                            activeColor="#ffd700"
                            edit={false}
                        />
                        <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <p className='price'>$100</p>

                    </div>
                    <div className='action-bar position-absolute'>
                        <div className='d-flex flex-column gap-15'>
                            <Link>
                                <img src='images/prodcompare.svg' alt='compare' />
                            </Link>
                            <Link>
                                <img src='images/view.svg' alt='view' />
                            </Link>
                            <Link>
                                <img src='images/add-cart.svg' alt='addcart' />
                            </Link>

                        </div>
                    </div>
                </Link>
            </div>
            <div className={`${location.pathname === "/ourstore" ? `gr-${grid}` : "col-3"}`}>
                <Link to="/productdetail" className='product-card position-relative'>
                    <div className='wishlist-icon position-absolute'>
                        <Link><img src='images/wish.svg' alt='wishlist' /></Link>
                    </div>
                    <div className='product-image'>
                        <img className='img-fluid' src='images/watch.jpg' alt='productimage' />
                        <img className='img-fluid' src='images/watch.jpg' alt='productimage' />
                    </div>
                    <div className='product-details'>
                        <h6 className='brand'>Havels</h6>
                        <h5 className='product-title'>Lorem ipsum dolor sit amet</h5>
                        <ReactStars
                            count={5}
                            size={24}
                            value='3'
                            activeColor="#ffd700"
                            edit={false}
                        />
                        <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <p className='price'>$100</p>
                    </div>
                    <div className='action-bar position-absolute'>
                        <div className='d-flex flex-column gap-15'>
                            <Link>
                                <img src='images/prodcompare.svg' alt='compare' />
                            </Link>
                            <Link>
                                <img src='images/view.svg' alt='view' />
                            </Link>
                            <Link>
                                <img src='images/add-cart.svg' alt='addcart' />
                            </Link>

                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default ProductCard