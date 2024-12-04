
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { toast } from "react-toastify";
import { FaEye } from "react-icons/fa"
import { FaEyeSlash } from "react-icons/fa";
import { useContext, useState } from "react";
import { authContext } from "../../AuthProvider/AuthProvider";

const Register = () => {

    const contextData = useContext(authContext)
    const { handleRegister, setUser, updateUSerProfile, handleGoogleLogin } = contextData

    const [error, setError] = useState({})
    const [showPassword, setShowPassword] = useState(false)

    const location = useLocation()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        //  error status
        setError("")

        const form = new FormData(e.target)
        const name = form.get("name")

        const email = form.get("email")
        const image = form.get("image")
        const password = form.get("password")
        // console.log({name, email, image, password});

        if (password.length < 6) {
            setError({ ...error, login: "Password should be 6 characters or longer" })
            toast.error("Password should be 6 characters or longer")
            return
        }

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).+$/;
        if (!passwordRegex.test(password)) {
            setError({ ...error, login: "Password at least one uppercase and one lowercase" })
            toast.error("Password at least one uppercase and one lowercase")
            return
        }


        handleRegister(email, password)
            .then(result => {
                const user = result.user
                setUser(user)
                // console.log(user)
                navigate(location && "/")
                toast.success("You have successfully Registered and Logged In")
                updateUSerProfile({ displayName: name, photoURL: image })
                    .then(() => {
                        navigate("/")
                    })
                    .catch(err => {
                        setError(err)
                    })
            })
            .catch((err) => {
                const errorMessage = err.message;
                setError({ ...error, login: err.message })
                toast.error(errorMessage)
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
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <img className="lg:ml-12 rounded-3xl" src="" alt="" />

                    </div>

                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl my-10">
                        <h1 className="text-4xl font-bold text-center pt-6">Register now!</h1>
                        <form onSubmit={handleSubmit} className="card-body">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="name" name="name" className="input input-bordered" required />
                            </div>
                            {
                                error.name &&
                                <label className="label text-xs text-red-600">
                                    {error.name}
                                </label>
                            }

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" placeholder="photo url" name="image" className="input input-bordered" required />
                            </div>

                            <div className="form-control relative">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type={showPassword ? "text" : "password"}
                                    placeholder="Password" name="password" className="input input-bordered" required />
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
                            </div>

                            <div className="form-control mt-6">
                                <button type="submit" className="btn btn-neutral w-60 mx-auto">Register</button>
                            </div>

                        </form>

                        <div className="flex justify-center">
                            <button onClick={googleLoginHandler} className="btn btn-neutral w-60 mx-auto"><FaGoogle size={20}></FaGoogle>Login with Google</button>
                        </div>

                        <p className="p-6 text-center">Already Have An Account? Please <NavLink to="/login" className="underline text-red-500">Login</NavLink></p>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Register;


