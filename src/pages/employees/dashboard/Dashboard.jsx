import { FaUserAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom';

function Dashboard() {
    return (
        <div className="bg-blue-100 h-fit w-screen">
            <div>
                <h2 className='text-blue-900 p-4 pl-16 font-bold'>Dashboard</h2>
                <div className='m-auto relative text-white flex bg-blue-900 rounded-xl p-8 items-center w-full max-w-6xl shadow-lg'>
                    <div > {/**w-full max-w-4xl mx-auto shadow-lg */}
                        <FaUserAlt className='border rounded-full p-1 bg-yellow-500 text-white h-20 w-auto' />
                    </div>
                    <div className='p-6'>
                        <h2 className='font-bold text-xl p-1'>John Doe</h2>
                        <h4>UI / UX Designer & UX Writer</h4>
                    </div>
                    <div className='items-center pl-60'>
                        <button className='bg-yellow-500 text-black rounded-lg p-2 px-8 ml-20 font-semibold'>Edit Profile</button>
                    </div>
                </div>
            </div>
            <div>
                <h2 className='text-black p-4 pl-16 font-semibold '>Quick Actions</h2>
                <div className='flex justify-between mx-16'>
                    <button className='rounded-3xl p-3 px-6 m-2 bg-white shadow-lg'><Link to="/employee/leave-history">Apply For Leave</Link></button>
                    <button className='rounded-3xl p-3 px-6 m-2 bg-white shadow-lg'>KPI Goals</button>
                    <button className='rounded-3xl p-3 px-6 m-2 bg-white shadow-lg'>Take Appraisal</button>
                    <button className='rounded-3xl p-3 px-6 m-2 bg-white shadow-lg'>View Payslip</button>
                    <button className='rounded-3xl p-3 px-6 m-2 bg-white shadow-lg'>Update Profile</button>
                    <button className='rounded-3xl p-3 px-6 m-2 bg-white shadow-lg'>Events</button>
                </div>
            </div>

            <div className='flex m-auto justify-between w-full max-w-6xl space-x-12 p-8'>
                <div className='bg-white w-xl h-fit shadow-xl rounded-lg pb-6' >
                    <div className='flex justify-between'>
                        <h1 className='font-semibold text-gray-500 p-4 ml-2'>Available Leave Days</h1>
                        <span className='text-xl text-gray-500 font-black pr-6 pt-4'>⋮</span>
                    </div>

                    <div>
                        <div className='mx-6 flex justify-between text-gray-500'>
                            <p>Annual Leave</p>
                            <p> 10 of 60 day(s)</p>
                        </div>
                        <div className='mx-6 m-3 w-auto bg-gray-300 h-3 rounded overflow-hidden '>
                            <div className="bg-blue-900 h-full rounded-full"></div>
                        </div>
                        <div className='mx-6 flex justify-between text-gray-500'>
                            <p>Sick Leave</p>
                            <p> 0 of 10 day(s)</p>
                        </div>
                        <div className='mx-6 m-3 w-auto bg-gray-300 h-3 rounded overflow-hidden '>
                            <div className="bg-blue-900 h-full rounded-full"></div>
                        </div>
                        <div className='mx-6 flex justify-between text-gray-500'>
                            <p>Compassionate Leave</p>
                            <p> 8 of 15 day(s)</p>
                        </div>
                        <div className='mx-6 m-3 w-auto bg-gray-300 h-3 rounded overflow-hidden'>
                            <div className="bg-blue-900 h-full rounded-full"></div>
                        </div>
                    </div>
                </div>
                <div className='bg-white w-xl h-fit size-auto shadow-xl rounded-lg '>
                    <div className='flex justify-between'>
                        <h1 className='font-semibold text-gray-500 p-4 ml-2'>To-dos</h1>
                        <span className='text-xl text-gray-500 font-black pr-6 pt-4'>⋮</span>
                    </div>
                    <div className='bg-blue-50 rounded text-gray-400 mx-6 p-1 m-2'><p className=''>Complete Onboarding Document Upload</p></div>
                    <div className='bg-blue-50 rounded text-gray-400 mx-6 p-1 m-2'><p>Follow up on clients on documents</p></div>
                    <div className='bg-blue-50 rounded text-gray-400 mx-6 p-1 m-2'><p>Design wireframes for LMS</p></div>
                    <div className='bg-blue-50 rounded text-gray-400 mx-6 p-1 m-2'><p>Create case study for next IT project</p></div>
                    <div className='bg-blue-50 rounded text-gray-400 mx-6 p-1 m-2'><p>Follow up on clients on documents</p></div>
                </div>
            </div>

            <div className='flex m-auto justify-between w-full max-w-6xl space-x-12 p-8'>
                <div className=' bg-white w-xl h-fit shadow-xl rounded-lg ' >
                    <div className='flex justify-between'>
                        <h1 className='font-semibold text-gray-500 p-4 ml-2'>Announcement(s)</h1>
                        <span className='text-xl text-gray-500 font-black pr-6 pt-4'>⋮</span>
                    </div>
                    <div className='bg-blue-50 rounded text-gray-400 mx-6 p-1 m-2'><p className=''>Welcome Jill Hilson - We have a new staff joining us</p></div>
                    <div className='bg-blue-50 rounded text-gray-400 mx-6 p-1 m-2'><p className=''>Sendforth for Project Manager: kindly gather at the meeting hall</p></div>
                    <div className='bg-blue-50 rounded text-gray-400 mx-6 p-1 m-2'><p className=''>Marriage Alert</p></div>
                    <div className='bg-blue-50 rounded text-gray-400 mx-6 p-1 m-2'><p className=''>Office Space Update</p></div>
                </div>
                <div className='bg-white w-xl h-fit shadow-xl rounded-lg '>
                    <div className='flex justify-between'>
                        <h1 className='font-semibold text-gray-500 p-4 ml-2'>April Payslip Breakdown</h1>
                        <span className='text-xl text-gray-500 font-black pr-6 pt-4'>⋮</span>
                    </div>
                    <table className="table-fixed text-gray-500">
                        <thead >
                            <tr className='justify-center'>
                                <th className='p-1'>Earning</th>
                                <th>Amount</th>
                                <th>Deduction</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Basic Wage</td>
                                <td>150,000</td>
                                <td>-30,000</td>
                                <td>120,000</td>
                            </tr>
                            <tr>
                                <td>Tax</td>
                                <td>15,000</td>
                                <td>-3,000</td>
                                <td>12,000</td>
                            </tr>
                            <tr>
                                <td>Pension</td>
                                <td>15,000</td>
                                <td>-3,000</td>
                                <td>12,000</td>
                            </tr>
                            <tr>
                                <td>Total Earnings</td>
                                <td>150,000</td>
                                <td>-36,000</td>
                                <td>114,000</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
}

export default Dashboard;