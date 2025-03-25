import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();
    
    const navigateAdminLogin = () => {
        navigate('/admin');
    };

    const navigateEmpLogin = () => {
        navigate('/employee');
    }

    return (
        <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-400 to-purple-500">
            <div className="bg-white p-10 rounded-2xl shadow-2xl w-96 text-center transform transition duration-500 hover:scale-105">
                <div className="flex justify-center mb-4">
                    <img src="https://www.digitaledify.ai/images/digitaledify-devops-python-digital-marketing-training-hyderabad.webp"/>
                </div>
                <h1 className="text-3xl font-extrabold text-gray-800 mb-6">Welcome</h1>
                <p className="text-gray-600 mb-6">Choose an option to proceed</p>
                <div className="space-y-4">
                    <button onClick={navigateAdminLogin} className="w-full px-4 py-3 text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition duration-300 cursor-pointer">
                        Admin Login
                    </button>
                    <button onClick={navigateEmpLogin} className="w-full px-4 py-3 text-white bg-green-600 rounded-lg shadow-md hover:bg-green-700 transition duration-300 cursor-pointer">
                        Employee Login
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Home;