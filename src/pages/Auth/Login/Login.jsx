import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../Hooks/useAuth';
import { Link } from 'react-router';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { signInUser } = useAuth();

    const handleLogin = (data) => {
        // console.log(data);
        signInUser(data.email, data.password)
            .then(result => {
                console.log(result);
            })
            .catch(err => {
                console.log(err.message);
            });
    };

    return (
        <div className=''>
            <div>
                <h1 className='text-3xl font-bold text-secondary'>Welcome back</h1>
                <p>Login with ZapShift</p>
            </div>
            <form onSubmit={handleSubmit(handleLogin)}>
                <fieldset className="fieldset w-[300px]">

                    <label className="label">Email</label>
                    <input type="email" className="input" placeholder="Email"
                        {...register('email', { required: true })} />
                    {
                        errors.email?.type === 'required' &&
                        <p className='text-red-500'>Email is required.</p>
                    }

                    <label className="label">Password</label>
                    <input type="password" className="input" placeholder="Password"
                        {...register('password', { required: true, minLength: 6 })} />
                    {
                        errors.password?.type === 'required' &&
                        <p className='text-red-500'>Password is required.</p>
                    }
                    {
                        errors.password?.type === 'minLength' &&
                        <p className='text-red-500'>Password must be at least six characters long.</p>
                    }
                    <div><a className="link link-hover">Forgot password?</a></div>

                    <button className="btn btn-primary text-black mt-4">Login</button>

                    <p>Don't have an account?
                        <Link to={'/register'} className='text-primary hover:text-secondary'> Register</Link>
                    </p>

                </fieldset>
            </form>
        </div>
    );
};

export default Login;
