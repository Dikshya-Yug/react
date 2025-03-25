function AdminDashboard() {
    return (

        <div className='flex'>
            <div className="w-1/4">
                {/* <LeftNavBar /> */}
            </div>
            <div className="w-3/4">
                <div >
                    {/* <TopNavbar /> */}
                    <div className='mx-8'>
                        <p><i class="fa-solid fa-book-open pr-2 my-6"></i>Leave Management</p>
                        <div className='flex justify-between'>
                            <button className='bg-blue-900 rounded-lg text-white p-2 px-12 shadow-lg'>Leave Settings</button>
                            <button className='bg-blue-900 rounded-lg text-white p-2 px-12 shadow-lg'>Leave Recall</button>
                            <button className='bg-blue-900 rounded-lg text-white p-2 px-12 shadow-lg'>Leave History</button>
                            <button className='bg-blue-900 rounded-lg text-white p-2 px-12 shadow-lg '>Relief Officers</button>
                        </div>
                    </div>
                    <div className='bg-blue-900 rounded-xl mx-8 w-4xl h-50 mt-16 content-center'>
                        <h1 className='text-2xl text-white font-bold px-6'>Manage All <span className='text-yellow-500'>Leave Applications</span></h1>
                        <p className='text-white text-sm px-6'>A relaxed employee is a performing employee.</p>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default AdminDashboard;