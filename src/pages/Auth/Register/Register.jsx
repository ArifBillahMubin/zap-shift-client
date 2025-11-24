import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../Hooks/useAuth';
import { Link } from 'react-router';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { registerUser } = useAuth();

    const handleRegistration = (data) => {
        // console.log(registerUser,data)
        registerUser(data.email,data.password)
        .then(result => {
            console.log(result);
        })
        .catch(err =>{
            console.log(err.message);
        })
    }

    return (
        <div className=''>
            <div>
                <h1 className='text-3xl font-bold text-secondary'>Create an Account</h1>
                <p>Register with ZapShift</p>
            </div>
            <form onSubmit={handleSubmit(handleRegistration)}>
                <fieldset className="fieldset w-[300px]">

                    {/* name  */}
                    <label className="label">Name</label>
                    <input type="text" className="input" placeholder="Name" {...register('name',
                        { required: true, minLength: 6 }
                    )} />
                    {
                        errors.name?.type === 'required' && <p className='text-red-500'>Name is required.</p>
                    }
                    {
                        errors.name?.type === 'minLength' && <p className='text-red-500'>Name must contain at least six characters.</p>
                    }


                    {/* email  */}
                    <label className="label">Email</label>
                    <input type="email" className="input" placeholder="Email" {...register('email',
                        { required: true }
                    )} />
                    {
                        errors.email?.type === 'required' && <p className='text-red-500'>A valid email address is required.</p>
                    }

                    {/* password  */}
                    <label className="label">Password</label>
                    <input type="password" className="input" placeholder="Password" {...register('password',
                        { required: true, minLength: 6, pattern: /^(?=.*[A-Z])(?=.*\d).+$/ }
                    )} />
                    {
                        errors.password?.type === 'required' && <p className='text-red-500'>Password is required.</p>
                    }
                    {
                        errors.password?.type === 'minLength' && <p className='text-red-500'>Password must be at least six characters long.</p>
                    }
                    {
                        errors.password?.type === 'pattern' && <p className='text-red-500'>Password must include at least one uppercase letter and one number.</p>
                    }


                    <button className="btn btn-primary text-black mt-4">Registration</button>


                    <p>Already have an account? <Link to={'/login'} className='text-primary hover:text-secondary'>Login</Link></p>
                </fieldset>
            </form>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;
