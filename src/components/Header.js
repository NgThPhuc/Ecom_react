import React from 'react'
import { NavLink, Link } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';

const Header = () => {
    return (
        <>
            <header className='header-top-strip py-3'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <p className='text-white mb-0'>
                                Free Shipping Over $100 & Free Returns
                            </p>
                        </div>
                        <div className='col-lg-6'>
                            <p className='text-end text-white mb-0'>
                                Hostline:
                                <a className='text-white' href="tel:+84 329994252">
                                    +84 329994252
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </header>
            <header className='header-upper py-3'>
                <div className='container-xxl'>
                    <div className='row align-items-center'>
                        <div className='col-2'>
                            <h2>
                                <Link className='text-white'>
                                    TECHMART
                                </Link>
                            </h2>
                        </div>
                        <div className='col-5'>
                            <div className="input-group">
                                <input
                                    type="text"
                                    class="form-control py-2" placeholder="Search product here ..." aria-label="Search product here ..." aria-describedby="basic-addon2"
                                />
                                <span className="input-group-text p-3" id="basic-addon2"><BsSearch className='fs-6' /></span>
                            </div>
                        </div>
                        <div className='col-5'>
                            <div className='header-upper-links d-flex align-items-center justify-content-between'>
                                <div>
                                    <Link className='d-flex align-items-center gap-10 text-white'>
                                        <img src="images/compare.svg" alt="compare">
                                        </img>
                                        <p className='mb-0'>Compare <br /> Product</p>
                                    </Link>
                                </div>
                                <div>
                                    <Link className='d-flex align-items-center gap-10 text-white'>
                                        <img src='/images/wishlist.svg' alt='wishlist'></img>
                                        <p className='mb-0'>Favourite <br /> Wishlist</p>
                                    </Link>
                                </div>
                                <div>
                                    <Link className='d-flex align-items-center gap-10 text-white'>
                                        <img src='/images/user.svg' alt='user'>
                                        </img>
                                        <p className='mb-0'>Log in <br /> My Account</p>
                                    </Link>
                                </div>
                                <div>
                                    <Link className='d-flex align-items-center gap-10 text-white'>
                                        <img src='/images/cart.svg' alt='cart'></img>
                                        <div className='d-flex flex-column gap-10'>
                                            <span className='badge bg-white text-dark'>0</span>
                                        </div>
                                        <p className='mb-0'>$ 500</p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <header className='header-bottom py-3'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='menu-bottom d-flex align-items-center gap-30'>
                                <div>
                                    <div className="dropdown">
                                        <button
                                            className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center"
                                            type="button"
                                            id="dropdownMenuButton1"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            <img src='images/menu.svg' alt='' />
                                            <span className='me-5 d-inline-block'>Shop Categories</span>
                                        </button>
                                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <li>
                                                <Link className="dropdown-item text-white" to="#">
                                                    Action
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="dropdown-item text-white" to="#">
                                                    Another action
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="dropdown-item text-white" to="#">
                                                    Something else here
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='menu-links'>
                                    <Link className='d-flex align-items-center gap-15' to='/'>
                                        <NavLink to="/">Home</NavLink>
                                        <NavLink to="/ourstore">Our Store</NavLink>
                                        <NavLink to="/blog">Blogs</NavLink>
                                        <NavLink to="/contact">Contact</NavLink>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header