import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
function LeaveHistory() {
    const [leaveHistory, setLeaveHistory] = useState([]);
    const employeeInfo = JSON.parse(localStorage.getItem('employee'));
    useEffect(() => {
        getLeaveHistory();
    }, []);
    const getLeaveHistory = async () => {
        try {
            const response = await axios.get('http://localhost:4000/leaves?empId=' + employeeInfo.id);
            setLeaveHistory(response.data);
        } catch(error) {
            console.log(error);
        }
    };
    return (
        <div className="bg-blue-100 h-fit w-screen">
            <div className="pt-4">
                <div className='flex p-4 bg-white block m-10 mt-5'>
                    <nav className='' aria-label='Breadcrumb'>
                        <a href="/" className='pl-6' >Dashboard</a>
                    </nav>
                    <i className="fa-solid fa-chevron-right pl-6 pt-1" ></i>
                    <nav className='' aria-label='Breadcrumb'>
                        <a href="/sick-leave" className='pl-6' >Apply For Leave</a>
                    </nav>
                </div>
            </div>
            <div>
                <div className='bg-white m-10 h-fit pb-10'>
                    <h3 className='pl-6 p-4'>Leave Application</h3>
                    <div className='flex justify-between mx-6 items-center'>
                        <div className='bg-blue-900 text-white flex mt-2 rounded-lg pr-4'>
                            <div className='w-10 h-10 text-2xl m-4 bg-white rounded-full text-blue-900 mt-2 text-center mt-5'>
                                <p className=' '>60</p>
                            </div>
                            <div >
                                <p className='items-center pl-5'>Annual Leave</p>
                                <button className='bg-yellow-500 text-black rounded-full p-1 m-2 mx-6 px-5 '><Link to="/employee/leave-application/annual">Apply</Link></button>
                            </div>
                        </div>
                        <div>
                            <div className='bg-blue-900 text-white flex mt-2 rounded-lg pr-4'>
                                <div className='w-10 h-10 text-2xl m-4 bg-white rounded-full text-blue-900 mt-2 text-center mt-5'>
                                    <p className=' '>20</p>
                                </div>
                                <div >
                                    <p className='items-center pl-7'>Sick Leave</p>
                                    <button className='bg-yellow-500 text-black rounded-full p-1 m-2 mx-6 px-5 '><Link to="/employee/leave-application/sick">Apply</Link></button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='bg-blue-900 text-white flex mt-2 rounded-lg pr-4'>
                                <div className='w-10 h-10 text-2xl m-4 bg-white rounded-full text-blue-900 mt-2 text-center mt-5'>
                                    <p className=' '>60</p>
                                </div>
                                <div >
                                    <p className='items-center pl-5'>Maternity Leave</p>
                                    <button className='bg-yellow-500 text-black rounded-full p-1 m-2 mx-6 px-5 '><Link to="/employee/leave-application/maternity">Apply</Link></button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='bg-blue-900 text-white flex mt-2 rounded-lg pr-4'>
                                <div className='w-10 h-10 text-2xl m-4 bg-white rounded-full text-blue-900 mt-2 text-center mt-5'>
                                    <p className=' '>30</p>
                                </div>
                                <div >
                                    <p className='items-center pl-5'>Compassionate Leave</p>
                                    <button className='bg-yellow-500 text-black rounded-full p-1 m-2 mx-6 px-5 '><Link to="/employee/leave-application/compassionate">Apply</Link></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-between p-4 mt-4 pr-6'>
                        <h3 className='font-semibold mx-6'>Leave History</h3>
                        <p>filter icon</p>
                        <button className='bg-green-700 rounded-lg px-8 text-white p-1 '>Export</button>
                    </div>
                    <div>
                        <table className='w-full px-6'>
                            <thead>
                                <tr className='flex justify-between bg-blue-100 rounded-lg mx-6'>
                                    <th className="px-10 py-2">Name(s)</th>
                                    <th className="px-10 py-2">Duration(s)</th>
                                    <th className="px-10 py-2">Start Date</th>
                                    <th className="px-10 py-2">End Date</th>
                                    <th className="px-10 py-2">Type</th>
                                    <th className="px-10 py-2">Reason(s)</th>
                                    <th className="px-16 py-2 p-1">Actions</th>
                                </tr>
                            </thead>
                            <tdata>
                                {leaveHistory.map(item => (
                                    <tr className='flex justify-between rounded-lg mx-6'>
                                        <td className="px-10 py-2">{item.name}</td>
                                        <td className="px-10 py-2">{item.duration}</td>
                                        <td className="px-10 py-2">{item.startDate}</td>
                                        <td className="px-10 py-2">{item.endDate}</td>
                                        <td className="px-10 py-2">{item.type}</td>
                                        <td className="px-10 py-2">{item.reason}</td>
                                        <td className="px-10 py-2"><button className='bg-blue-900 text-white px-6 p-1 rounded'>Actions</button></td>
                                    </tr>
                                ))}
                            </tdata>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default LeaveHistory;