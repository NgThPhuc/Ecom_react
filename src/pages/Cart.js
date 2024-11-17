import React from 'react'
import Meta from '../components/Meta'
import BreadCrumbb from '../components/BreadCrumbb'
import { Link } from 'react-router-dom'
import { AiFillDelete } from 'react-icons/ai'

const Cart = () => {
    return (
        <>
            <Meta title={"Cart"} />
            <BreadCrumbb title="Cart" />
            <section className="cart-wrapper home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="cart-header py-3 d-flex justify-content-between align-items-center">
                                <h4 className="cart-col-1">Sản phẩm</h4>
                                <h4 className="cart-col-2">Giá</h4>
                                <h4 className="cart-col-3">Số lượng</h4>
                                <h4 className="cart-col-4">Tổng</h4>
                            </div>
                            <div className="cart-data py-3 mb-2 d-flex justify-content-between align-items-center">
                                <div className="cart-col-1 gap-15 d-flex align-items-center">
                                    <div className="w-25">
                                        <img src="/images/watch.jpg" className="img-fluid" alt="product" />
                                    </div>
                                    <div className="w-75">
                                        <p>Apple Watch</p>
                                        <p>Size: M</p>
                                        <p>Color: Black</p>
                                    </div>
                                </div>
                                <div className="cart-col-2">
                                    <h5 className="price">5.000.000đ</h5>
                                </div>
                                <div className="cart-col-3 d-flex align-items-center gap-15">
                                    <div>
                                        <input
                                            className="form-control"
                                            type="number"
                                            min={1}
                                            max={10}
                                            name=""
                                            id=""
                                        />
                                    </div>
                                    <div>
                                        <AiFillDelete className="text-danger" />
                                    </div>
                                </div>
                                <div className="cart-col-4">
                                    <h5 className="price">5.000.000đ</h5>
                                </div>
                            </div>
                            <div className="col-12 py-2 mt-4">
                                <div className="d-flex justify-content-between align-items-baseline">
                                    <Link to="/ourstore" className="button">
                                        Tiếp tục mua sắm
                                    </Link>
                                    <div className="d-flex flex-column align-items-end">
                                        <h4>Tổng tiền: 5.000.000đ</h4>
                                        <p>Thuế và phí vận chuyển được tính khi thanh toán</p>
                                        <Link to="/checkout" className="button">
                                            Thanh toán
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Cart