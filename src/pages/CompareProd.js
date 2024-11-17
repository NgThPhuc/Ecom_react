import React from 'react'
import Meta from '../components/Meta'
import BreadCrumbb from '../components/BreadCrumbb'

const CompareProd = () => {
    return (
        <>
            <Meta title={"CompareProd"} />
            <BreadCrumbb title="CompareProd" />
            <div className='compare-product-wrapper py-5 home-wrapper-2'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-3 d-flex gap-10'>
                            <div className='compare-product-card position-relative'>
                                <img src='images/cross.svg' alt='cross' className='position-absolute cross img-fluid' />
                                <div className='compare-product-image'>
                                    <img src='/images/watch.jpg' alt='product-image' />
                                </div>
                                <div className='compare-product-details'>
                                    <h5 className='titlt'>Apple Watch</h5>
                                    <h6 className='price'>$ 299.99</h6>
                                    <div>
                                        <div className='product-detail'>
                                            <h5>Brand: </h5>
                                            <p>Apple</p>
                                        </div>
                                        <div className='product-detail'>
                                            <h5>Type</h5>
                                            <p>Apple</p>
                                        </div>
                                        <div className='product-detail'>
                                            <h5>Availablity</h5>
                                            <p>Apple</p>
                                        </div>
                                        <div className='product-detail'>
                                            <h5>Color: </h5>
                                            <div>
                                                <ul className='colors ps-0'>
                                                    <li className='me-0'></li>
                                                    <li className='me-0'></li>
                                                    <li className='me-0'></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className='product-detail'>
                                            <h5>Size: </h5>
                                            <div className='d-flex gap-10'>
                                                <p>S</p>
                                                <p>M</p>
                                                <p>L</p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className='compare-product-card position-relative'>
                                <img src='images/cross.svg' alt='cross' className='position-absolute cross img-fluid' />
                                <div className='compare-product-image'>
                                    <img src='/images/watch.jpg' alt='product-image' />
                                </div>
                                <div className='compare-product-details'>
                                    <h5 className='titlt'>Apple Watch</h5>
                                    <h6 className='price'>$ 299.99</h6>
                                    <div>
                                        <div className='product-detail'>
                                            <h5>Brand: </h5>
                                            <p>Apple</p>
                                        </div>
                                        <div className='product-detail'>
                                            <h5>Type</h5>
                                            <p>Apple</p>
                                        </div>
                                        <div className='product-detail'>
                                            <h5>Availablity</h5>
                                            <p>Apple</p>
                                        </div>
                                        <div className='product-detail'>
                                            <h5>Color: </h5>
                                            <div>
                                                <ul className='colors ps-0'>
                                                    <li className='me-0'></li>
                                                    <li className='me-0'></li>
                                                    <li className='me-0'></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className='product-detail'>
                                            <h5>Size: </h5>
                                            <div className='d-flex gap-10'>
                                                <p>S</p>
                                                <p>M</p>
                                                <p>L</p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default CompareProd