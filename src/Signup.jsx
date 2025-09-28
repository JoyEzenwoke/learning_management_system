import loginimage from "./assets/loginimage.png";
import logos_google from "./assets/logos_google.png";
import logos_facebook from "./assets/logos_facebook.png";

export default function signup() {
return (
    <div className="flex h-screen bg-[#000] ">
      {/* LEFT SIDE: Image */}
      <div className="w-1/2 h-full">
        <img
          src={loginimage}
          alt="Login design"
          className="w-full h-full object-cover"
        />
      </div>

      {/* RIGHT SIDE: signup Form */}
      <div className="w-1/2 h-full flex items-start justify-center">
        <div className="w-full max-w-md p-8 mt-6">
          {/* Account heading */}
          <h2 className="text-4xl font-bold mb-1  text-[#f3f4f6] ">Create Your Account</h2>
          <h4 className="text-2xl font-serif mb-6  flex justify-center text-[#ffff]">Let's get started</h4>

          {/* Tabs */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <p className="text-lg text-[#99a1af] cursor-pointer ">Log in</p>
            <p className="text-lg font-bold text-[#ffffff] cursor-pointer">Signup</p>
          </div>

    
          {/* Form */}
          <form className="space-y-4">
          {/* First & Last Name */}
          <div className="flex space-x-4">
            <input
            type="text"
            placeholder="First Name"
            className="w-full px-4 py-3 border border-[#4a5565] rounded-lg bg-[#ffff] text-[#000] placeholder-[#99a1af] focus:outline-none"
            />
            <input
            type="text"
            placeholder="Last Name"
            className="w-full px-4 py-3 border border-[#4a5565] rounded-lg bg-[#ffff] text-[#000] placeholder-[#99a1af] focus:outline-none"
            />
            </div>
            {/* Email */}
            <input
            type="email"
            placeholder="Enter email"
            className="w-full px-4 py-3 border border-[#4a5565] rounded-lg bg-[#ffff] text-[#000] placeholder-[#99a1af] focus:outline-none"
            />

            {/* Create Password */}
            <input
            type="password"
            placeholder="Create Password"
            className="w-full px-4 py-3 border border-[#4a5565] rounded-lg bg-[#ffff] text-[#000] placeholder-[#99a1af] focus:outline-none"
            />

            {/* Confirm Password */}
            <input
            type="password"
            placeholder="Confirm Password"
            className="w-full px-4 py-3 border border-[#4a5565] rounded-lg bg-[#ffff] text-[#000] placeholder-[#99a1af] focus:outline-none"
            />

            {/* signup button */}
            <button
            type="submit"
            className=" w-40 flex justify-center mt-4 mx-auto bg-[#7BB0FF] text-[#000] cursor-pointer py-3 rounded-lg font-semibold ">
              Signup
              </button>
              </form>
              
              {/* Divider */}
              <div className="flex justify-center my-6">
                <p className="px-3 text-[#99a1af]  text-sm">or</p>
                </div>
                
              {/* Social buttons */}
              <div className="flex gap-4">
            <button className="flex-1 flex items-center justify-center gap-3 border border-[#4a5565] px-4 py-2 rounded-lg bg-[#000000] text-white hover:bg-[#101828] transition">
              <img src={logos_google} alt="Google" className="w-5 h-5" />
              <p className="text-sm">Google</p>
            </button>
                  
            <button
              className="flex-1 flex items-center justify-center gap-3 bg-[#1447e6] text-[#ffff] px-4 py-2 rounded-lg hover:bg-[#1447e6] transition">
              <img src={logos_facebook} alt="Facebook" className="w-5 h-5" />
              <p className="text-sm">Facebook</p>
            </button>
              </div>
                    
              {/* Already have an account */}
              <p className="text-sm text-gray-400 text-center mt-6">
              Already have an account?{" "}
              <a href="/login" className="text-blue-500 hover:underline">
                Log in
              </a>
              </p>
            </div>
        </div>
    </div>
  );
}
