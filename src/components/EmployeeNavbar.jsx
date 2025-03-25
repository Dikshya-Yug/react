import logo from '../assets/logo-blue.png';
import { FaBell, FaEnvelope, FaUserAlt } from 'react-icons/fa';

function EmployeeNavbar() {
    return (
        <div>
            <div className="bg-blue-100 h-fit w-screen">
                <nav className="bg-white p-2 static">
                    <div className="m-2 flex relative justify-between items-center font-semibold">
                        <div className="flex pt-2">
                            <img src={logo} alt="KRIS Logo" className='h-8 pl-6' />
                        </div>
                        <div className="flex space-x-8 pt-2">
                            <a href="#" className=''>Dashboard</a>
                            <a href="#">Requests</a>
                            <a href="#">Payroll</a>
                            <a href="#">Company</a>
                            <a href="#">Extras</a>
                        </div>
                        <div className="flex space-x-12 pr-3 pt-2 ">
                            <a href="#" className='border rounded-full p-2 bg-blue-900 text-white'><FaBell /></a>
                            <a href="#" className='border rounded-full p-2 bg-green-700 text-white'><FaEnvelope /></a>
                            <a href="#" className='border rounded-full p-2 bg-yellow-500 text-white'><FaUserAlt /></a>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}
export default EmployeeNavbar;