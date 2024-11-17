import React, { useState } from 'react'
import Meta from '../components/Meta'
import BreadCrumbb from '../components/BreadCrumbb'
import ReactStars from "react-rating-stars-component"

const ProductDetail = () => {
    const [orderedProduct] = useState(true);
    return (
        <>
            <Meta title={"Product Name"} />
            <BreadCrumbb title="Product Name" />
            <div className="main-product-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-6">
                            <div className="main-product-image position-relative">
                                <button className="carousel-control-prev" type="button">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                </button>
                                <img
                                    src="/images/watch.jpg"
                                    alt="Sản phẩm chính"
                                    className="img-fluid rounded-3 shadow-sm w-100"
                                    style={{ height: "400px", objectFit: "cover" }}
                                />
                                <button className="carousel-control-next" type="button">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                </button>
                                <div className="product-badge position-absolute top-0 end-0 m-3">
                                    <span className="badge bg-danger">Sale</span>
                                </div>
                            </div>
                            <div className="other-product-images d-flex justify-content-between mt-4">
                                <div className="thumbnail-wrapper" style={{ width: "23%" }}>
                                    <img
                                        src="/images/watch.jpg"
                                        alt="Ảnh sản phẩm 1"
                                        className="img-fluid rounded-2 border border-secondary p-1 hover-shadow"
                                        style={{ height: "100px", objectFit: "cover" }}
                                    />
                                </div>
                                <div className="thumbnail-wrapper" style={{ width: "23%" }}>
                                    <img
                                        src="/images/watch.jpg"
                                        alt="Ảnh sản phẩm 2"
                                        className="img-fluid rounded-2 border border-secondary p-1 hover-shadow"
                                        style={{ height: "100px", objectFit: "cover" }}
                                    />
                                </div>
                                <div className="thumbnail-wrapper" style={{ width: "23%" }}>
                                    <img
                                        src="/images/watch.jpg"
                                        alt="Ảnh sản phẩm 3"
                                        className="img-fluid rounded-2 border border-secondary p-1 hover-shadow"
                                        style={{ height: "100px", objectFit: "cover" }}
                                    />
                                </div>
                                <div className="thumbnail-wrapper" style={{ width: "23%" }}>
                                    <img
                                        src="/images/watch.jpg"
                                        alt="Ảnh sản phẩm 4"
                                        className="img-fluid rounded-2 border border-secondary p-1 hover-shadow"
                                        style={{ height: "100px", objectFit: "cover" }}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="main-product-details">
                                <div className="border-bottom">
                                    <h3 className="title">
                                        Kids Headphones Bulk 10 Pack Multi Colored For Students
                                    </h3>
                                </div>
                                <div className="border-bottom py-3">
                                    <p className="price">$ 100</p>
                                    <div className="d-flex align-items-center gap-10">
                                        <ReactStars
                                            count={5}
                                            size={24}
                                            value={4}
                                            edit={false}
                                            activeColor="#ffd700"
                                        />
                                        <p className="mb-0 t-review">(2 Reviews)</p>
                                    </div>
                                    <a className="review-btn" href="#review">Write a Review</a>
                                </div>
                                <div className="border-bottom py-3">
                                    <div className="d-flex gap-10 align-items-center my-2">
                                        <h3 className="product-heading">Type :</h3>
                                        <p className="product-data">Watch</p>
                                    </div>
                                    <div className="d-flex gap-10 align-items-center my-2">
                                        <h3 className="product-heading">Brand :</h3>
                                        <p className="product-data">Havells</p>
                                    </div>
                                    <div className="d-flex gap-10 align-items-center my-2">
                                        <h3 className="product-heading">Category :</h3>
                                        <p className="product-data">Watch</p>
                                    </div>
                                    <div className="d-flex gap-10 align-items-center my-2">
                                        <h3 className="product-heading">Tags :</h3>
                                        <p className="product-data">Watch</p>
                                    </div>
                                    <div className="d-flex gap-10 align-items-center my-2">
                                        <h3 className="product-heading">Availability :</h3>
                                        <p className="product-data">In Stock</p>
                                    </div>
                                    <div className="d-flex gap-10 flex-column mt-2 mb-3">
                                        <h3 className="product-heading">Size :</h3>
                                        <div className="d-flex flex-wrap gap-15">
                                            <span className="badge border border-1 bg-white text-dark border-secondary">S</span>
                                            <span className="badge border border-1 bg-white text-dark border-secondary">M</span>
                                            <span className="badge border border-1 bg-white text-dark border-secondary">XL</span>
                                            <span className="badge border border-1 bg-white text-dark border-secondary">XXL</span>
                                        </div>
                                    </div>
                                    <div className="d-flex gap-10 flex-column mt-2 mb-3">
                                        <h3 className="product-heading">Color :</h3>
                                        <div className="d-flex flex-wrap gap-15">
                                            <span className="badge border border-1 bg-danger"></span>
                                            <span className="badge border border-1 bg-success"></span>
                                            <span className="badge border border-1 bg-primary"></span>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center gap-15 flex-row mt-2 mb-3">
                                        <h3 className="product-heading">Quantity :</h3>
                                        <div className="">
                                            <input
                                                type="number"
                                                name=""
                                                min={1}
                                                max={10}
                                                className="form-control"
                                                style={{ width: "70px" }}
                                                id=""
                                            />
                                        </div>
                                        <div className="d-flex align-items-center gap-30 ms-5">
                                            <button className="button border-0" type="submit">
                                                Add to Cart
                                            </button>
                                            <button className="button signup">Buy It Now</button>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center gap-15">
                                        <div>
                                            <img src="/images/wish.svg" alt="wishlist" />
                                        </div>
                                        <div>
                                            <img src="/images/prodcompare.svg" alt="compare" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="description-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <h4>Description</h4>
                            <div className="bg-white p-3">
                                <p>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                    Tenetur nisi similique illum aut perferendis voluptas,
                                    quisquam obcaecati qui nobis officia. Voluptatibus in harum
                                    deleniti labore maxime officia esse eos? Repellat?
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="reviews-wrapper home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <h3 id="review">Reviews</h3>
                            <div className="review-inner-wrapper">
                                <div className="review-head d-flex justify-content-between align-items-end">
                                    <div>
                                        <h4 className="mb-2">Customer Reviews</h4>
                                        <div className="d-flex align-items-center gap-10">
                                            <ReactStars
                                                count={5}
                                                size={24}
                                                value={4}
                                                edit={false}
                                                activeColor="#ffd700"
                                            />
                                            <p className="mb-0">Based on 2 Reviews</p>
                                        </div>
                                    </div>
                                    {orderedProduct && (
                                        <div>
                                            <p className="text-dark text-decoration-underline">
                                                Write a Review
                                            </p>
                                        </div>
                                    )}
                                </div>
                                <div className="review-form py-4">
                                    <h4>Write a Review</h4>
                                    <form action="" className="d-flex flex-column gap-15">
                                        <div>
                                            <ReactStars
                                                count={5}
                                                size={24}
                                                value={4}
                                                edit={true}
                                                activeColor="#ffd700"
                                            />
                                        </div>
                                        <div>
                                            <textarea
                                                name=""
                                                id=""
                                                className="w-100 form-control"
                                                cols="30"
                                                rows="4"
                                                placeholder="Comments"
                                            ></textarea>
                                        </div>
                                        <div className="d-flex justify-content-end">
                                            <button className="button border-0">Submit Review</button>
                                        </div>
                                    </form>
                                </div>
                                <div className="reviews mt-4">
                                    <div className="review">
                                        <div className="d-flex gap-10 align-items-center">
                                            <h6 className="mb-0">Navdeep</h6>
                                            <ReactStars
                                                count={5}
                                                size={24}
                                                value={4}
                                                edit={false}
                                                activeColor="#ffd700"
                                            />
                                        </div>
                                        <p className="mt-3">
                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                            Consectetur fugit ut excepturi quos. Id reprehenderit
                                            voluptatem placeat consequatur suscipit ex. Accusamus dolore
                                            quisquam deserunt voluptate, sit magni perspiciatis quas
                                            iste?
                                        </p>
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

export default ProductDetail