import React from 'react';
import { useDispatch } from 'react-redux';
import { login, logout } from '../features/user'

function Login() {

    const dicpatch = useDispatch()

    return (
        <div>
            <button 
                onClick={() => {
                    dicpatch(login({name:"Audrius", age:43, email: "aaaudrius@gmail.com"}));
                    }} 
                >
                    Login
                </button>

                <button 
                onClick={() => {
                    dicpatch(logout());
                    }} 
                >
                    Logout
                </button>
        </div>
    )
}

export default Login
