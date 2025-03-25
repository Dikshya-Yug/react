import { useParams, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import ConfirmationModal from "../../../components/ConfirmationModal";
import { useState } from "react";

function LeaveApplication() {
    const params = useParams();
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();
    const employeeInfo = JSON.parse(localStorage.getItem('employee'));
    const [isOpen, setIsOpen] = useState(false);

    const applyLeave = async (data) => {
        const payload = { ...data, name: employeeInfo.firstname + ' ' + employeeInfo.lastname, type: params.leaveType.charAt(0).toUpperCase() + params.leaveType.slice(1), empId: employeeInfo.id };
        try {
            const response = await axios.post('http://localhost:4000/leaves', payload);
            setIsOpen(true);
        } catch (error) {
            console.log(error);
        }
    };

    const onClose = () => {
        navigate('/employee/leave-history');
    };

    return (
        <div>
            <form onSubmit={handleSubmit(applyLeave)}>
                <div className="bg-blue-100 h-full w-screen">
                    <div className="pt-4">
                        <div className='p-4 bg-white block m-10 flex mt-5'>
                            <nav className='' aria-label='Breadcrumb'>
                                <a href="/" className='pl-6' >Dashboard</a>
                            </nav>
                            <i className="fa-solid fa-chevron-right pl-6 pt-1" ></i>
                            <nav className='' aria-label='Breadcrumb'>
                                <a href="/annual-leave" className='pl-6' >Annual Leave</a>
                            </nav>
                        </div>
                    </div>
                    <div className=' m-auto bg-white w-fit w-xl h-auto pb-10'>
                        <div className='text-center'>
                            <div className='flex  justify-center'>
                                <i className="fa-solid fa-book-open pt-6"></i>
                                <h3 className=' p-4 text-xl'>Leave Application</h3>
                            </div>
                            <p>Fill the required fields below to apply for annual leave.</p>
                        </div>
                        <div className='px-10 '>
                            <p className='py-2'>Leave Type</p>
                            <select value={params.leaveType} disabled id="leaveType" name="leaveType" class="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
                                <option value="annual">Annual Leave</option>
                                <option value="sick">Sick Leave</option>
                                <option value="maternity">Maternity Leave</option>
                                <option value="compassionate">Compassinate Leave</option>
                            </select>
                            <svg class="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" data-slot="icon">
                                <path fill-rule="evenodd" d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                            </svg>
                        </div>
                        <div className='flex justify-between px-10'>
                            <div className='flex flex-col '>
                                <label htmlFor="startDate" className='block w-full'>Start Date</label>
                                <input type="date" name='startDate' className='block bg-blue-100 rounded p-1 px-12' {...register('startDate')} />
                            </div>
                            <div>
                                <label htmlFor="endDate" className='block w-fit'>End Date</label>
                                <input type="date" name="enddate" className='block bg-blue-100 rounded p-1 px-12' {...register('endDate')} />
                            </div>
                        </div>
                        <div className='flex justify-between p-2 pt-2 px-10'>
                            <div className='flex flex-col '>
                                <label htmlFor="startDate" className='block w-full'>Duration</label>
                                <input type="number" placeholder='60' name='startDate' className=' bg-blue-100 rounded p-1 px-5'  {...register('duration')} />
                            </div>
                            <div>
                                <label htmlFor="endDate" className='block w-fit'>Resumption Date</label>
                                <input type="date" name="enddate" className=' bg-blue-100 rounded p-1 px-12'  {...register('resumptionDate')} />
                            </div>
                        </div>
                        <div className='px-10 '>
                            <p className='py-2'>Reason for Leave</p>
                            <input type="text" name="reason" id="reason" placeholder='' className='px-2 p-3 bg-blue-100 w-full rounded'  {...register('reason')} />
                        </div>
                        <div className='px-10 '>
                            <p className='py-2'>Choose Relief Officer</p>
                            <input type="dropdown" name="reason" id="reason" placeholder='' className='px-2 p-1 bg-blue-100 w-full rounded' {...register('reliefOfficer')} />
                        </div>
                        <div className='flex w-full justify-between space-x-6 px-16 p-4'>
                            <button className='bg-green-500 text-center text-white rounded px-20 p-2'>Submit</button>
                            <button className='border-2 border-red-500 rounded text-red-500 rounded px-20 p-2'>Reset</button>
                        </div>
                    </div>
                </div>
            </form>
            <ConfirmationModal isOpen={isOpen} onClose={onClose} description="Your leave application would be reviewed by the admin." />
        </div>
    )
}
export default LeaveApplication;