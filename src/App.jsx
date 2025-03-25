import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css'
import Home from './pages/Home';

import AdminLayout from './layouts/AdminLayout';
import AdminLogin from './pages/admin/auth/AdminLogin';

import EmployeeLayout from './layouts/EmployeeLayout';
import EmployeeLogin from './pages/employees/auth/EmployeeLogin';
import EmployeeRegister from './pages/employees/auth/EmployeeRegister';
import EmployeeDashboard from './pages/employees/dashboard/Dashboard';
import LeaveHistory from './pages/employees/leaves/LeaveHistory';
import LeaveApplication from './pages/employees/leaves/LeaveApplication';
import AdminDashboard from './pages/admin/dashboard/Dashboard';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/admin" element={<AdminLayout/>}>
          <Route path="" element={<AdminLogin/>}></Route>
          <Route path="dashboard" element={<AdminDashboard/>}></Route>
        </Route>

        <Route path="/employee" element={<EmployeeLayout/>}>
          <Route path="" element={<EmployeeLogin/>}></Route>
          <Route path="register" element={<EmployeeRegister/>}></Route>
          <Route path="dashboard" element={<EmployeeDashboard/>}></Route>
          <Route path="leave-history" element={<LeaveHistory/>}></Route>
          <Route path="leave-application/:leaveType" element={<LeaveApplication/>}></Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App
