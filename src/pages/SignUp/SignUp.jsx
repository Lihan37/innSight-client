import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const SignUp = () => {

    const { createUser } = useContext(AuthContext);
    const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSignUp = event => {
        event.preventDefault();
        const form = new FormData(event.currentTarget);
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');

        setRegisterError('');
        setSuccess('');

        if (password.length < 6) {
            setRegisterError('Password should be at least 6 characters long');
            return;
        } else if (!/[A-Z]/.test(password)) {
            setRegisterError('Password should contain at least one capital letter');
            return;
        } else if (!/[!@#$%^&*()_+[\]{};':"\\|,.<>?]/.test(password)) {
            setRegisterError('Password should contain at least one special character');
            return;
        }

        createUser(email, password)
            .then(result => {
                const user = result.user;
                user.displayName = name;

                setSuccess('User created successfully');
                toast.success('User created successfully');
                console.log('Photo URL:', photo);
            })
            .catch(error => {
                console.error(error);
                setRegisterError(error.message);
                toast.error(error.message);
            })
    }
    return (
        <div className="hero min-h-screen ">
            <div className="hero-content  flex-col lg:flex-row-reverse">

                <div className="card bg-orange-300 flex-shrink-0 w-full max-w-sm shadow-2xl ">
                    <h2 className="text-center items-center text-3xl mt-6 font-semibold">Sign Up!!</h2>
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">

                            <input className="btn btn-primary" type="submit" value="Sign Up" />
                        </div>
                    </form>
                    <p className="p-4">Already have an account?<Link to='/login'> <span className="text-blue-500">Login</span></Link> here.</p>
                </div>
                {registerError && <p>{registerError}</p>}
                <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
            </div>
        </div>
    );
};

export default SignUp;