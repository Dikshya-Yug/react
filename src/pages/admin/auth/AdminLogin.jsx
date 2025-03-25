import logo from '../../../assets/logo.png';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function AdminLogin() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [errorMsg, setErrorMsg] = useState(null);
    const [employees, setEmployees] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getEmployees();
    }, []);

    const getEmployees = async () => {
        try {
            const response = await axios.get('http://localhost:4000/employees?role=admin');
            setEmployees(response.data);
        } catch(error) {
            console.log(error);
        }
    };

    const handleLogin = async (formData) => {
       const filteredEmployee = employees.find(employee => employee.email === formData.email && employee.password === formData.password);
       if (filteredEmployee) {
        navigate('/employee/dashboard');
       } else {
        setErrorMsg('Incorrect email or password');
       }
    };

    return (
        <form onSubmit={handleSubmit(handleLogin)}>
            <main className=" bg-blue-950 min-h-screen  md:col-span-4 ">
                <div className='mb-10'>
                    <img className='max-w-50' src={logo} />
                </div>
                <div className='flex items-center justify-center'>
                    <div className=" justify-items-center w-full">
                        <h1 className="text-4xl font-bold text-white ">Login</h1>
                        <p className="text-lg  text-white mt-3">Login to your account.</p>
                        {errorMsg && <p className='md:mt-4 text-red-500 text-md mb-2 text-center'>{errorMsg}</p>}
                        <div className="w-4/6 md:w-1/4 mt-6">
                            <label htmlFor="E-mail-Address" className="block  text-sm font-medium text-white">E-mail Address</label>
                            <input {...register('email', {
                                        required: { value: true, message: 'Email is required' },
                                        pattern: { value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/, message: 'Incorrect email format' }
                                    })} type="email" name="email" className="block mt-2 border border-white bg-white py-2 w-full" autoComplete="E-mail-Address" />
                            <p className='text-sm text-red-500'>{errors.email?.message}</p>
                        </div>
                        <div className="w-5/6 md:w-1/4 mt-6 ">
                            <label htmlFor="password" className="block  text-sm font-medium text-white mt-2">Passsword</label>
                            <input {...register('password', { required: { value: true, message: 'Password is required' }, pattern: { value: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/, message: 'Incorrect password format' } })} type="password" name="password" className="block  mt-2 border border-white bg-white py-2 w-full" autoComplete="password" />                                                        
                            <p className='text-sm text-red-500'>{errors.password?.message}</p>
                        </div>
                        <div className=" container w-1/4 md:w-1/4 md:flex justify-between items-center mt-6">
                            <div className=" container flex justify-between items-center">
                                <div className="">
                                    <input type="checkbox" name="remember" id="remember" />
                                    <label htmlFor="remember" className="text-white ">Remember me</label>
                                </div>
                                <p className="text-white text-sm">Reset Password?</p>
                            </div>
                        </div>
                        <div className="w-5/6  md:w-1/4">
                            <button type="submit" className=" block mt-9 border  bg-yellow-400 font-medium text-xl py-2 w-full">SignIn</button>
                        </div>
                    </div>
                </div>
            </main>
        </form>
    )
}

export default AdminLogin;