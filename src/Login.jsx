import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "./auth";
import { Mail, Lock, Eye } from "lucide-react";
import IMG from "./assets/IMG.png";
export default function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    login();
    navigate("/Dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4 font-sans">
      <div className="w-full max-w-[380px] bg-white rounded-2xl shadow-2xl overflow-hidden">
        <div className="bg-brand-tan p-10 text-center text-white">
          <div className="flex items-center justify-center overflow-hidden">
            <img
              src={IMG}
              alt="Artbehindbar Logo"
              className="w-15 h-12 object-contain"
            />
          </div>
          <h2 className="text-xl font-bold">The Art of Reform</h2>
          <p className="text-sm opacity-90">Admin Login</p>
          <p className="text-[10px] opacity-70 mt-1 uppercase tracking-wider">
            Sign in to manage your platform
          </p>
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-5">
          {/* Email */}
          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1 ml-1">
              Email Address
            </label>
            <div className="relative flex items-center bg-white-50 border border-gray-200 rounded-lg focus-within:border-brand-tan transition-all">
              <Mail className="ml-3 text-gray-400" size={16} />
              <input
                type="email"
                placeholder="admin@artbehindbar.com"
                required
                className="w-full p-2.5 text-sm bg-transparent outline-none"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1 ml-1">
              Password
            </label>
            <div className="relative flex items-center bg-gray-50 border border-gray-200 rounded-lg focus-within:border-brand-tan transition-all">
              <Lock className="ml-3 text-gray-400" size={16} />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                required
                className="w-full p-2.5 text-sm bg-transparent outline-none"
              />
              <Eye
                className="mr-3 text-gray-300 cursor-pointer hover:text-gray-500"
                size={16}
                onClick={() => setShowPassword(!showPassword)}
              />
            </div>
          </div>

          {/* Remember me */}
          <div className="flex items-center space-x-2 ml-1">
            <input
              type="checkbox"
              id="remember"
              className="rounded border-gray-300 text-brand-tan focus:ring-brand-tan"
            />
            <label
              htmlFor="remember"
              className="text-xs text-gray-500 cursor-pointer"
            >
              Remember me
            </label>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-brand-tan hover:bg-[#b3936d] text-white py-3 rounded-xl font-semibold transition-all shadow-lg active:scale-[0.98]"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
