// src/pages/WelcomePage.js

import React from "react";
import Button from "../Components/Button";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
    const navigate = useNavigate();
    return (
        <div className="min-h-screen flex justify-center bg-gray-100 px-4 py-6">
            <div className="bg-white w-full max-w-md rounded-2xl shadow-lg flex flex-col justify-end min-h-[80vh] p-6">
                <div className="mt-auto">
                    <h1 className="text-4xl font-bold text-gray-800 mb-6">Welcome to PopX</h1>
                    <p className="text-gray-500 text-[20px] mb-8">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    </p>

                    <div className="flex flex-col gap-4">
                        <Button
                            bgColor="bg-purple-600"
                            textColor="text-white"
                            className="cursor-pointer hover:bg-purple-700 h-[50px] text-[18px] mb-2"
                            onClick = {() => navigate("/signup")}
                        >
                            Create Account
                        </Button>

                        <Button
                            bgColor="bg-purple-100"
                            textColor="text-purple-700"
                            className="cursor-pointer hover:bg-purple-200 h-[50px] text-[18px] mb-6"
                            onClick = {() => navigate("/login")}
                        >
                            Already Registered? Login
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
