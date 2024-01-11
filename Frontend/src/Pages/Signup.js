import { IoChevronForward, IoChevronBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import "../App.css";

async function registerUser(credentials) {
    return fetch('http://localhost:3000/api/auth/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    }).then(data => data.json())
}

const Signup = ({ setToken }) => {
    const navigate = useNavigate();
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        const token = await registerUser({
            username: username,
            email: email,
            password: password
        });
        if(token['token']) setToken(token);
        else alert(JSON.stringify(token));
 
    }

    return (
        <div className="w-1/3 bg-gray-50 shadow-md flex flex-col justify-center items-center px-10">
            <div className="font-semibold text-4xl mb-4">CoreCollect</div>
            <div className="font-semibold text-2xl mb-1">Sign Up</div>
            <div className="font-semibold text-lg ">
                Or{" "}
                <span
                    className="text-orange-600 cursor-pointer"
                    onClick={() => {
                        navigate("/auth/login");
                    }}
                >
                    Already have an account?
                </span>
            </div>
            <div className="w-full mt-5">
                <div className="font-medium text-lg">Username</div>
                <div className="rounded-md h-14 w-full bg-gray-200 mt-2 justify-center items-center px-4 flex">
                    <input
                        type={"text"}
                        className="bg-transparent w-full text-lg outline-none"
                        onChange={e => setUsername(e.target.value)}
                    />
                </div>
            </div>
            <div className="w-full mt-5">
                <div className="font-medium text-lg">Email</div>
                <div className="rounded-md h-14 w-full bg-gray-200 mt-2 justify-center items-center px-4 flex">
                    <input
                        type={"text"}
                        className="bg-transparent w-full text-lg outline-none"
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>
            </div>
            <div className="w-full mt-5">
                <div className="flex flex-row justify-between">
                    <div className="font-medium text-lg">Password</div>
                </div>
                <div className="rounded-md h-14 w-full bg-gray-200 mt-2 justify-center items-center px-4 flex">
                    <input
                        type={"password"}
                        className="bg-transparent w-full text-lg outline-none"
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>

                <div className="bg-orange-600 rounded-md w-full h-14 mt-8 justify-center items-center flex cursor-pointer"
                    onClick={() => handleSubmit()}>
                    {" "}
                    <div className="text-lg text-gray-50 font-semibold">
                        Sign Up
                    </div>
                </div>
            </div>
        </div>
    );
};

Signup.propTypes = {
    setToken: PropTypes.func.isRequired
}


export default Signup;
