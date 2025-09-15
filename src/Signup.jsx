import { useState } from "react";
import loginimage from "./assets/loginimage.png";
import logos_google from "./assets/logos_google.png";
import logos_facebook from "./assets/logos_facebook.png";
import eyeicon from "./assets/eyeicon.png";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex h-screen bg-black">
      {/* LEFT SIDE: Image */}
      <div className="w-1/2 h-full">
        <img
          src={loginimage}
          alt="Login design"
          className="w-full h-full object-cover"
        />
      </div>

      {/* RIGHT SIDE: Login Form */}
      <div className="w-1/2 h-full flex items-start justify-center">
        <div className="w-full max-w-md p-8 mt-6">
          {/* Welcome heading */}
          <h2 className="text-5xl font-bold mb-6 text-gray-100">Welcome!!!...</h2>

          {/* Tabs */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <p className="text-lg font-bold text-white cursor-pointer">Login</p>
            <p className="text-lg text-gray-400 cursor-pointer ">
              Signup
            </p>
          </div>

          {/* Form */}
          <form className="space-y-4">
            {/* Email */}
            <input
              type="email"
              placeholder="Enter email"
              className="w-full px-4 py-3 border border-gray-600 rounded-lg bg-[#ffff] text-[#000] text- placeholder-gray-400 focus:outline-none "
            />

            {/* Password with eye icon */}
              <div className="relative">
                 <input type={showPassword ? "text" : "password"}
                  placeholder="Enter password"
                   className="w-full px-4 py-3 border border-gray-600 rounded-lg bg-[#fff] text-[#050404]  placeholder-gray-400 focus:outline-none " />
                    <img src={eyeicon} alt="Toggle password visibility"
                     className="w-5 h-5 absolute inset-y-0 right-3 my-auto cursor-pointer " onClick={() => setShowPassword(!showPassword)}
                      />
                       </div>

            {/* Forgot password + Remember me */}
            <div className="flex items-center justify-between text-sm mb-2 text-gray-400">
              <a href="/forgot-password" className="text-white hover:underline">
                Forgot password?
              </a>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="rounded" />
                <p>Remember me</p>
              </label>
            </div>

            {/* Login button */}
            <button
              type="submit"
              className="w-full bg-[#7BB0FF] text-[#000] py-3 rounded-lg font-semibold "
            >
              Log In
            </button>
          </form>

          {/* Divider */}
          <div className="flex justify-center my-6">
            <p className="px-3 text-[#99a1af]  text-sm">or</p>
            
          </div>

          {/* Social buttons */}
          <div className="flex gap-4">
            <button className="flex-1 flex items-center justify-center gap-3 border border-[#4a5565] px-4 py-2 rounded-lg bg-black text-white hover:bg-gray-900 transition">
              <img src={logos_google} alt="Google" className="w-5 h-5" />
              <p className="text-sm">Google</p>
            </button>

            <button className="flex-1 flex items-center justify-center gap-3 bg-[#1447e6] text-[#ffff] px-4 py-2 rounded-lg hover:bg-blue-700 transition">
              <img src={logos_facebook} alt="Facebook" className="w-5 h-5" />
              <p className="text-sm">Facebook</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
