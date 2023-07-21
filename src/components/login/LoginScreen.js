import React from 'react'

const LoginScreen = () => {
    return (
        <div className='full-screen'>
            <div className='w-fit mx-auto p-2 rounded overflow-hidden grid grid-cols-2 px-20 my-auto'>
                <form className='flex flex-col gap-4'>
                    <h4>Login</h4>
                    <input className='outline-none focus:border-none focus:ring-2 w-full p-2 border-2 border-slate-100 rounded focus:ring-indigo-400' type="text" placeholder='Email' />
                    <input className='outline-none focus:border-none focus:ring-2 w-full p-2 border-2 border-slate-100 rounded focus:ring-indigo-400' type="password" placeholder='Password' />
                </form>
                <form>
                    <h4>Register</h4>
                    <input type="text" placeholder='Enter your email' />
                </form>

            </div>
        </div>
    )
}

export default LoginScreen
