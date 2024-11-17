import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <header className='header-top-strip py-2 py-sm-3'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12 col-sm-6'>
                            <p className='text-white mb-0 text-center text-sm-start'>
                                Miễn phí vận chuyển cho đơn hàng trên 2 triệu đồng
                            </p>
                        </div>
                        <div className='col-12 col-sm-6'>
                            <p className='text-center text-sm-end text-white mb-0'>
                                Đường dây nóng:
                                <a className='text-white ms-2' href="tel:+84 329994252">
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
                        <div className='col-6 col-md-2'>
                            <h2 className='mb-0'>
                                <Link to="/" className='text-white'>
                                    TECHMART
                                </Link>
                            </h2>
                        </div>
                        <div className='col-md-5 d-none d-md-block'>
                            <div className="input-group">
                                <input
                                    type="text"
                                    className="form-control py-2"
                                    placeholder="Tìm kiếm sản phẩm..."
                                    aria-label="Tìm kiếm sản phẩm..."
                                    aria-describedby="basic-addon2"
                                />
                                <span className="input-group-text p-3" id="basic-addon2"><BsSearch className='fs-6' /></span>
                            </div>
                        </div>
                        <div className='col-6 col-md-5'>
                            <div className='header-upper-links d-flex align-items-center justify-content-end gap-10'>
                                <div className='d-none d-lg-flex align-items-center gap-10 text-white'>
                                    <Link to='/compareprod' className='d-flex align-items-center gap-10 text-white'>
                                        <img src="images/compare.svg" alt="so sánh" />
                                        <p className='mb-0'>So sánh <br /> Sản phẩm</p>
                                    </Link>
                                </div>
                                <div className='d-none d-lg-flex align-items-center gap-10 text-white'>
                                    <Link to='/wishlist' className='d-flex align-items-center gap-10 text-white'>
                                        <img src='/images/wishlist.svg' alt='yêu thích' />
                                        <p className='mb-0'>Danh sách <br /> Yêu thích</p>
                                    </Link>
                                </div>
                                <div className='d-none d-lg-flex align-items-center gap-10 text-white'>
                                    <Link to='login' className='d-flex align-items-center gap-10 text-white'>
                                        <img src='/images/user.svg' alt='người dùng' />
                                        <p className='mb-0'>Đăng nhập <br /> Tài khoản</p>
                                    </Link>
                                </div>
                                <div className='d-flex align-items-center gap-10 text-white'>
                                    <Link to='/cart' className='d-flex align-items-center gap-10 text-white'>
                                        <img src='/images/cart.svg' alt='giỏ hàng' />
                                        <div className='d-flex flex-column gap-10'>
                                            <span className='badge bg-white text-dark'>0</span>
                                            <p className='mb-0'>500.000đ</p>
                                        </div>
                                    </Link>
                                </div>
                                <div className='d-lg-none ms-3'>
                                    <button onClick={toggleMenu} className='btn btn-light'>
                                        {isMenuOpen ? <FaTimes /> : <FaBars />}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <header className={`header-bottom py-3 ${isMenuOpen ? 'd-block' : 'd-lg-block d-none'}`}>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='menu-bottom d-flex flex-column flex-lg-row align-items-center gap-30'>
                                <div className='w-100 mb-3 mb-lg-0'>
                                    <div className="dropdown">
                                        <button
                                            className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center"
                                            type="button"
                                            id="dropdownMenuButton1"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            <img src='images/menu.svg' alt='' />
                                            <span className='me-5 d-inline-block'>Danh mục sản phẩm</span>
                                        </button>
                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <li>
                                                <Link className="dropdown-item text-white" to="#">
                                                    Điện thoại
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="dropdown-item text-white" to="#">
                                                    Máy tính
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="dropdown-item text-white" to="#">
                                                    Phụ kiện
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='menu-links w-100'>
                                    <div className='d-flex flex-column flex-lg-row align-items-center gap-15'>
                                        <NavLink to="/">Trang chủ</NavLink>
                                        <NavLink to="/ourstore">Cửa hàng</NavLink>
                                        <NavLink to="/blog">Tin tức</NavLink>
                                        <NavLink to="/contact">Liên hệ</NavLink>
                                    </div>
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