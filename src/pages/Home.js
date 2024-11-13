import React from 'react'
import Marquee from 'react-fast-marquee'
import { Link } from 'react-router-dom'
import BlogCard from '../components/BlogCard'
import ProductCard from '../components/ProductCard'
import SpecialProduct from '../components/SpecialProduct'

const Home = () => {
    return (
        <>
            <section className='home-wrapper-1 py-5'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-6'>
                            <div className='main-banner position-relative'>
                                <img
                                    src='images/main-banner-1.jpg'
                                    className='img-fluid rounded-3'
                                    alt='Main Banner'
                                />
                                <div className='main-banner-content position-absolute'>
                                    <h4>SUPERCHARGED FOR PROS.</h4>
                                    <h5>iPad S13+ Pro.</h5>
                                    <p>From $999.00 or $41.62/mo</p>
                                    <Link className='button'>BUY NOW</Link>
                                </div>
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className='d-flex flex-wrap gap-10 justify-content-between align-content-center'>
                                <div className='small-banner position-relative'>
                                    <img
                                        src='images/catbanner-01.jpg'
                                        className='img-fluid rounded-3'
                                        alt='Main Banner'
                                    />
                                    <div className='small-banner-content position-absolute'>
                                        <h4>BEST SALES.</h4>
                                        <h5>iPad S13+ Pro.</h5>
                                        <p>From $999.00 <br />or $41.62/mo</p>
                                    </div>
                                </div>
                                <div className='small-banner position-relative'>
                                    <img
                                        src='images/catbanner-02.jpg'
                                        className='img-fluid rounded-3'
                                        alt='Main Banner'
                                    />
                                    <div className='small-banner-content position-absolute'>
                                        <h4>NEW ARRIVAL.</h4>
                                        <h5>iPad S13+ Pro.</h5>
                                        <p>From $999.00 <br />or $41.62/mo</p>
                                    </div>
                                </div>
                                <div className='small-banner position-relative'>
                                    <img
                                        src='images/catbanner-03.jpg'
                                        className='img-fluid rounded-3'
                                        alt='Main Banner'
                                    />
                                    <div className='small-banner-content position-absolute'>
                                        <h4>NEW ARRIVAL.</h4>
                                        <h5>iPad S13+ Pro.</h5>
                                        <p>From $999.00 <br />or $41.62/mo</p>
                                    </div>
                                </div>
                                <div className='small-banner position-relative'>
                                    <img
                                        src='images/catbanner-04.jpg'
                                        className='img-fluid rounded-3'
                                        alt='Main Banner'
                                    />
                                    <div className='small-banner-content position-absolute'>
                                        <h4>NEW ARRIVAL .</h4>
                                        <h5>iPad S13+ Pro.</h5>
                                        <p>From $999.00 <br />or $41.62/mo</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='home-wrapper-2 py-5'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='servies d-flex align-content-center justify-content-between'>
                                <div className='d-flex align-items-center gap-10'>
                                    <img src='images/service.png' alt='servies' />
                                    <div>
                                        <h6>Free Shipping</h6>
                                        <p className='mb-0'>From all orders over $100</p>
                                    </div>
                                </div>
                                <div className='d-flex align-items-center gap-10'>
                                    <img src='images/service-02.png' alt='servies' />
                                    <div>
                                        <h6>Daily Surprise Offers</h6>
                                        <p className='mb-0'>Save up to 25% off</p>
                                    </div>
                                </div>
                                <div className='d-flex align-items-center gap-10'>
                                    <img src='images/service-03.png' alt='servies' />
                                    <div>
                                        <h6>Support 24/7</h6>
                                        <p className='mb-0'>Shop with an expert</p>
                                    </div>
                                </div>
                                <div className='d-flex align-items-center gap-10'>
                                    <img src='images/service-04.png' alt='servies' />
                                    <div>
                                        <h6>Affordable Prices</h6>
                                        <p className='mb-0'>Get Factory direct price</p>
                                    </div>
                                </div>
                                <div className='d-flex align-items-center gap-10'>
                                    <img src='images/service-05.png' alt='servies' />
                                    <div>
                                        <h6>Secure Payments</h6>
                                        <p className='mb-0'>100% Protected Payments</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='home-wrapper-2 py-5'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='categories d-flex align-items-center flex-wrap justify-content-between'>
                                <div className='d-flex gap-30 align-items-center'>
                                    <div>
                                        <h6>Laptop & Computers</h6>
                                        <p>10 Items</p>
                                    </div>
                                    <img src='images/camera.jpg' alt='camera' />
                                </div>
                                <div className='d-flex gap-30 align-items-center'>
                                    <div>
                                        <h6>Cameras & Videos</h6>
                                        <p>10 Items</p>
                                    </div>
                                    <img src='images/camera.jpg' alt='camera' />
                                </div>
                                <div className='d-flex gap-30 align-items-center'>
                                    <div>
                                        <h6>Smart Television</h6>
                                        <p>10 Items</p>
                                    </div>
                                    <img src='images/camera.jpg' alt='camera' />
                                </div>
                                <div className='d-flex gap-30 align-items-center'>
                                    <div>
                                        <h6>Smartwatches</h6>
                                        <p>10 Items</p>
                                    </div>
                                    <img src='images/camera.jpg' alt='camera' />
                                </div>
                                <div className='d-flex gap-30 align-items-center'>
                                    <div>
                                        <h6>Music & Gaming</h6>
                                        <p>10 Items</p>
                                    </div>
                                    <img src='images/camera.jpg' alt='camera' />
                                </div>
                                <div className='d-flex gap-30 align-items-center'>
                                    <div>
                                        <h6>Mobile & Tablets</h6>
                                        <p>10 Items</p>
                                    </div>
                                    <img src='images/camera.jpg' alt='camera' />
                                </div>
                                <div className='d-flex gap-30 align-items-center'>
                                    <div>
                                        <h6>Headphones</h6>
                                        <p>10 Items</p>
                                    </div>
                                    <img src='images/camera.jpg' alt='camera' />
                                </div>
                                <div className='d-flex gap-30 align-items-center'>
                                    <div>
                                        <h6>Accessories</h6>
                                        <p>10 Items</p>
                                    </div>
                                    <img src='images/camera.jpg' alt='camera' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='featured-wrapper py-5 home-wrapper-2'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <h3 className='section-heading'>Featured Collection</h3>
                        </div>
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                    </div>
                </div>
            </section>
            <section className='famous-wrapper py-5 home-wrapper-2'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-3'>
                            <div className='famous-card position-relative'>
                                <img src='images/apple-watch.jfif' className='img-fluid' alt='famous' />
                                <div className='famous-content position-absolute'>
                                    <h5>Big Screen</h5>
                                    <h6>Smart watch series 7</h6>
                                    <p>From $399 or $16.62/mo. for 24 mo.</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-3'>
                            <div className='famous-card position-relative'>
                                <img src='images/apple-watch.jfif' className='img-fluid' alt='famous' />
                                <div className='famous-content position-absolute'>
                                    <h5>Big Screen</h5>
                                    <h6>Smart watch series 7</h6>
                                    <p>From $399 or $16.62/mo. for 24 mo.</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-3'>
                            <div className='famous-card position-relative'>
                                <img src='images/apple-watch.jfif' className='img-fluid' alt='famous' />
                                <div className='famous-content position-absolute'>
                                    <h5>Big Screen</h5>
                                    <h6>Smart watch series 7</h6>
                                    <p>From $399 or $16.62/mo. for 24 mo.</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-3'>
                            <div className='famous-card position-relative'>
                                <img src='images/apple-watch.jfif' className='img-fluid' alt='famous' />
                                <div className='famous-content position-absolute'>
                                    <h5>Big Screen</h5>
                                    <h6>Smart watch series 7</h6>
                                    <p>From $399 or $16.62/mo. for 24 mo.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='special-wrapper py-5 home-wrapper-2'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <h3 className='section-heading'>Special Product</h3>
                        </div>
                    </div>
                    <div className='row'>
                        <SpecialProduct />
                        <SpecialProduct />
                        <SpecialProduct />
                        <SpecialProduct />
                    </div>
                </div>
            </section>
            <section className='popular-wrapper py-5 home-wrapper-2'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <h3 className='section-heading'>Our Popular Product</h3>
                        </div>
                    </div>
                    <div className='row'>
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                    </div>
                </div>
            </section>
            <section className='marque-wrapper home-wrapper-2 py-5'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='marquee-inner-wrapper' card-wrapper>
                                <Marquee className='d-flex'>
                                    <div className='mx-4 ww-25'><img src='images/brand-01.png' alt='brand' /></div>
                                    <div className='mx-4 ww-25'><img src='images/brand-02.png' alt='brand' /></div>
                                    <div className='mx-4 ww-25'><img src='images/brand-03.png' alt='brand' /></div>
                                    <div className='mx-4 ww-25'><img src='images/brand-04.png' alt='brand' /></div>
                                    <div className='mx-4 ww-25'><img src='images/brand-05.png' alt='brand' /></div>
                                    <div className='mx-4 ww-25'><img src='images/brand-06.png' alt='brand' /></div>
                                    <div className='mx-4 ww-25'><img src='images/brand-07.png' alt='brand' /></div>
                                    <div className='mx-4 ww-25'><img src='images/brand-08.png' alt='brand' /></div>
                                </Marquee>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='blog-wrapper py-5 home-wrapper-2'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <h3 className='section-heading'>Ours latest Blogs</h3>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-3'>
                            <BlogCard />
                        </div>
                        <div className='col-3'>
                            <BlogCard />
                        </div>
                        <div className='col-3'>
                            <BlogCard />
                        </div>
                        <div className='col-3'>
                            <BlogCard />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home