import React, { useState } from 'react'
import Meta from '../components/Meta'
import BreadCrumbb from '../components/BreadCrumbb'
import { Link } from 'react-router-dom'

const ForgotPassword = () => {
    const [email, setEmail] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        // Handle forgot password logic here
    }

    return (
        <>
            <Meta title={"Quên mật khẩu"} />
            <BreadCrumbb title="Quên mật khẩu" />
            <div className="login-wrapper home-wrapper-2 py-5 d-flex align-items-center justify-content-center">
                <div className="container-xxl">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="login-container">
                                <h2 className="text-center mb-4">Quên mật khẩu</h2>
                                <p className="text-center mb-4">
                                    Chúng tôi sẽ gửi email để đặt lại mật khẩu cho bạn
                                </p>
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group mb-3">
                                        <input
                                            type="email"
                                            className="form-control"
                                            placeholder="Email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <Link to="/login">Hủy</Link>
                                        <button type="submit" className="button border-0">
                                            Gửi
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ForgotPassword