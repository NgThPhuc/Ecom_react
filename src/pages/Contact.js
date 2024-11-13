import React from 'react'
import Meta from '../components/Meta'
import BreadCrumbb from '../components/BreadCrumbb'
import { Link } from 'react-router-dom'
import { AiOutlineHome } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";
import { IoMailOutline } from "react-icons/io5";

import { IoInformationCircleOutline } from "react-icons/io5";



const Contact = () => {
    return (
        <>
            <Meta title={"Contact"} />
            <BreadCrumbb title="Contact" />
            <div className='contact-wrapper py-5 home-wrapper-2'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.814072162107!2d105.77512207625132!3d21.040124180612107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454cbb53a03d7%3A0x8d023dedf103a93a!2zTmcuIDEwNSBQLiBEb8OjbiBL4bq_IFRoaeG7h24sIE1haSBE4buLY2gsIEPhuqd1IEdp4bqleSwgSMOgIE7hu5lpLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1731484252621!5m2!1svi!2s"
                                width="600"
                                height="450"
                                className="border-0 w-100"
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Google Map Location"
                            ></iframe>
                        </div>
                        <div className='col-12 mt-5'>
                            <div className='contact-iiner-wrapper d-flex justify-content-between'>
                                <div>
                                    <h3 className='contact-title'>Contact</h3>
                                    <form action='' className='d-flex flex-column gap-15'>
                                        <div>
                                            <input type='text' className='form-control' placeholder='Name' />
                                        </div>
                                        <div>
                                            <input type='text' className='form-control' placeholder='Email Number' />
                                        </div>
                                        <div>
                                            <input type='text' className='form-control' placeholder='Mobile Number' />
                                        </div>
                                        <div>
                                            <textarea name='' id='' className='w-100 form-control' placeholder='Comments' cols={"30"} rows={"14"}></textarea>
                                        </div>

                                    </form>
                                    <Link className='button mt-3'>Submit</Link>
                                </div>
                                <div>
                                    <h3 className='contact-title'>Get in touch with us</h3>
                                    <div>
                                        <ul className='ps-0'>
                                            <li className='mb-3 d-flex gap-15 align-items-center'><AiOutlineHome className='fs-5' />
                                                <address className='mb-0'>Doan Ke Thien, Mai Dich, Cau Giay, Ha Noi </address>
                                            </li>
                                            <li className='mb-3 d-flex gap-15 align-items-center'><FiPhoneCall className='fs-5' />
                                                <a href='tel: +84 329994252'> +84 329994252</a>
                                            </li>
                                            <li className='mb-3 d-flex gap-15 align-items-center'><IoMailOutline className='fs-5' />
                                                <a href='mailto: nguyenphuch5p@gmial.com'> nguyenphuch5p@gmail.com</a></li>
                                            <li className='mb-3 d-flex gap-15 align-items-center'><IoInformationCircleOutline className='fs-5' />
                                                <p className='mb-0'>Monday - Friday 10Am - 8 PM</p>
                                            </li>
                                        </ul>
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

export default Contact