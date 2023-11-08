import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaGoogle } from "react-icons/fa";
import axios from "axios";


const Login = () => {
    const { signIn, signInWithGoogle } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const [loginError, setLoginError] = useState('');

    const handelLogin = async (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');

        setLoginError('');

        signIn(email, password)
            .then(result => {

                const loggedInUser = result.user;

                console.log('Login successful', loggedInUser);
                const user = { email };
                // navigate(location?.state ? location.state : '/');
                axios.post('http://localhost:5000/jwt', user, { withCredentials: true })
                    .then(res => {
                        console.log(res.data);
                        if (res.data.success) {
                            navigate(location?.state ? location.state : '/');
                        }
                    })
            })
            .catch((error) => {
                console.error('Login error:', error.message);
                setLoginError(error.message);
                toast.error(error.message);
            });

    }

    const handleSignInWithGoogle = () => {
        signInWithGoogle()
            .then((result) => {
                const loggedInUser = result.user;
                console.log('Google Sign-In successful', loggedInUser);
                const user = { email: loggedInUser.email };

                axios.post('http://localhost:5000/jwt', user, { withCredentials: true })
                    .then((res) => {
                        console.log(res.data);
                        if (res.data.success) {
                            navigate(location?.state ? location.state : '/');
                        }
                    })
                    .catch((error) => {
                        console.error('Error while sending user data to the server:', error.message);
                    });
            })
            .catch((error) => {
                console.error('Google Sign-In error:', error.message);
            });
    }


    return (
        <div>


            <form onSubmit={handelLogin}>

                <div className="hero min-h-screen ">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-orange-300">

                        <div className="card-body">
                            <h2 className="text-2xl font-bold text-center italic">Please Login here</h2>
                            <div className="form-control">
                                <label className="laabel">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="Email"
                                    name="email"
                                    className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="Password"
                                    name="password"
                                    className="input input-bordered" required />
                                <label className="label">
                                    <p>Forgot password?</p>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            {loginError && <p className="text-red-500">{loginError}</p>}


                            <p>Please <Link to='/signUp' className="text-blue-700">Sign Up</Link> here</p>

                            <p>Or you can login using google!!</p>

                            <p><button onClick={handleSignInWithGoogle} className='btn w-full hover:text-gray-600 bg-purple-700 text-yellow-200'>Google Login <FaGoogle></FaGoogle></button></p>
                        </div>
                    </div>
                </div>

            </form>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={true}
                rtl={false}
                pauseOnFocusLoss={false}
                draggable={true}
                pauseOnHover={true}
            />
        </div>
    );
};

export default Login;