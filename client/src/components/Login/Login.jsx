import React from "react";

function Login(){
    return (
        <>
            <div className="w-full h-screen flex flex-wrap justify-start font-poppins">
                <div className="w-1/2 h-screen top-0">
                    <img src="https://img.freepik.com/free-vector/user-verification-unauthorized-access-prevention-private-account-authentication-cyber-security-people-entering-login-password-safety-measures_335657-3530.jpg?w=740&t=st=1706354916~exp=1706355516~hmac=72fa2b77016ae8c95d1cf2fc3b72e25eadcf9aaaa46b874bf88b7a9575f05d83" alt="Login Pic"/>
                </div>
                <div className="w-1/2 h-screen top-0 flex flex-wrap justify-center">
                    <div className="rounded-lg p-5 backdrop-blur-sm bg-gray-100/50 w-full max-w-lg mx-auto border border-gray-60 h-3/4 mt-10 flex flex-wrap justify-center">
                        <form id="login-form">
                            <div className="h-40 translate-x-0">
                                <img 
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZH5I13ebwDaTq2oror2DEAsbIlrA8qO3cHQ&usqp=CAU"
                                    className=""
                                />
                            </div>
                            <div className="mt-20">
                                <label htmlFor="Username">
                                    <p className="ml-4 text-gray-500">Username</p>
                                    <input type="text"
                                    id="Username"
                                    className="py-4 px-2 shadow-lg w-64 border-2 border-gray-300 rounded-3xl focus:ring-2 focus:ring-gray-200 focus:outline-none text-md"
                                    />
                                </label>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login