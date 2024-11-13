import React from 'react'
import { Link } from 'react-router-dom';

const BlogCard = () => {
    return (
        <div className='blog-card'>
            <div className='card-image'>
                <img src='images/blog-1.jpg' className='img-fluid w-100' alt='blog' />
            </div>
            <div className='blog-content'>
                <p className='date'>27 Dec, 2023</p>
                <h5 className='title'>Lorem ipsum dolor sit amet</h5>
                <p className='desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <Link to='' className='button'>Read More</Link>
            </div>
        </div>
    )
}

export default BlogCard;