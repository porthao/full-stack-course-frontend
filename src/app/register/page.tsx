import { Button } from "flowbite-react";
import React from "react";
import { FaFacebookF, FaGoogle, FaLinkedinIn } from "react-icons/fa";

const Register = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <Button outline gradientDuoTone="cyanToBlue">
        Cyan to Blue
      </Button>
      <div className="bg-white w-2/3 shadow-lg flex rounded-xl">
        {/* Left Side */}
        <div className="w-1/2 bg-green-400 p-6 text-white hidden md:flex flex-col justify-center items-center">
          <h2 className="text-3xl font-bold">Welcome Back!</h2>
          <p className="py-6 text-center">
            To keep connected with us please login with your personal info
          </p>

          <Button outline gradientDuoTone="greenToBlue">
            Sign In
          </Button>
        </div>

        {/* Right Side */}
        <div className="w-full md:w-1/2 p-6">
          <h2 className="text-green-400 text-2xl font-semibold mb-6 text-center">
            Create Account
          </h2>

          <div className="flex justify-center space-x-3 mb-4">
            <button className="bg-gray-200 rounded-full p-2">
              <FaFacebookF className="text-green-400" />
            </button>
            <button className="bg-gray-200 rounded-full p-2">
              <FaGoogle className="text-green-400" />
            </button>
            <button className="bg-gray-200 rounded-full p-2">
              <FaLinkedinIn className="text-green-400" />
            </button>
          </div>

          <p className="text-green-400 text-center mb-4">
            or use your email for registration:
          </p>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-400"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-400"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-400"
            />
            <button className="w-full bg-green-400 text-white py-2 rounded-full font-semibold hover:bg-teal-600">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
