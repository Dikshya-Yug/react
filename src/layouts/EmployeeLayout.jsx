import { Outlet } from "react-router-dom";
import EmployeeNavbar from '../components/EmployeeNavbar';

function EmployeeLayout() {
    return (
        <div>
            <EmployeeNavbar/>
            <Outlet></Outlet>
        </div>
    )
}

export default EmployeeLayout;