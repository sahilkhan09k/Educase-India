import React, { useState } from "react";
import Button from "../Components/Button";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff} from "lucide-react";

export default function SigninPage() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isFormValid = email.trim() !== "" && password.trim() !== "";

  const handleSubmit = (e) => {
    e.preventDefault();  // Ensure the default form submission is prevented
    if (isFormValid) {
        navigate("/profile"); // Navigate to the profile page on successful login
    }
};

  return (
    <div className="min-h-screen flex justify-center bg-gray-100 px-4 py-6">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-lg min-h-[80vh] p-6 flex flex-col">
        <div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Sign in to your <br /> PopX account
          </h1>
          <p className="text-gray-500 text-[20px] mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </p>

          {/* Form */}
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>

            <div>
              <label
                className="text-[18px] font-semibold text-purple-600"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-[50px] mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-300 text-gray-700"
              />
            </div>

            <div className="relative">
              <label
                className="text-[18px] font-semibold text-purple-600"
                htmlFor="password"
              >
                Password
              </label>
              <input
              id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full h-[50px] mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-300 text-gray-700"
              />
              <button
                  type="button"
                  className="absolute inset-y-0 right-1 top-6 pr-3 flex items-center cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-base-content/40" />
                  ) : (
                    <Eye className="h-5 w-5 text-base-content/40" />
                  )}
                </button>
            </div>

            <button
              type="submit"
              className={`${
                isFormValid
                  ? "bg-purple-600 cursor-pointer"
                  : "bg-gray-300 cursor-not-allowed"
              } mt-4 h-[50px] text-[18px] text-white hover:bg-purple-700 disabled:opacity-50 rounded-lg`}
              disabled={!isFormValid}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
