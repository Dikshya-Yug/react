import { Outlet } from "react-router-dom";
import AdminNavbar from "../components/AdminNavbar";
import Group47 from '../assets/Group 47.png'
import Group4 from '../assets/Group 4.png'
import Group28 from '../assets/Group 28.png'
import Group30 from '../assets/Group 30.png'

function AdminLayout() {
    return (
        <div className="flex min-h-screen bg-sky-100">
            <AdminNavbar />
            <div className="w-5/6">
                <div className='flex justify-between text-center items-center p-1'>
                    <div>
                        <img src={Group47} />
                    </div>
                    <div className='text-white'>
                        <input type="number" placeholder='allCandidates' className='px-2 py-2 bg-blue-900 text-white' />
                        <input type='search' className='bg-white px-28 py-2 text-gray-500' placeholder='search.....' />
                    </div>
                    <div className='flex'>
                        <img src={Group4} />
                        <img src={Group28} />
                        <img src={Group30} />
                    </div>
                </div>
                <Outlet />
            </div>
        </div>
    )
}

export default AdminLayout;