import logo from "../assets/images/logo.png";

const SignIn = () => {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="content-container sm:w-full md:w-3/4 flex md:flex-row flex-col gap-5 justify-center align-middle py-10">
                <div className="img-content">
                    <img src={logo} className="w-72 md:w-80 lg:w-96 m-auto" alt=""/>
                </div>
                <div className="flex flex-col gap-5 md:flex-1 min-w-60 justify-center align-middle">
                    <div className="form-group">
                        <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900">Username</label>
                        <input type="text" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"  />
                    </div>
                    <div className="form-group">
                        <label htmlFor="passowrd" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                        <input type="password" id="passowrd" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"  />
                    </div>
                    <button className="py-2 px-5 bg-blue-600 rounded-md text-white ">Sign Up</button>
                </div>
            </div>
        </div>
    )
}

export default SignIn;