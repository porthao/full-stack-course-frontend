"use client";

import { Button, TextInput } from "flowbite-react";
import { useState } from "react";
import {
  FaFacebookF,
  FaGoogle,
  FaGithub,
  FaLock,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowHidePw = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="h-screen bg-gray-300 flex justify-center items-center">
      <div className="w-1/2 h-1/2 bg-white flex justify-center items-center rounded-md">
        {/* Left side */}
        <div className="w-1/2 flex flex-col justify-center items-center space-y-4 p-4">
          <h1 className="text-teal-500 text-2xl font-bold">
            Login in to orkard tech system
          </h1>
          <div className="w-full flex justify-center space-x-2">
            <p className="bg-gray-300 p-2 rounded-full">
              <FaFacebookF className="text-teal-500" />
            </p>
            <p className="bg-gray-300 p-2 rounded-full">
              <FaGoogle className="text-teal-500" />
            </p>
            <p className="bg-gray-300 p-2 rounded-full">
              <FaGithub className="text-teal-500" />
            </p>
          </div>
          <p className="text-gray-400">or use your email account</p>
          <TextInput
            className="w-full"
            id="email"
            type="email"
            icon={MdEmail}
            placeholder="example@gmail.com"
            required
          />
          <TextInput
            className="w-full"
            id="password"
            type={showPassword ? "text" : "password"}
            icon={FaLock}
            // rightIcon={FaEye}
            rightIcon={() =>
              !showPassword ? (
                <FaEye
                  onClick={handleShowHidePw}
                  className="cursor-pointer"
                  fontSize={12}
                  width={16}
                />
              ) : (
                <FaEyeSlash
                  onClick={handleShowHidePw}
                  className="cursor-pointer"
                />
              )
            }
            placeholder="password"
            required
          />
          <Button className="w-2/3 bg-teal-500 rounded-full">Sign in</Button>
        </div>

        {/* Right side */}
        <div className="bg-teal-500 w-1/2 h-full">
          <div className="h-full flex flex-col justify-center items-center space-y-3 p-4">
            <h1 className="text-white text-3xl font-bold">Hello, friend!</h1>
            <p className="text-gray-200">
              Enter your personal details and start to join us!.
            </p>
            <Button className="text-white rounded-full px-5 border- bg-transform">
              SIGN UP
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
