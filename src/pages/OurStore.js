import React, { useState } from 'react'
import BreadCrumbb from '../components/BreadCrumbb'
import ReactStars from "react-rating-stars-component";
import Meta from '../components/Meta'
import ProductCard from '../components/ProductCard';

const OurStore = () => {
    const [grid, setGrid] = useState(4);
    return (
        <>
            <Meta title={"Our Store"} />
            <BreadCrumbb title="Our Store" />
            <div className="shop-wrapper home-wrapper-2 py-5">\
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-3">
                            <div className="filter-card mb-3">
                                <h3 className='filter-title'>Shop By Categories</h3>
                                <div>
                                    <ul className='ps-0'>
                                        <li>Watch</li>
                                        <li>TV</li>
                                        <li>Camera</li>
                                        <li>Laptop</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="filter-card mb-3">
                                <h3 className='filter-title'>Filter By</h3>
                                <div>
                                    <h5 className='sub-title'>Availability</h5>
                                    <div>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="" />
                                            <label className="form-check-label" htmlFor="">
                                                In Stock (1)
                                            </label>
                                        </div>

                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id=""
                                            />
                                            <label className="form-check-label" htmlFor="">
                                                Out of Stock (0)
                                            </label>
                                        </div>
                                    </div>
                                    <h5 className='sub-title'>Price</h5>
                                    <div className='d-flex align-items-center gap-10'>
                                        <div className="form-floating mb-3">
                                            <input
                                                type="email"
                                                class="form-control"
                                                id="floatingInput"
                                                placeholder="From" />
                                            <label htmlFor="floatingInput">From</label>
                                        </div>
                                        <div className="form-floating mb-3">
                                            <input
                                                type="email"
                                                class="form-control"
                                                id="floatingInput"
                                                placeholder="To" />
                                            <label htmlFor="floatingInput">To</label>
                                        </div>
                                    </div>
                                    <h5 className='sub-title'>Colors</h5>
                                    <div>
                                        <ul className='colors ps-0'>
                                            <li className='me-2'></li>
                                            <li className='me-2'></li>
                                            <li className='me-2'></li>
                                            <li className='me-2'></li>
                                            <li className='me-2'></li>
                                            <li className='me-2'></li>
                                            <li className='me-2'></li>
                                            <li className='me-2'></li>
                                            <li className='me-2'></li>
                                            <li className='me-2'></li>
                                            <li className='me-2'></li>
                                            <li className='me-2'></li>
                                        </ul>
                                    </div>
                                    <h5 className='sub-title'>Size</h5>
                                    <div>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="color-1" />
                                            <label className="form-check-label" htmlFor="color-1">
                                                S (2)
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="color-1" />
                                            <label className="form-check-label" htmlFor="color-1">
                                                M (3)
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="color-2" />
                                            <label className="form-check-label" htmlFor="color-2">
                                                L (4)
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="color-3" />
                                            <label className="form-check-label" htmlFor="color-3">
                                                XL (5)
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="color-4" />
                                            <label className="form-check-label" htmlFor="color-4">
                                                XXL (6)
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="filter-card mb-3">
                                <h3 className='filter-title'>Produc Tags</h3>
                                <div className='product-card d-flex flex-wrap align-items-center gap-10'>
                                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                        Headphone
                                    </span>
                                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                        Laptop
                                    </span>
                                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                        Mobile
                                    </span>
                                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                        Wire
                                    </span>
                                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                        Watch
                                    </span>
                                </div>
                            </div>
                            <div className="filter-card mb-3">
                                <h3 className='filter-title'>Random Product</h3>
                                <div>
                                    <div className='random-products d-flex'>
                                        <div className='w-45'>
                                            <img src='/images/watch.jpg' className='img-fluid' alt='random-product' />
                                        </div>
                                        <div className='w-65'>
                                            <h6 className='product-title mt-4'>Lorem ipsum dolor sit amet</h6>
                                            <ReactStars
                                                count={5}
                                                size={15}
                                                value='3'
                                                activeColor="#ffd700"
                                                edit={false}
                                            />
                                            <p className='price'>$100</p>
                                        </div>
                                    </div>
                                    <div className='random-products d-flex'>
                                        <div className='w-45'>
                                            <img src='/images/watch.jpg' className='img-fluid' alt='random-product' />
                                        </div>
                                        <div className='w-65'>
                                            <h6 className='product-title mt-4'>Lorem ipsum dolor sit amet</h6>
                                            <ReactStars
                                                count={5}
                                                size={15}
                                                value='3'
                                                activeColor="#ffd700"
                                                edit={false}
                                            />
                                            <p className='price'>$100</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-9">
                            <div className='filter-sort-frid mb-4'>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <div className='d-flex align-items-center gap-10'>
                                        <p className='mb-0 d-block' style={{ "width": "100px" }}>Sort By:</p>
                                        <select className="font-control form-select" id=''>
                                            <option value='manual'>Featured</option>
                                            <option value='best-selling' selected='selected'>Best Selling</option>
                                            <option value='title-ascending'>A - Z</option>
                                            <option value='title-ascending'>Z - A</option>
                                            <option value='price-ascending'>Low - High</option>
                                            <option value='price-ascending'>High - Low</option>
                                            <option value='created-ascending'>Old - New</option>
                                            <option value='created-ascending'>New - Old</option>
                                        </select>
                                    </div>
                                    <div className='d-flex align-items-center gap-10'>
                                        <p className='totalProducta mb-0'>21 Products</p>
                                        <div className='d-flex gap-10 align-items-center grid'>
                                            <img onClick={() => { setGrid(3); }} src='/images/gr4.svg' className='d-block img-fluid' alt='grid' />
                                            <img onClick={() => { setGrid(4); }} src='/images/gr3.svg' className='d-block img-fluid' alt='grid' />
                                            <img onClick={() => { setGrid(6); }} src='/images/gr2.svg' className='d-block img-fluid' alt='grid' />
                                            <img onClick={() => { setGrid(12); }} src='/images/gr.svg' className='d-block img-fluid' alt='grid' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='product-list pb-5'>
                                <div className='d-flex gap-10 flex-wrap'>
                                    <ProductCard grid={grid} />
                                    <ProductCard grid={grid} />
                                    <ProductCard grid={grid} />
                                    <ProductCard grid={grid} />
                                    <ProductCard grid={grid} />
                                    <ProductCard grid={grid} />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OurStore