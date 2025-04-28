import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff} from "lucide-react";

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    password: "",
    companyName: "",
    isAgency: null,
  });

  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "radio" ? value === "yes" : value,
    }));
  };

  const isFormFilled = Object.values(formData).every(
    (field) => field !== "" && field !== null
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex justify-center bg-gray-100 px-4 py-6">
      <div className="bg-white p-8 rounded-md shadow-md w-full max-w-md">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          Create your <br /> PopX account
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Full Name */}
          <div>
            <label className="text-[18px] font-semibold text-purple-600">
              Full Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter full name"
              className="w-full h-[50px] mt-1 border rounded-md px-3 py-2 outline-none"
              required
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="text-[18px] font-semibold text-purple-600">
              Phone number<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Enter phone number"
              className="w-full h-[50px] mt-1 border rounded-md px-3 py-2 outline-none"
              required
            />
          </div>

          {/* Email Address */}
          <div>
            <label className="text-[18px] font-semibold text-purple-600">
              Email address<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email address"
              className="w-full h-[50px] mt-1 border rounded-md px-3 py-2 outline-none"
              required
            />
          </div>

          {/* Password */}
          <div className="relative">
            <label className="text-[18px] font-semibold text-purple-600">
              Password<span className="text-red-500">*</span>
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter password"
              className="w-full h-[50px] mt-1 border rounded-md px-3 py-2 outline-none"
              required
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

          {/* Company Name */}
          <div>
            <label className="text-[18px] font-semibold text-purple-600">
              Company name
            </label>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              placeholder="Enter company name"
              className="w-full h-[50px] mt-1 border rounded-md px-3 py-2 outline-none"
            />
          </div>

          {/* Are you an Agency */}
          <div>
            <p className="text-[20px] font-semibold text-gray-700 mb-2">
              Are you an Agency?<span className="text-red-500">*</span>
            </p>
            <div className="flex gap-6">
              <label className="flex items-center gap-2 text-[18px] cursor-pointer">
                <input
                  type="radio"
                  name="isAgency"
                  value="yes"
                  checked={formData.isAgency === true}
                  onChange={handleChange}
                />
                Yes
              </label>
              <label className="flex items-center gap-2 text-[18px] cursor-pointer">
                <input
                  type="radio"
                  name="isAgency"
                  value="no"
                  checked={formData.isAgency === false}
                  onChange={handleChange}
                />
                No
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={!isFormFilled}
            className={`w-full h-[50px] cursor-pointer hover:bg-purple-700 mt-4 py-3 rounded-md text-white font-semibold ${
              isFormFilled
                ? "bg-purple-600 cursor-pointer"
                : "bg-gray-400 cursor-not-allowed"
            }`}
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
