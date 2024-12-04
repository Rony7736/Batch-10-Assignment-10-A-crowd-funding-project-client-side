import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { authContext } from "../../AuthProvider/AuthProvider";

import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { toast } from "react-toastify";

const Login = () => {

    const { setUser, handleLogin, handleGoogleLogin } = useContext(authContext)

    const [error, setError] = useState({})
    const [showPassword, setShowPassword] = useState(false)

    // update email state
    const [emailInput, setEmailInput] = useState("")


    const location = useLocation()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()


        const form = new FormData(e.target)
        const email = form.get("email")
        const password = form.get("password")
        // console.log({email, password});

        // reset error status
        setError("")


        handleLogin(email, password)
            .then(result => {
                const user = result.user
                setUser(user)
                // console.log(user)
                navigate(location?.state ? location.state : "/")
                toast.success("You have successfully Logged In")
            })
            .catch((err) => {
                setError({ ...error, login: err.message })
                toast.error("Password or Email doesn't match")
            });
    }

    const googleLoginHandler = () => {
        handleGoogleLogin()
            .then(res => {
                navigate(location && "/")
            })
    }

    return (
        <div>
            <div className="hero bg-base-200 lg:py-20">
                <div className="hero-content flex-col lg:flex-row-reverse ">
   
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl px-4">
                        <h1 className="text-5xl font-bold text-center pt-6">Login now!</h1>
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name="email" value={emailInput} onChange={(e) => setEmailInput(e.target.value)} className="input input-bordered" required />
                            </div>
                            <div className="form-control relative">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type={showPassword ? "text" : "password"}
                                    placeholder="password" name="password" className="input input-bordered" required />
                                <button onClick={() => setShowPassword(!showPassword)} type="button" className=" btn-xs absolute right-4 top-12">
                                    {
                                        showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>
                                    }
                                </button>

                                {
                                    error.login && (
                                        <label className="label text-sm text-red-600">
                                            {error.login}
                                        </label>)
                                }

                                <label className="label">
                                    <p className="label-text-alt text-red-600 text-sm link link-hover">Forgot password?</p>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-neutral w-60 mx-auto">Login</button>

                            </div>

                        </form>

                        <div className="flex justify-center">
                            <button onClick={googleLoginHandler} className="btn btn-neutral w-60 mx-auto"><FaGoogle size={20}></FaGoogle>Login with Google</button>
                        </div>
                        <p className="p-6 text-center">New to the website? Please <NavLink to="/register" className="underline text-red-500">Register</NavLink></p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;