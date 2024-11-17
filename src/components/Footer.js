import React from 'react'
import { Link } from 'react-router-dom'
import { BsFacebook, BsInstagram, BsTiktok, BsYoutube } from "react-icons/bs";

const Footer = () => {
    return (
        <>
            <footer className='py-4'>
                <div className="container-xxl">
                    <div className="row align-items-center">
                        <div className="col-12 col-md-5 mb-3 mb-md-0">
                            <div className="footer-top-data d-flex gap-30 align-items-center justify-content-center justify-content-md-start">
                                <img src='images/newsletter.png' alt='newsletter' />
                                <h2 className='mb-0 text-white'>Đăng ký nhận bản tin</h2>
                            </div>
                        </div>
                        <div className="col-12 col-md-7">
                            <div className="input-group">
                                <input
                                    type="text"
                                    className="form-control py-1"
                                    placeholder="Địa chỉ email của bạn"
                                    aria-label="Địa chỉ email của bạn"
                                    aria-describedby="basic-addon2"
                                />
                                <span className="input-group-text p-2 p-md-3" id="basic-addon2">
                                    Đăng ký
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <footer className='py-3'>
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12 col-md-4 mb-4 mb-md-0">
                            <h4 className='text-white mb-4'>Liên hệ chúng tôi</h4>
                            <div>
                                <address className='text-white fs-6'>Đoàn Kế Thiện, Mai Dịch,<br /> Cầu Giấy, Hà Nội <br />Mã bưu điện: 271203</address>
                                <a className='text-white mt-3 d-block mb-1' href="tel:+84 329994252">
                                    +84 329994252
                                </a>
                                <a className='text-white mt-3 d-block mb-0' href="mailto:nguyenphuch5p@gmail.com">
                                    nguyenphuch5p@gmail.com
                                </a>
                                <div className='social_icons d-flex align-items-center gap-30 mt-4'>
                                    <Link className='text-white' to='#'><BsFacebook className='fs-4' /></Link>
                                    <Link className='text-white' to='#'><BsInstagram className='fs-4' /></Link>
                                    <Link className='text-white' to='#'><BsTiktok className='fs-4' /></Link>
                                    <Link className='text-white' to='#'><BsYoutube className='fs-4' /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-md-3 mb-4 mb-md-0">
                            <h4 className='text-white mb-4'>Thông tin</h4>
                            <div className='footer-links d-flex flex-column'>
                                <Link className='text-white py-2 mb-1'>Chính sách bảo mật</Link>
                                <Link className='text-white py-2 mb-1'>Chính sách hoàn tiền</Link>
                                <Link className='text-white py-2 mb-1'>Chính sách vận chuyển</Link>
                                <Link className='text-white py-2 mb-1'>Điều khoản & Điều kiện</Link>
                                <Link className='text-white py-2 mb-1'>Blogs</Link>
                            </div>
                        </div>
                        <div className="col-6 col-md-3 mb-4 mb-md-0">
                            <h4 className='text-white mb-4'>Tài khoản</h4>
                            <div className='footer-links d-flex flex-column'>
                                <Link className='text-white py-2 mb-1'>Về chúng tôi</Link>
                                <Link className='text-white py-2 mb-1'>Câu hỏi thường gặp</Link>
                                <Link className='text-white py-2 mb-1'>Liên hệ</Link>
                            </div>
                        </div>
                        <div className="col-6 col-md-2">
                            <h4 className='text-white mb-4'>Liên kết nhanh</h4>
                            <div className='footer-links d-flex flex-column'>
                                <Link className='text-white py-2 mb-1'>Laptop</Link>
                                <Link className='text-white py-2 mb-1'>Tai nghe</Link>
                                <Link className='text-white py-2 mb-1'>Máy tính bảng</Link>
                                <Link className='text-white py-2 mb-1'>Đồng hồ</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <footer className='py-4'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <p className='text-center text-white mb-0'>&copy; {new Date().getFullYear()}; Được phát triển bởi NgThPhucs</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer