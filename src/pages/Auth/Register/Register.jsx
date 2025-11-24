import React from 'react';
import { useForm } from 'react-hook-form';

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const handleRegistration = (data) => {
        console.log(data);
    }

    return (
        <div className=''>
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

                    <div><a className="link link-hover">Forgot password?</a></div>

                    <button className="btn btn-neutral mt-4">Login</button>
                </fieldset>
            </form>
        </div>
    );
};

export default Register;
