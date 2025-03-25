import { Outlet, Link } from 'react-router-dom'
import Logo from '../assets/logo.png';
import Profile from '../assets/Group 29.png'
import Message from '../assets/message.png'
import Jobs from '../assets/jobs.png'
import Candidates from '../assets/candidates.png'
import Resumes from '../assets/resumes.png'
import User from '../assets/user.png'
import Leave from '../assets/book-open.png'
import Performance from '../assets/performance.png'
import Payroll from '../assets/payroll.png'
import Logout from '../assets/logout.png'

function AdminNavbar() {
    return (
        <div className="w-1/6 border-none bg-blue-950  ">
            <img src={Logo} className='h-16 pl-7 ' />
            <div className='flex gap-5 justify-center pt-3  items-center text-white'>
                <img src={Profile} className='h-18' />
                <div>
                    <p className='font-bold '>KRIS Admin</p>
                    <span>Admin</span>
                </div>

            </div>
            <div className='text-white'>
                <h1 className='pl-2'>Features</h1>
                <p className='border-none rounded text-black px-5 py-3 bg-yellow-400 text-center mr-4 ml-4 mb-2 mt-2 '><Link to="dashboard">DashBoard</Link></p>
                <div className='flex justify-between p-2'>
                    <div className='flex gap-3'>
                        <img src={Message} />
                        <p>Messages</p>
                    </div>
                    <p className='border-none rounded rounded-full  bg-red-500'>13</p>
                </div>
                <p className='pl-2'>Recruitment</p>
                <div className='flex gap-4 pl-7 p-1 hover:border-none hover:rounded hover:text-black hover:px-5  hover:bg-yellow-400 hover:text-center hover:mr-4 hover:ml-4  hover:mt-2'>
                    <img src={Jobs} />
                    <p>Jobs</p>
                </div>
                <div className='flex gap-3 pl-7 p-1 hover:border-none hover:rounded hover:text-black hover:px-5  hover:bg-yellow-400 hover:text-center hover:mr-4 hover:ml-4  hover:mt-2'>
                    <img src={Candidates} />
                    <p>Candidates</p>
                </div>
                <div className='flex gap-6 pl-7 p-1 hover:border-none hover:rounded hover:text-black hover:px-5  hover:bg-yellow-400 hover:text-center hover:mr-4 hover:ml-4  hover:mt-2'>
                    <img src={Resumes} />
                    <p>Resumes</p>
                </div>
                <p className='pl-2'>Organization</p>
                <div className='flex gap-4 pl-7 p-1 hover:border-none hover:rounded hover:text-black hover:px-5  hover:bg-yellow-400 hover:text-center hover:mr-4 hover:ml-4  hover:mt-2'>
                    <img src={User} />
                    <p>Jobs</p>
                </div>
                <div className='flex gap-3 pl-7 p-1 hover:border-none hover:rounded hover:text-black hover:px-5  hover:bg-yellow-400 hover:text-center hover:mr-4 hover:ml-4  hover:mt-2'>
                    <img src={Leave} />
                    <p><Link to="/leave-management" >LeaveManagement</Link></p>
                </div>
                <div className='flex gap-1 pl-7 p-2 hover:p-1 hover:border-none hover:rounded hover:text-black hover:ml-2 hover:mr-2   hover:bg-yellow-400 hover:text-center  hover:mt-2'>
                    <img src={Performance} />
                    <p>PerformanceManagement</p>
                </div>
                <p className='pl-2'>KRIS Pay</p>
                <div className='flex gap-1 pl-7 p-2 hover:border-none hover:rounded hover:text-black hover:px-5  hover:bg-yellow-400 hover:text-center hover:mr-4 hover:ml-4  hover:mt-2'>
                    <img src={Payroll} />
                    <p>Payroll Management</p>
                </div>
                <div className='flex gap-2 text-center justify-center bg-red-600 p-2 border-none rounded m-2 cursor-pointer'>
                    <img src={Logout} />
                    <p>Logout</p>
                </div>
            </div>
        </div>
    )
}
export default AdminNavbar;