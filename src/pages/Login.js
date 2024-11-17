import React, { useState } from 'react'
import Meta from '../components/Meta'
import BreadCrumbb from '../components/BreadCrumbb'
import { Link } from 'react-router-dom'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        // Handle login logic here
    }

    return (
        <>
            <Meta title={"login"} />
            <BreadCrumbb title="Login" />
            <div className="login-wrapper home-wrapper-2 py-5 d-flex align-items-center justify-content-center">
                <div className="container-xxl">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="login-container">
                                <h2 className="text-center mb-4">Đăng nhập</h2>
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
                                    <div className="form-group mb-3">
                                        <input
                                            type="password"
                                            className="form-control"
                                            placeholder="Mật khẩu"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="mb-3 text-end">
                                        <Link to="/forgotpassword">Quên mật khẩu?</Link>
                                    </div>
                                    <button type="submit" className="button border-0 w-100">
                                        Đăng nhập
                                    </button>
                                    <div className="mt-3 text-center">
                                        <span>Chưa có tài khoản? </span>
                                        <Link to="/signup">Đăng ký</Link>
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

export default Login